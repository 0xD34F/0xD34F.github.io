function getRandomInt(max, min) {
    min = min || 0;

    return Math.floor(Math.random() * (max - min)) + min;
}

var puzzle = {
/*
 *  плитки хранятся в одномерном массиве, координаты на плоскости определяются следующим образом:
 *      номер столбца = позиция плитки в массиве % 4
 *      номер строки = floor(позиция плитки в массиве / 4)
 */
    tiles: [],
    gameStarted: false,
    gamePane: null,
    setTileCoord: function(t, tileIndex) {
        t.style.left = 100 * (tileIndex % 4) + 'px';
        t.style.top = 100 * Math.floor(tileIndex / 4) + 'px';
    },
    initGamePane: function() {
        for (var i = 0; i < 15; i++) {
            var t = document.createElement('div');
            t.classList.add('tile');
            t.innerHTML = '' + (i + 1);
            t.tileData = (i + 1);
            puzzle.setTileCoord(t, i);

            puzzle.gamePane.appendChild(t);
            puzzle.tiles.push(t);
        }

        puzzle.emptyCoord = 16;
        puzzle.tiles.push(null);
    },
    getTileByIndex: function(index) {
        var c = puzzle.gamePane.children;
        for (var i = 0; i < c.length; i++) {
            var tile = c[i];
            if (tile.tileData === index) {
                return tile;
            }
        }

        return null;
    },
    startGame: function() {
        puzzle.endGameMessage(false);
        puzzle.gameStarted = true;

        var tileIndexesSorted = [ null ];
        for (var i = 1; i < 16; i++) {
            tileIndexesSorted.push(i);
        }
        tileIndexesRandom = [];
        for (i = 0; i < 16; i++) {
            tileIndexesRandom.push(tileIndexesSorted.splice(getRandomInt(tileIndexesSorted.length), 1)[0]);
        }

        // чтобы нерешаемую расстановку превратить в решаемую, необходимо поменять местами любые две соседних панели
        if (!puzzle.solution.exists(tileIndexesRandom)) {
            var empty01 = tileIndexesRandom[0] === null || tileIndexesRandom[1] === null,
                p = empty01 ? 14 : 0,
                q = empty01 ? 15 : 1,
                t = tileIndexesRandom[p];

            tileIndexesRandom[p] = tileIndexesRandom[q];
            tileIndexesRandom[q] = t;
        }

        var data = [];
        for (i = 0; i < 16; i++) {
            data.push({
                tile: puzzle.getTileByIndex(tileIndexesRandom[i]),
                coord: i
            })
        }
        puzzle.moveTiles(data, true);
    },
    endGameMessage: function(show) {
        document.getElementById('endGameMessage').classList[show ? 'remove' : 'add']('hidden');
    },
    endGame: function() {
        puzzle.gameStarted = false;
        puzzle.endGameMessage(true);
    },
    restartBlink: function() {
        var restart = document.getElementById('restart');
        restart.classList.add('border-blink');
        setTimeout(function() {
            restart.classList.remove('border-blink');
        }, 1000);
    },
    solution: {
        combinations: [
            [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null ]
        ],
        exists: function(tiles) {
            var controlSum = 0;
            for (i = 0; i < 16; i++) {
                var n = tiles[i];
                if (n === null) {
                    controlSum += 1 + Math.floor(i / 4);
                } else {
                    var k = 0;
                    for (var j = i + 1; j < 16; j++) {
                        var m = tiles[j];
                        if (m !== null && m < n) {
                            controlSum++;
                        }
                    }
                }
            }

            return !(controlSum % 2);
        },
        found: function() {
            var currentSolution = puzzle.tiles.map(function(n) {
                return n ? n.tileData : null;
            });

nextSolution:
            for (var i = 0; i < puzzle.solution.combinations.length; i++) {
                var s = puzzle.solution.combinations[i];
                for (var j = 0; j < s.length; j++) {
                    if (s[j] !== currentSolution[j]) {
                        continue nextSolution;
                    }
                }

                return true;
            }

            return false;
        }
    },
    moveTiles: function(data, slow) {
        if (slow) {
            puzzle.gamePane.classList.add('restarting');
            setTimeout(function() {
                puzzle.gamePane.classList.remove('restarting');
            }, 400);
        }

        data.forEach(function(n) {
            puzzle.tiles[n.coord] = n.tile;

            if (n.tile === null) {
                puzzle.emptyCoord = n.coord;
            } else {
                puzzle.setTileCoord(n.tile, n.coord);
            }
        });
    },
    makeStep: function(tile, coord) {
        if (!tile || puzzle.tiles[coord] !== tile || Math.abs(coord % 4 - puzzle.emptyCoord % 4) === 3) {
            return false;
        }

        puzzle.moveTiles([ {
            tile: tile,
            coord: puzzle.emptyCoord
        }, {
            tile: null,
            coord: coord
        } ]);

        if (puzzle.solution.found()) {
            puzzle.endGame();
        }

        return true;
    }
};

window.onload = function() {
    document.getElementById('restart').onclick = function(e) {
        puzzle.startGame();
    };

    document.getElementById('solve').onclick = function(e) {
        puzzle.gameStarted = false;
        puzzle.moveTiles(puzzle.solution.combinations[0].map(function(n, i) {
            return {
                tile: puzzle.getTileByIndex(n),
                coord: i
            };
        }), true);
    };

    puzzle.gamePane = document.getElementById('gamePane');
    puzzle.gamePane.onclick = function(e) {
        var t = e.target;
        if (t.classList.contains('tile')) {
            if (puzzle.gameStarted) {
                puzzle.makeStep(t, puzzle.emptyCoord - 1) ||
                puzzle.makeStep(t, puzzle.emptyCoord + 1) ||
                puzzle.makeStep(t, puzzle.emptyCoord - 4) ||
                puzzle.makeStep(t, puzzle.emptyCoord + 4);
            } else {
                puzzle.restartBlink();
            }
        }
    };

    puzzle.initGamePane();
    setTimeout(puzzle.startGame, 500);
};

window.onkeydown = function(e) {
    if (puzzle.gameStarted) {
        var coord = puzzle.emptyCoord;

        switch (e.which) {
            case 37: coord += 1; break; // RIGHT
            case 38: coord += 4; break; // DOWN
            case 39: coord -= 1; break; // LEFT
            case 40: coord -= 4; break; // UP

            default: return;
        }

        puzzle.makeStep(puzzle.tiles[coord], coord);
    } else {
        puzzle.restartBlink();
    }
};
