window.onload = function() {
    var textElem = document.getElementById('text'),
        frequencyElem = document.getElementById('frequency'),
        speedWPMElem = document.getElementById('speedWPM'),
        speedTimeUnitElem = document.getElementById('speedTimeUnit'),
        playElem = document.getElementById('play'),
        downloadElem = document.getElementById('download');

    if (!Morse.hasOwnProperty('play')) {
        playElem.disabled = true;
        playElem.setAttribute('title', 'AudioContext is not supported');
    }

    textElem.value = 'Morse code';
    frequencyElem.value = Morse.frequency;
    speedWPMElem.value = Morse.WPM;
    speedTimeUnitElem.value = Morse.timeUnit;

    frequencyElem.onchange = function() {
        Morse.frequency = this.value;
        document.getElementById('frequencyValue').innerHTML = this.value;
    };
    frequencyElem.onchange();

    speedWPMElem.onchange = function(e) {
        Morse.WPM = this.value;
        document.getElementById('speedWPMValue').innerHTML = this.value;

        if (Morse.timeUnit != speedTimeUnitElem.value && e) {
            speedTimeUnitElem.value = Morse.timeUnit;
            speedTimeUnitElem.onchange();
        }
    };
    speedWPMElem.onchange();

    speedTimeUnitElem.onchange = function(e) {
        Morse.timeUnit = this.value;
        document.getElementById('speedTimeUnitValue').innerHTML = this.value;

        if (Morse.WPM != speedWPMElem.value && e) {
            speedWPMElem.value = Morse.WPM;
            speedWPMElem.onchange();
        }
    };
    speedTimeUnitElem.onchange();

    textElem.onchange = textElem.onkeyup = function() {
        setTimeout(function() {
            document.getElementById('value').value = Morse.encode(textElem.value);
        }, 0);
    };
    textElem.onchange();

    playElem.onclick = function() {
        if (Morse.isPlaying()) {
            Morse.stop();
        } else {
            Morse.play(textElem.value);
        }
    };

    downloadElem.onclick = function() {
        Morse.download({
            message: textElem.value
        });
    }

    document.addEventListener('morse-signal-on', function() {
        playElem.innerHTML = 'Stop';
    });
    document.addEventListener('morse-signal-off', function() {
        playElem.innerHTML = 'Play';
    });
};
