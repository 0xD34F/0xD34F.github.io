var amountInWords = (function() {
    // квадриллионы и дальше - не обрабатываем
    var MAX_AMOUNT = Math.pow(10, 15);

    var zero = 'ноль';

    var from0to9 = [
            [ '', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять' ],
            [ '', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять' ]
        ],
        from10to19 = [ 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать' ],
        tens = [ 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто' ],
        hundreds = [ '', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот' ];

    var powers = [
        [ '',         '',          '' ],
        [ 'тысяча',   'тысячи',    'тысяч' ],
        [ 'миллион',  'миллиона',  'миллионов' ],
        [ 'миллиард', 'миллиарда', 'миллиардов' ],
        [ 'триллион', 'триллиона', 'триллионов' ],
    ];
    var defaultWordFix = {
        1: true
    };

    var units = [
        [ 'копейка', 'копейки', 'копеек' ],
        [ 'рубль',   'рубля',   'рублей' ]
    ];

    var numberToWords = function(value, wordFix) {
        wordFix = wordFix || defaultWordFix;

        if (value === 0) {
            return zero;
        }

        var words = [];

        for (var i = 0; value; i++, value = Math.floor(value / 1000)) {
            var t = value % 1000,
                s = [];

            if (t === 0) {
                continue;
            }

            if (t > 99) {
                s.push(hundreds[Math.floor(t / 100)]);
                t = t % 100;
            }
            if (t >= 20) {
                s.push(tens[Math.floor(t / 10) - 2]);
                t = t % 10;
            }
            if (t > 9) {
                s.push(from10to19[t - 10]);
            } else {
                s.push(from0to9[+!!wordFix[i]][t]);
            }

            s.push(powers[i][detectDeclension(value)]);
            
            Array.prototype.unshift.apply(words, s);
        }

        return words.filter(function(n) {
            return !!n;
        }).join(' ');
    };

    var detectDeclension = function(value) {
        value = value % 100;

        // 1, 21, 31, ...
        if (value !== 11 && value % 10 === 1) {
            return 0;
        }

        // 2, 3, 4, 22, 23, 24, 32, 33, 34, ...
        if ((value < 12 || value > 14) && [ 2, 3, 4 ].indexOf(value % 10) !== -1) {
            return 1;
        }

        return 2;
    };

    return function(amount) {
        amount = +(+amount).toFixed(2);

        if (isNaN(amount) || amount < 0 || amount >= MAX_AMOUNT) {
            return null;
        }

        var integerPart = Math.floor(amount),
            fractionalPart = Math.round(100 * (amount - integerPart)),
            integerPartInWords = numberToWords(integerPart),
            fractionalPartInWords = numberToWords(fractionalPart, { 0: true });

        return [
            integerPartInWords,
            units[1][detectDeclension(integerPart)],
            fractionalPartInWords,
            units[0][detectDeclension(fractionalPart)]
        ].join(' ');
    };
})();
