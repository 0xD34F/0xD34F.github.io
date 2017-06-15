var sortTest = (function() {
    var currentTest = null,
        worker = null,
        failed = null;

    function onMessage(e) {
        // игнорируются результаты всех тестов, кроме текущего
        if (currentTest !== e.data.id) {
            return;
        }

        if (e.data.results) {
            addResult(e.data.results);
        } else if (e.data.results === null) {
            sortTest.stop(true);
        } else if (e.data.error) {
            var errors = $('#errors')[0];
            errors.innerHTML += (errors.innerHTML ? '<br>' : '') + e.data.error;

            failed = e.data.id;
        }
    }

    function resetResultArrays(sorts) {
        sortTest.rawResults = [];

        for (var t in sortTest.tests) {
            sortTest.tests[t].chartData = [];
        }

        for (var i = 0; i < sorts.length; i++) {
            var sort = sorts[i];

            for (t in sortTest.tests) {
                var d = sortTest.tests[t].chartData;
                d.push({
                    key: sort,
                    values: [],
                    color: sortTest.sorts[sort].color
                });
                sortTest.sorts[sort].seriesNum = d.length - 1;
            }
        }

        for (var t in sortTest.tests) {
            d3.select('#' + sortTest.tests[t].chartID + ' svg')
                .datum(sortTest.tests[t].chartData)
                .call(sortTest.tests[t].chart);
        }
    }

    function addResult(data) {
        sortTest.rawResults.push(data);

        for (var t in sortTest.tests) {
            var values = sortTest.tests[t].chartData[sortTest.sorts[data.sort].seriesNum].values;
            values.push({
                x: data.elements,
                y: data[t]
            });
            // на тот случай, если данные придут не в том порядке
            values.sort(function(a, b) {
                return a.x - b.x;
            });
        }

        updateCharts();
    }

    function updateCharts() {
        for (var t in sortTest.tests) {
            var c = sortTest.tests[t].chart;
            if (c && c.update) {
                c.update();
            }
        }
    }

    return {
        sorts: {
            bubble: {
                color: '#0f5ac6'
            },
            oddEven: {
                color: '#ff960b'
            },
            gnome: {
                color: '#029311'
            },
            selection: {
                color: '#e3d844'
            },
            insertion: {
                color: '#8c2ee0'
            },
            comb: {
                color: '#1fef2b'
            },
            counting: {
                color: '#ff67eb'
            },
            heap: {
                color: '#ff0000'
            },
            quick: {
                color: '#91bcd5'
            }
        },
        tests: {
            comparisons: {
                title: 'Comparisons',
                chartID: 'sortTestResultsComparisons',
                unit: 'Comparisons'
            },
            swaps: {
                title: 'Swaps',
                chartID: 'sortTestResultsSwaps',
                unit: 'Swaps'
            },
            time: {
                title: 'Run time',
                chartID: 'sortTestResultsTime',
                unit: 'Milliseconds'
            }
        },
        testArraysSizes: '[ 1000, 2000, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000 ]',
        testArraysFill:
'function(array) {\n\
    for (var i = 0; i < array.length; i++) {\n\
        array[i] = random(array.length);\n\
    }\n\
}',
        rawResults: [],
        init: function() {
            var $charts = $('#charts'),
                $sorts = $('#sorts .dropdown-menu');

            for (var t in sortTest.tests) {
                var test = sortTest.tests[t];

                $charts.append('<div class="panel panel-default"><div class="panel-heading">' + test.title + '</div><div class="panel-body" id="' + test.chartID + '"><svg></svg></div></div>');

                var c = test.chart = nv.models.lineChart().margin({ left: 150, right: 50 });

                c.tooltip.headerFormatter(function(d) {
                    return d + ' elements';
                });

                c.tooltip.valueFormatter((function(k) {
                    return function(d) {
                        return d + ' ' + k;
                    };
                })(test.unit.toLowerCase()));

                c.xAxis
                    .axisLabel('Number of elements')
                    .tickFormat(d3.format(',r'));

                c.yAxis
                    .axisLabel(test.unit)
                    .axisLabelDistance(50)
                    .tickFormat(d3.format(',r'));
            }

            nv.utils.windowResize(updateCharts);

            for (var i in sortTest.sorts) {
                $sorts.append('<li><a href="#"><input sort-name="' + i + '" type="checkbox" checked>' + i + '</a></li>');
            }
        },
        isTesting: function() {
            return !!currentTest;
        },
        start: function(testParams) {
            if (!currentTest) {
                worker = new Worker('sort-test-worker.js');
                worker.addEventListener('message', onMessage);
                currentTest = +new Date();
                resetResultArrays(testParams.sort);

                var test = {
                    id: currentTest,
                    params: testParams
                };

                worker.postMessage(test);
                $(document).trigger('sort-test-started', test);
            }
        },
        stop: function(complete) {
            if (currentTest) {
                worker.terminate();
                worker = null;
                $(document).trigger('sort-test-ended', {
                    id: currentTest,
                    status: complete ? (failed === currentTest ? 'fail' : 'done') : 'cancel'
                });
                currentTest = null;
            }
        }
    }
})();

$(document).ready(function() {
    sortTest.init();

    $('#runTest').click(function() {
        if (sortTest.isTesting()) {
            sortTest.stop(false);
        } else {
            sortTest.start({
                sort: $('#sorts input').map(function() {
                    return this.checked ? $(this).attr('sort-name') : null;
                }).toArray(),
                elements: sortTest.testArraysSizes,
                fill: sortTest.testArraysFill
            });
        }
    });

    $('#testArraysSizes,#testArraysFill').click(function() {
        var propName = $(this).attr('propName');
        $('#testArraysEditor').attr('data-editing', propName).val(sortTest[propName]);
    });

    $('#BOK').click(function() {
        var $editor = $('#testArraysEditor')
        sortTest[$editor.attr('data-editing')] = $editor.val();
    });

    $('#testArraysEditor').keydown(function(e) {
        if (e.keyCode === 9) {
            var start = this.selectionStart,
                end = this.selectionEnd,
                $this = $(this),
                value = $this.val(),
                tab = '    ';

            $this.val(value.substring(0, start) + tab + value.substring(end));

            this.selectionStart = this.selectionEnd = start + tab.length;

            e.preventDefault();
        }
    });

    var options = [];

    $('#sorts').on('click', '.dropdown-menu a', function(event) {
        setTimeout(function() {
            var $inp = $(event.currentTarget).find('input');
            $inp.prop('checked', !$inp.prop('checked'));
        }, 0);

        $(event.target).blur();

        return false;
    });
}).on({
    'sort-test-started': function(e) {
        $('#runTest').attr('title', 'Stop test').find('span').removeClass('glyphicon-play').addClass('glyphicon-stop');
        $('#errors').hide().empty();
        $('#success,#cancel').hide();
        $('#progress').show();
    },
    'sort-test-ended': function(e, data) {
        $('#runTest').attr('title', 'Run test').find('span').removeClass('glyphicon-stop').addClass('glyphicon-play');
        $('#progress').hide();
        switch (data.status) {
            case 'fail': $('#errors').show(); break;
            case 'done': $('#success').show(); break;
            case 'cancel': $('#cancel').show(); break;
        }
    }
});
