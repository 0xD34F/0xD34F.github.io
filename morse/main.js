window.onload = function() {
    if (!window.AudioContext) {
        var t = document.getElementsByClassName('content')[0];
        t.classList.add('error');
        t.innerHTML = 'AudioContext not supported';
        return;
    }

    var textElem = document.getElementById('text'),
        frequencyElem = document.getElementById('frequency'),
        speedElem = document.getElementById('speed'),
        playElem = document.getElementById('play');

    textElem.value = 'Morse code';
    frequencyElem.value = 800;
    speedElem.value = 12;

    frequencyElem.onchange = function() {
        Morse.frequency = this.value;
        document.getElementById('frequencyValue').innerHTML = this.value;
    };
    frequencyElem.onchange();

    speedElem.onchange = function() {
        Morse.WPM = this.value;
        document.getElementById('speedValue').innerHTML = this.value;
    };
    speedElem.onchange();

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

    document.addEventListener('morse-signal-on', function() {
        playElem.innerHTML = 'Stop';
    });
    document.addEventListener('morse-signal-off', function() {
        playElem.innerHTML = 'Play';
    });
};
