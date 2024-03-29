var spinners = {
    'spinner-1': {
        source:
'.spinner-1 {\n\
    font-size: 10px;\n\
    background-color: transparent;\n\
    border-radius: 50%;\n\
    width: 2em;\n\
    height: 2em;\n\
    margin: 2em;\n\
    animation: spinner-1 1s infinite ease-in-out;\n\
}\n\
@keyframes spinner-1 {\n\
    0% {\n\
        box-shadow: -2em -2em #000, 2em -2em #CCC, 2em 2em #000, -2em 2em #CCC;\n\
    }\n\
    100% {\n\
        box-shadow: -2em 2em #CCC, -2em -2em #000, 2em -2em #CCC, 2em 2em #000;\n\
    }\n\
}'
    },
    'spinner-2': {
        source:
'.spinner-2 {\n\
    font-size: 10px;\n\
    width: 1em;\n\
    height: 1em;\n\
    margin: 1em 5.5em 5em 5.5em;\n\
    border-radius: 50%;\n\
    animation: spinner-2 1s infinite linear;\n\
    background-color: transparent;\n\
    transform: translateZ(0);\n\
}\n\
@keyframes spinner-2 {\n\
    0%, 75%, 100% {\n\
        box-shadow: -4.5em 2em 0 .5em #CCC, -1.5em 2em 0 .5em #CCC, 1.5em 2em 0 .5em #CCC, 4.5em 2em 0 .5em #CCC;\n\
    }\n\
    15% {\n\
        box-shadow: -4.5em 2em 0 .7em #000, -1.5em 2em 0 .5em #CCC, 1.5em 2em 0 .5em #CCC, 4.5em 2em 0 .5em #CCC;\n\
    }\n\
    30% {\n\
        box-shadow: -4.5em 2em 0 .5em #CCC, -1.5em 2em 0 .7em #000, 1.5em 2em 0 .5em #CCC, 4.5em 2em 0 .5em #CCC;\n\
    }\n\
    45% {\n\
        box-shadow: -4.5em 2em 0 .5em #CCC, -1.5em 2em 0 .5em #CCC, 1.5em 2em 0 .7em #000, 4.5em 2em 0 .5em #CCC;\n\
    }\n\
    60% {\n\
        box-shadow: -4.5em 2em 0 .5em #CCC, -1.5em 2em 0 .5em #CCC, 1.5em 2em 0 .5em #CCC, 4.5em 2em 0 .7em #000;\n\
    }\n\
}'
    },
    'spinner-3': {
        source:
'.spinner-3 {\n\
    font-size: 10px;\n\
    width: 2em;\n\
    height: 2em;\n\
    margin: 0 0 4em 0;\n\
    background-color: transparent;\n\
    border-radius: 50%;\n\
    animation: spinner-3 2.5s infinite linear;\n\
}\n\
@keyframes spinner-3 {\n\
    0% {\n\
        box-shadow: -10.5em 2em transparent, -10.5em 2em transparent, -10.5em 2em transparent, -10.5em 2em transparent;\n\
    }\n\
    5% {\n\
        box-shadow: -10.5em 2em transparent, -10.5em 2em transparent, -10.5em 2em transparent, -5.5em 2em #888;\n\
    }\n\
    10% {\n\
        box-shadow: -10.5em 2em transparent, -10.5em 2em transparent, -6.5em 2em #888, -0.5em 2em;\n\
    }\n\
    15% {\n\
        box-shadow: -10.5em 2em transparent, -7.5em 2em #888, -2.5em 2em, 4.5em 2em;\n\
    }\n\
    20% {\n\
        box-shadow: -8.5em 2em #888, -4.5em 2em, 1.5em 2em, 4.5em 2em;\n\
    }\n\
    25% {\n\
        box-shadow: -6.5em 2em, -1.5em 2em, 1.5em 2em, 4.5em 2em;\n\
    }\n\
    30%, 55% {\n\
        box-shadow: -4.5em 2em, -1.5em 2em, 1.5em 2em, 4.5em 2em;\n\
    }\n\
    60% {\n\
        box-shadow: -4.5em 2em, -1.5em 2em, 1.5em 2em, 6.5em 2em;\n\
    }\n\
    65% {\n\
        box-shadow: -4.5em 2em, -1.5em 2em, 4.5em 2em, 8.5em 2em #888;\n\
    }\n\
    70% {\n\
        box-shadow: -4.5em 2em, 2.5em 2em, 7.5em 2em #888, 10.5em 2em transparent;\n\
    }\n\
    75% {\n\
        box-shadow: 0.5em 2em, 6.5em 2em #888, 10.5em 2em transparent, 10.5em 2em transparent;\n\
    }\n\
    80% {\n\
        box-shadow: 5.5em 2em #888, 10.5em 2em transparent, 10.5em 2em transparent, 10.5em 2em transparent;\n\
    }\n\
    85%, 100% {\n\
        box-shadow: 10.5em 2em transparent, 10.5em 2em transparent, 10.5em 2em transparent, 10.5em 2em transparent;\n\
    }\n\
}'
    },
    'spinner-4': {
        source:
'.spinner-4 {\n\
    font-size: 10px;\n\
    width: 1em;\n\
    height: 1em;\n\
    margin: 0 0 4em 0;\n\
    border-radius: 50%;\n\
    animation: spinner-4 1.5s infinite linear;\n\
    background-color: transparent;\n\
    transform: translateZ(0);\n\
}\n\
@keyframes spinner-4 {\n\
    0%, 90%, 100% {\n\
        box-shadow: -4.5em 2em 0 -.5em, -1.5em 2em 0 -.5em, 1.5em 2em 0 -.5em, 4.5em 2em 0 -.5em;\n\
    }\n\
    10% {\n\
        box-shadow: -4.5em 2em 0 0em, -1.5em 2em 0 -.5em, 1.5em 2em 0 -.5em, 4.5em 2em 0 -.5em;\n\
    }\n\
    20% {\n\
        box-shadow: -4.5em 2em 0 .5em, -1.5em 2em 0 0em, 1.5em 2em 0 -.5em, 4.5em 2em 0 -.5em;\n\
    }\n\
    30% {\n\
        box-shadow: -4.5em 2em 0 1em, -1.5em 2em 0 .5em, 1.5em 2em 0 0em, 4.5em 2em 0 -.5em;\n\
    }\n\
    40% {\n\
        box-shadow: -4.5em 2em 0 .5em, -1.5em 2em 0 1em, 1.5em 2em 0 .5em, 4.5em 2em 0 0em;\n\
    }\n\
    50% {\n\
        box-shadow: -4.5em 2em 0 0em, -1.5em 2em 0 .5em, 1.5em 2em 0 1em, 4.5em 2em 0 .5em;\n\
    }\n\
    60% {\n\
        box-shadow: -4.5em 2em 0 -.5em, -1.5em 2em 0 0em, 1.5em 2em 0 .5em, 4.5em 2em 0 1em;\n\
    }\n\
    70% {\n\
        box-shadow: -4.5em 2em 0 -.5em, -1.5em 2em 0 -.5em, 1.5em 2em 0 0em, 4.5em 2em 0 .5em;\n\
    }\n\
    80% {\n\
        box-shadow: -4.5em 2em 0 -.5em, -1.5em 2em 0 -.5em, 1.5em 2em 0 -.5em, 4.5em 2em 0 0em;\n\
    }\n\
}'
    },
    'spinner-5': {
        source:
'.spinner-5 {\n\
    font-size: 10px;\n\
    margin: 2em;\n\
    position: relative;\n\
}\n\
.spinner-5,\n\
.spinner-5::before,\n\
.spinner-5::after {\n\
    width: 1em;\n\
    height: 5em;\n\
    background-color: black;\n\
    animation: spinner-5 1.5s infinite ease-in-out;\n\
}\n\
.spinner-5::before,\n\
.spinner-5::after {\n\
    content: "";\n\
    position: absolute;\n\
    top: 0em;\n\
}\n\
.spinner-5::before {\n\
    left: -1.5em;\n\
    animation-delay: -.3s;\n\
}\n\
.spinner-5 {\n\
    animation-delay: -.15s;\n\
}\n\
.spinner-5::after {\n\
    left: 1.5em;\n\
    animation-delay: 0s;\n\
}\n\
@keyframes spinner-5 {\n\
    0%, 30%, 100% {\n\
        box-shadow: 0em 0em, 0em 0em;\n\
    }\n\
    15% {\n\
        box-shadow: 0em 2em, 0em -2em;\n\
    }\n\
}'
    },
    'spinner-6': {
        source:
'.spinner-6 {\n\
    font-size: 10px;\n\
    width: 2em;\n\
    height: 2em;\n\
    animation: spinner-6 1s infinite linear;\n\
    background-color: transparent;\n\
    margin: 2em;\n\
    transform: translateZ(0);\n\
}\n\
@keyframes spinner-6 {\n\
    0%, 100% {\n\
        box-shadow: 0 -2em 0 -.2em, 2em -2em 0 -.3em, 2em 0 0 -.6em, 2em 2em 0 -1em transparent, 0 2em 0 -1em, -2em 2em 0 -1em transparent, -2em 0 0 -.6em, -2em -2em 0 -.3em;\n\
    }\n\
    12.5% {\n\
        box-shadow: 0 -2em 0 -.3em, 2em -2em 0 -.2em, 2em 0 0 -.3em, 2em 2em 0 -.6em, 0 2em 0 -1em transparent, -2em 2em 0 -1em, -2em 0 0 -1em transparent, -2em -2em 0 -.6em;\n\
    }\n\
    25% {\n\
        box-shadow: 0 -2em 0 -.6em, 2em -2em 0 -.3em, 2em 0 0 -.2em, 2em 2em 0 -.3em, 0 2em 0 -.6em, -2em 2em 0 -1em transparent, -2em 0 0 -1em, -2em -2em 0 -1em transparent;\n\
    }\n\
    37.5% {\n\
        box-shadow: 0 -2em 0 -1em transparent, 2em -2em 0 -.6em, 2em 0 0 -.3em, 2em 2em 0 -.2em, 0 2em 0 -.3em, -2em 2em 0 -.6em, -2em 0 0 -1em transparent, -2em -2em 0 -1em;\n\
    }\n\
    50% {\n\
        box-shadow: 0 -2em 0 -1em, 2em -2em 0 -1em transparent, 2em 0 0 -.6em, 2em 2em 0 -.3em, 0 2em 0 -.2em, -2em 2em 0 -.3em, -2em 0 0 -.6em, -2em -2em 0 -1em transparent;\n\
    }\n\
    62.5% {\n\
        box-shadow: 0 -2em 0 -1em transparent, 2em -2em 0 -1em, 2em 0 0 -1em transparent, 2em 2em 0 -.6em, 0 2em 0 -.3em, -2em 2em 0 -.2em, -2em 0 0 -.3em, -2em -2em 0 -.6em;\n\
    }\n\
    75% {\n\
        box-shadow: 0 -2em 0 -.6em, 2em -2em 0 -1em transparent, 2em 0 0 -1em, 2em 2em 0 -1em transparent, 0 2em 0 -.6em, -2em 2em 0 -.3em, -2em 0 0 -.2em, -2em -2em 0 -.3em;\n\
    }\n\
    87.5% {\n\
        box-shadow: 0 -2em 0 -.3em, 2em -2em 0 -.6em, 2em 0 0 -1em transparent, 2em 2em 0 -1em, 0 2em 0 -1em transparent, -2em 2em 0 -.6em, -2em 0 0 -.3em, -2em -2em 0 -.2em;\n\
    }\n\
}'
    },
    'spinner-7': {
        source:
'.spinner-7 {\n\
    border-radius: 50%;\n\
    background-color: transparent;\n\
    font-size: 10px;\n\
    width: 1.5em;\n\
    height: 1.5em;\n\
    margin: 3em;\n\
    animation: spinner-7 1s infinite steps(8);\n\
}\n\
@keyframes spinner-7 {\n\
    0%, 100% {\n\
        box-shadow: 0 -2.8em #000, 2em -2em #DDD, 2.8em 0 #DDD, 2em 2em #DDD, 0 2.8em #DDD, -2em 2em #DDD, -2.8em 0 #DDD, -2em -2em #DDD;\n\
    }\n\
    12.5% {\n\
        box-shadow: 0 -2.8em #DDD, 2em -2em #000, 2.8em 0 #DDD, 2em 2em #DDD, 0 2.8em #DDD, -2em 2em #DDD, -2.8em 0 #DDD, -2em -2em #DDD;\n\
    }\n\
    25% {\n\
        box-shadow: 0 -2.8em #DDD, 2em -2em #DDD, 2.8em 0 #000, 2em 2em #DDD, 0 2.8em #DDD, -2em 2em #DDD, -2.8em 0 #DDD, -2em -2em #DDD;\n\
    }\n\
    37.5% {\n\
        box-shadow: 0 -2.8em #DDD, 2em -2em #DDD, 2.8em 0 #DDD, 2em 2em #000, 0 2.8em #DDD, -2em 2em #DDD, -2.8em 0 #DDD, -2em -2em #DDD;\n\
    }\n\
    50% {\n\
        box-shadow: 0 -2.8em #DDD, 2em -2em #DDD, 2.8em 0 #DDD, 2em 2em #DDD, 0 2.8em #000, -2em 2em #DDD, -2.8em 0 #DDD, -2em -2em #DDD;\n\
    }\n\
    62.5% {\n\
        box-shadow: 0 -2.8em #DDD, 2em -2em #DDD, 2.8em 0 #DDD, 2em 2em #DDD, 0 2.8em #DDD, -2em 2em #000, -2.8em 0 #DDD, -2em -2em #DDD;\n\
    }\n\
    75% {\n\
        box-shadow: 0 -2.8em #DDD, 2em -2em #DDD, 2.8em 0 #DDD, 2em 2em #DDD, 0 2.8em #DDD, -2em 2em #DDD, -2.8em 0 #000, -2em -2em #DDD;\n\
    }\n\
    87.5% {\n\
        box-shadow: 0 -2.8em #DDD, 2em -2em #DDD, 2.8em 0 #DDD, 2em 2em #DDD, 0 2.8em #DDD, -2em 2em #DDD, -2.8em 0 #DDD, -2em -2em #000;\n\
    }\n\
}'
    },
    'spinner-8': {
        source:
'.spinner-8 {\n\
    font-size: 10px;\n\
    width: 6em;\n\
    height: 6em;\n\
    border: 3em solid #CCC;\n\
    box-sizing: border-box;\n\
    animation: spinner-8 .8s infinite steps(4);\n\
}\n\
@keyframes spinner-8 {\n\
    0%, 100% {\n\
        border-color: #CCC;\n\
        border-top-color: #000;\n\
    }\n\
    25% {\n\
        border-color: #CCC;\n\
        border-right-color: #000;\n\
    }\n\
    50% {\n\
        border-color: #CCC;\n\
        border-bottom-color: #000;\n\
    }\n\
    75% {\n\
        border-color: #CCC;\n\
        border-left-color: #000;\n\
    }\n\
}'
    },
    'spinner-9': {
        source: 
'.spinner-9 {\n\
    font-size: 8px;\n\
    border: 1.5em solid #DDD;\n\
    border-radius: 50%;\n\
    border-top-color: black;\n\
    box-sizing: border-box;\n\
    width: 10em;\n\
    height: 10em;\n\
    animation: spinner-9 1s infinite linear;\n\
}\n\
@keyframes spinner-9 {\n\
    0% {\n\
        transform: rotate(0deg);\n\
    }\n\
    100% {\n\
        transform: rotate(360deg);\n\
    }\n\
}'
    },
    'spinner-10': {
        source:
'.spinner-10 {\n\
    font-size: 8px;\n\
    border: 1.5em solid black;\n\
    border-radius: 50%;\n\
    border-top-color: transparent;\n\
    box-sizing: border-box;\n\
    width: 10em;\n\
    height: 10em;\n\
    position: relative;\n\
    animation: spinner-10 1s infinite linear;\n\
}\n\
.spinner-10::before,\n\
.spinner-10::after {\n\
    content: "";\n\
    position: absolute;\n\
    border-radius: 50%;\n\
    background-color: black;\n\
    width: 1.5em;\n\
    height: 1.5em;\n\
    left: 2.75em;\n\
    top: -1.5em;\n\
    transform-origin: .75em 5em;\n\
}\n\
.spinner-10::before {\n\
    transform: rotate(-45deg);\n\
}\n\
.spinner-10::after {\n\
    transform: rotate(45deg);\n\
}\n\
@keyframes spinner-10 {\n\
    0% {\n\
        transform: rotate(0deg);\n\
    }\n\
    100% {\n\
        transform: rotate(360deg);\n\
    }\n\
}'
    },
    'spinner-11': {
        source:
'.spinner-11 {\n\
    font-size: 8px;\n\
    width: 10em;\n\
    height: 10em;\n\
    position: relative;\n\
    border: 1.5em solid transparent;\n\
    border-top-color: black;\n\
    border-bottom-color: black;\n\
    border-radius: 50%;\n\
    box-sizing: border-box;\n\
    animation: spinner-11 1.5s infinite linear;\n\
}\n\
.spinner-11::before,\n\
.spinner-11::after {\n\
    content: "";\n\
    position: absolute;\n\
    box-sizing: border-box;\n\
    border: 1em solid transparent;\n\
}\n\
.spinner-11::before {\n\
    left: 5.4em;\n\
    top: -.6em;\n\
    border-right-color: black;\n\
    border-bottom-color: black;\n\
}\n\
.spinner-11::after {\n\
    left: -.3em;\n\
    top: 5.6em;\n\
    border-top-color: black;\n\
    border-left-color: black;\n\
}\n\
@keyframes spinner-11 {\n\
    0% {\n\
        transform: rotate(0deg);\n\
    }\n\
    100% {\n\
        transform: rotate(360deg);\n\
    }\n\
}'
    },
    'spinner-12': {
        source:
'.spinner-12 {\n\
    font-size: 8px;\n\
    position: relative;\n\
    animation: spinner-12 2s infinite linear;\n\
}\n\
.spinner-12,\n\
.spinner-12::before,\n\
.spinner-12::after {\n\
    width: 10em;\n\
    height: 10em;\n\
    border: 1.5em solid transparent;\n\
    border-top-color: black;\n\
    border-radius: 50%;\n\
    box-sizing: border-box;\n\
}\n\
.spinner-12::before,\n\
.spinner-12::after {\n\
    content: "";\n\
    position: absolute;\n\
    left: -1.5em;\n\
    top: -1.5em;\n\
}\n\
.spinner-12::before {\n\
    transform: rotate(120deg);\n\
}\n\
.spinner-12::after {\n\
    transform: rotate(240deg);\n\
}\n\
@keyframes spinner-12 {\n\
    0% {\n\
        transform: rotate(0deg);\n\
    }\n\
    100% {\n\
        transform: rotate(360deg);\n\
    }\n\
}'
    },
    'spinner-13': {
        source:
'.spinner-13 {\n\
    font-size: 8px;\n\
    width: 10em;\n\
    height: 10em;\n\
    position: relative;\n\
}\n\
.spinner-13::before,\n\
.spinner-13::after {\n\
    content: "";\n\
    position: absolute;\n\
    background-color: black;\n\
    left: 0em;\n\
    top: 0em;\n\
    animation-duration: 1s;\n\
    animation-timing-function: linear;\n\
    animation-iteration-count: infinite;\n\
}\n\
.spinner-13::before {\n\
    animation-name: spinner-13-before;\n\
}\n\
.spinner-13::after {\n\
    animation-name: spinner-13-after;\n\
}\n\
@keyframes spinner-13-before {\n\
    0%, 100% {\n\
        width: 1.5em;\n\
        height: 1.5em;\n\
        left: 0em;\n\
        top: 0em;\n\
    }\n\
    24% {\n\
        width: 10em;\n\
        height: 1.5em;\n\
        left: 0em;\n\
        top: 0em;\n\
    }\n\
    25% {\n\
        width: 1.5em;\n\
        height: 1.5em;\n\
        left: 8.5em;\n\
        top: 0em;\n\
    }\n\
    49% {\n\
        width: 1.5em;\n\
        height: 10em;\n\
        left: 8.5em;\n\
        top: 0em;\n\
    }\n\
    50% {\n\
        width: 1.5em;\n\
        height: 1.5em;\n\
        left: 8.5em;\n\
        top: 8.5em;\n\
    }\n\
    74% {\n\
        width: 10em;\n\
        height: 1.5em;\n\
        left: 0em;\n\
        top: 8.5em;\n\
    }\n\
    75% {\n\
        width: 1.5em;\n\
        height: 1.5em;\n\
        left: 0em;\n\
        top: 8.5em;\n\
    }\n\
    99% {\n\
        width: 1.5em;\n\
        height: 10em;\n\
        left: 0em;\n\
        top: 0em;\n\
    }\n\
}\n\
@keyframes spinner-13-after {\n\
    0%, 100% {\n\
        width: 1.5em;\n\
        height: 10em;\n\
        left: 0em;\n\
        top: 0em;\n\
    }\n\
    24% {\n\
        width: 1.5em;\n\
        height: 1.5em;\n\
        left: 0em;\n\
        top: 0em;\n\
    }\n\
    25% {\n\
        width: 10em;\n\
        height: 1.5em;\n\
        left: 0em;\n\
        top: 0em;\n\
    }\n\
    49% {\n\
        width: 1.5em;\n\
        height: 1.5em;\n\
        left: 8.5em;\n\
        top: 0em;\n\
    }\n\
    50% {\n\
        width: 1.5em;\n\
        height: 10em;\n\
        left: 8.5em;\n\
        top: 0em;\n\
    }\n\
    74% {\n\
        width: 1.5em;\n\
        height: 1.5em;\n\
        left: 8.5em;\n\
        top: 8.5em;\n\
    }\n\
    75% {\n\
        width: 10em;\n\
        height: 1.5em;\n\
        left: 0em;\n\
        top: 8.5em;\n\
    }\n\
    99% {\n\
        width: 1.5em;\n\
        height: 1.5em;\n\
        left: 0em;\n\
        top: 8.5em;\n\
    }\n\
}'
    },
    'spinner-14': {
        source:
'.spinner-14 {\n\
    font-size: 10px;\n\
    width: 10em;\n\
    height: 10em;\n\
    background-color: white;\n\
    border-radius: 50%;\n\
    border-top: 1.4em solid transparent;\n\
    border-left: 1em solid black;\n\
    box-sizing: border-box;\n\
    position: relative;\n\
    animation: spinner-14 .7s infinite linear;\n\
}\n\
.spinner-14::before {\n\
    content: "";\n\
    width: 1.2em;\n\
    height: 1.2em;\n\
    position: absolute;\n\
    left: 3.5em;\n\
    top: -1.2em;\n\
    background-color: black;\n\
    border-radius: 50%;\n\
    transform-origin: .5em 5.4em;\n\
    transform: rotate(-45deg);\n\
}\n\
@keyframes spinner-14 {\n\
    0% {\n\
        transform: rotate(0deg);\n\
    }\n\
    100% {\n\
        transform: rotate(360deg);\n\
    }\n\
}'
    },
    'spinner-15': {
        source:
'.spinner-15 {\n\
    font-size: 10px;\n\
    width: 10em;\n\
    height: 10em;\n\
    border-radius: 50%;\n\
    border: 1.2em solid #DDD;\n\
    box-sizing: border-box;\n\
    position: relative;\n\
}\n\
.spinner-15::before {\n\
    content: "";\n\
    width: 1em;\n\
    height: 1em;\n\
    position: absolute;\n\
    left: .2em;\n\
    top: .2em;\n\
    transform-origin: 3.6em 3.6em;\n\
    background-color: black;\n\
    border-radius: 50%;\n\
    animation: spinner-15 1.5s infinite linear;\n\
}\n\
@keyframes spinner-15 {\n\
    0% {\n\
        transform: rotate(0deg);\n\
    }\n\
    100% {\n\
        transform: rotate(360deg);\n\
    }\n\
}'
    },
    'spinner-16': {
        source:
'.spinner-16 {\n\
    font-size: 10px;\n\
    width: 10em;\n\
    height: 10em;\n\
    position: relative;\n\
}\n\
.spinner-16::before,\n\
.spinner-16::after {\n\
    content: "";\n\
    background-color: transparent;\n\
    position: absolute;\n\
    left: 4.5em;\n\
    top: 4.5em;\n\
    width: 1em;\n\
    height: 1em;\n\
    border-radius: 50%;\n\
    box-sizing: border-box;\n\
    border: .2em solid black;\n\
    animation: spinner-16 1s infinite cubic-bezier(0, 0.25, 0.75, 1);\n\
}\n\
.spinner-16::before {\n\
    animation-delay: 0s;\n\
}\n\
.spinner-16::after {\n\
    animation-delay: -.5s;\n\
}\n\
@keyframes spinner-16 {\n\
    0% {\n\
        opacity: 1;\n\
        transform: scale(0);\n\
    }\n\
    100% {\n\
        opacity: 0;\n\
        transform: scale(10);\n\
    }\n\
}'
    },
    'spinner-17': {
        source:
'.spinner-17 {\n\
    font-size: 8px;\n\
    width: 10em;\n\
    height: 10em;\n\
    position: relative;\n\
    animation: spinner-17 .9s infinite linear;\n\
}\n\
.spinner-17::before,\n\
.spinner-17::after {\n\
    content: "";\n\
    position: absolute;\n\
}\n\
.spinner-17::before {\n\
    width: 10em;\n\
    height: 5em;\n\
    left: 0;\n\
    top: 0;\n\
    background: linear-gradient(45deg, transparent, transparent 1.5em, transparent 1.5em, black 6em, black 6em, black);\n\
    border-radius: 5em 5em 0 0;\n\
}\n\
.spinner-17::after {\n\
    animation-delay: -.5s;\n\
    width: 7em;\n\
    height: 3.5em;\n\
    left: 1.5em;\n\
    top: 1.5em;\n\
    background-color: white;\n\
    border-radius: 3.5em 3.5em 0 0;\n\
}\n\
@keyframes spinner-17 {\n\
    0% {\n\
        transform: rotate(0deg);\n\
    }\n\
    100% {\n\
        transform: rotate(360deg);\n\
    }\n\
}'
    },
    'spinner-heart': {
        title: 'heart beating',
        source:
'.spinner-heart {\n\
    font-size: 10px;\n\
    width: 10em;\n\
    height: 10em;\n\
    position: relative;\n\
    background-color: transparent;\n\
    animation: spinner-heart .5s infinite cubic-bezier(1, 0, 1, 1);\n\
}\n\
.spinner-heart::before,\n\
.spinner-heart::after {\n\
    content: "";\n\
    position: absolute;\n\
    background-color: black;\n\
}\n\
.spinner-heart::before {\n\
    left: 2.5em;\n\
    top: 0;\n\
    width: 5em;\n\
    height: 7.5em;\n\
    border-radius: 2.5em 2.5em 0 0;\n\
 }\n\
.spinner-heart::after {\n\
    left: 0;\n\
    top: 2.5em;\n\
    width: 7.5em;\n\
    height: 5em;\n\
    border-radius: 2.5em 0 0 2.5em;\n\
}\n\
@keyframes spinner-heart {\n\
    0% {\n\
        transform: scale(0.7) rotate(45deg);\n\
        opacity: 1;\n\
    }\n\
    100% {\n\
        transform: scale(1) rotate(45deg);\n\
        opacity: 0.7;\n\
    }\n\
}'
    },
    'spinner-hydrogen': {
        title: 'hydrogen atom',
        source:
'.spinner-hydrogen {\n\
    font-size: 10px;\n\
    width: 2em;\n\
    height: 2em;\n\
    margin: 2.5em;\n\
    border-radius: 50%;\n\
    box-shadow: 0 3em 0 -.5em;\n\
    background-color: black;\n\
    animation: spinner-hydrogen 1.5s infinite linear;\n\
}\n\
.spinner-hydrogen::before {\n\
    content: "";\n\
    width: 6em;\n\
    height: 6em;\n\
    position: absolute;\n\
    left: -2.1em;\n\
    top: -2.1em;\n\
    border: .1em solid black;\n\
    border-radius: 50%;\n\
}\n\
@keyframes spinner-hydrogen {\n\
    0% {\n\
        transform: rotate(0deg);\n\
    }\n\
    100% {\n\
        transform: rotate(360deg);\n\
    }\n\
}'
    },
    'spinner-yin-yang': {
        title: 'yin-yang',
        source:
'.spinner-yin-yang {\n\
    font-size: 10px;\n\
    width: 11em;\n\
    height: 11em;\n\
    border: .5em solid black;\n\
    border-radius: 50%;\n\
    background: linear-gradient(to bottom, black, black 50%, white 50%);\n\
    position: relative;\n\
    box-sizing: border-box;\n\
    animation: spinner-yin-yang 2s infinite linear;\n\
}\n\
.spinner-yin-yang::before,\n\
.spinner-yin-yang::after {\n\
    content: "";\n\
    position: absolute;\n\
    width: 1em;\n\
    height: 1em;\n\
    border-radius: 50%;\n\
}\n\
.spinner-yin-yang::before {\n\
    left: 2em;\n\
    top: 4.5em;\n\
    background-color: #000;\n\
    box-shadow: 0 0 0 2em #FFF;\n\
}\n\
.spinner-yin-yang::after {\n\
    left: 7em;\n\
    top: 4.5em;\n\
    background-color: #FFF;\n\
    box-shadow: 0 0 0 2em #000;\n\
}\n\
@keyframes spinner-yin-yang {\n\
    0% {\n\
        transform: rotate(0deg);\n\
    }\n\
    100% {\n\
        transform: rotate(360deg);\n\
    }\n\
}'
    },
    'spinner-clock': {
        title: 'clock',
        source:
'.spinner-clock {\n\
    font-size: 10px;\n\
    width: 10em;\n\
    height: 10em;\n\
    position: relative;\n\
    border: .4em solid black;\n\
    border-radius: 50%;\n\
    box-sizing: border-box;\n\
}\n\
.spinner-clock::before,\n\
.spinner-clock::after {\n\
    content: "";\n\
    width: .4em;\n\
    display: inline-block;\n\
    background-color: black;\n\
    position: absolute;\n\
    left: 4.4em;\n\
    border-radius: .4em;\n\
}\n\
.spinner-clock::before {\n\
    height: 4em;\n\
    transform-origin: .2em 3.8em;\n\
    top: .8em;\n\
    animation: spinner-clock 1s infinite linear;\n\
}\n\
.spinner-clock::after {\n\
    height: 3em;\n\
    transform-origin: .2em 2.8em;\n\
    top: 1.8em;\n\
    animation: spinner-clock 12s infinite linear;\n\
}\n\
@keyframes spinner-clock {\n\
    0% {\n\
        transform: rotate(0deg);\n\
    }\n\
    100% {\n\
        transform: rotate(360deg);\n\
    }\n\
}'
    },
    'spinner-counter': {
        title: 'counter',
        source:
'.spinner-counter {\n\
    font-size: 20px;\n\
    width: 2.2em;\n\
    height: 2em;\n\
    position: relative;\n\
    overflow: hidden;\n\
    line-height: 1;\n\
}\n\
.spinner-counter::before,\n\
.spinner-counter::after {\n\
    animation: spinner-counter 1s infinite steps(10);\n\
    content: "0123456789";\n\
    width: .5em;\n\
    height: 10em;\n\
    top: 0em;\n\
    font-size: 2em;\n\
    font-family: monospace;\n\
    font-weight: bold;\n\
    word-wrap: break-word;\n\
    text-overflow: clip;\n\
    position: absolute;\n\
}\n\
.spinner-counter::before {\n\
    left: 0em;\n\
    animation-duration: 10s;\n\
}\n\
.spinner-counter::after {\n\
    left: .5em;\n\
    animation-duration: 1s;\n\
}\n\
@keyframes spinner-counter {\n\
    0% {\n\
        transform: translateY(0);\n\
    }\n\
    100% {\n\
        transform: translateY(-10em);\n\
    }\n\
}'
    },
    'spinner-zebra': {
        source:
'.spinner-zebra {\n\
    font-size: 10px;\n\
    width: 10em;\n\
    height: 4em;\n\
    border: .5em solid black;\n\
    box-sizing: border-box;\n\
    overflow: hidden;\n\
}\n\
.spinner-zebra::before {\n\
    content: "";\n\
    background: repeating-linear-gradient(45deg, black, black 1em, white 1em, white 2em);\n\
    position: relative;\n\
    display: inline-block;\n\
    width: 10em;\n\
    animation: spinner-zebra .5s infinite linear;\n\
}\n\
@keyframes spinner-zebra {\n\
    0% {\n\
        height: 3em;\n\
    }\n\
    100% {\n\
        height: 5.8em;\n\
    }\n\
}'
    },
    'spinner-collisions': {
        source:
'.spinner-collisions {\n\
    font-size: 5px;\n\
    width: 18em;\n\
    height: 14em;\n\
    border:  2em solid black;\n\
    border-left-color: black;\n\
    box-sizing: border-box;\n\
    position: relative;\n\
}\n\
.spinner-collisions::before {\n\
    content: "";\n\
    width: 2em;\n\
    height: 2em;\n\
    position: absolute;\n\
    background-color: black;\n\
    border-radius: 50%;\n\
    animation: spinner-collisions-x 1.5s infinite linear, spinner-collisions-y 3.5s infinite linear;\n\
}\n\
@keyframes spinner-collisions-x {\n\
    0%, 100% {\n\
        left: 0em;\n\
    }\n\
    50% {\n\
        left: 12em;\n\
    }\n\
}\n\
@keyframes spinner-collisions-y {\n\
    0%, 100% {\n\
        top: 4em;\n\
    }\n\
    25% {\n\
        top: 8em;\n\
    }\n\
    75% {\n\
        top: 0em;\n\
    }\n\
}'
    },
    'spinner-glider': {
        title: 'glider from <a href="https://en.wikipedia.org/wiki/Conway\'s_Game_of_Life" target="_blank">Life</a>',
        source:
'.spinner-glider {\n\
    font-size: 8px;\n\
    width: 11em;\n\
    height: 11em;\n\
    border: .5em solid black;\n\
    background-color: white;\n\
    position: relative;\n\
    overflow: hidden;\n\
}\n\
.spinner-glider::before,\n\
.spinner-glider::after {\n\
    content: "";\n\
    position: absolute;\n\
    animation-duration: .4s;\n\
    animation-timing-function: linear;\n\
    animation-iteration-count: infinite;\n\
}\n\
.spinner-glider::before {\n\
    width: 2em;\n\
    height: 2em;\n\
    background-color: transparent;\n\
    animation-name: spinner-glider-shift, spinner-glider-cells;\n\
}\n\
.spinner-glider::after {\n\
    width: 14em;\n\
    height: 14em;\n\
    background: repeating-linear-gradient(0deg, #666, #666 1px, transparent 1px, transparent 2em), repeating-linear-gradient(90deg, #666, #666 1px, transparent 1px, transparent 2em);\n\
    animation-name: spinner-glider-shift;\n\
}\n\
@keyframes spinner-glider-shift {\n\
    0% {\n\
        left: -1em;\n\
        top: 0em;\n\
    }\n\
    100% {\n\
        left: -3em;\n\
        top: -2em;\n\
    }\n\
}\n\
@keyframes spinner-glider-cells {\n\
    0%, 24% {\n\
        box-shadow: 6em 2em, 4em 4em transparent, 6em 4em transparent, 8em 4em, 4em 6em, 6em 6em, 8em 6em, 10em 6em transparent, 6em 8em transparent, 8em 8em transparent, 10em 8em transparent;\n\
    }\n\
    25%, 49% {\n\
        box-shadow: 6em 2em transparent, 4em 4em, 6em 4em transparent, 8em 4em, 4em 6em transparent, 6em 6em, 8em 6em, 10em 6em transparent, 6em 8em, 8em 8em transparent, 10em 8em transparent;\n\
    }\n\
    50%, 74% {\n\
        box-shadow: 6em 2em transparent, 4em 4em transparent, 6em 4em transparent, 8em 4em, 4em 6em, 6em 6em transparent, 8em 6em, 10em 6em transparent, 6em 8em, 8em 8em, 10em 8em transparent;\n\
    }\n\
    75%, 99% {\n\
        box-shadow: 6em 2em transparent, 4em 4em transparent, 6em 4em, 8em 4em transparent, 4em 6em transparent, 6em 6em transparent, 8em 6em, 10em 6em, 6em 8em, 8em 8em, 10em 8em transparent;\n\
    }\n\
    100% {\n\
        box-shadow: 6em 2em transparent, 4em 4em transparent, 6em 4em transparent, 8em 4em, 4em 6em transparent, 6em 6em transparent, 8em 6em transparent, 10em 6em, 6em 8em, 8em 8em, 10em 8em;\n\
    }\n\
}'
    },
    'spinner-wi-fi': {
        title: 'wi-fi signal',
        source:
'.spinner-wi-fi {\n\
    font-size: 10px;\n\
    width: 2em;\n\
    height: 2em;\n\
    border-radius: 50%;\n\
    background-color: black;\n\
    position: relative;\n\
    margin: 3.5em 3.5em 1.5em 1.5em;\n\
    animation: spinner-wi-fi-core 1.2s infinite linear;\n\
    animation-delay: -.4s;\n\
}\n\
.spinner-wi-fi::before,\n\
.spinner-wi-fi::after {\n\
    content: "";\n\
    position: absolute;\n\
    background-color: transparent;\n\
    border: 1em solid transparent;\n\
    border-top-color: black;\n\
    border-radius: 50%;\n\
    animation: spinner-wi-fi-signal 1.2s infinite linear;\n\
}\n\
.spinner-wi-fi::before {\n\
    width: 3em;\n\
    height: 3em;\n\
    left: -1.5em;\n\
    top: -1.5em;\n\
    animation-delay: -.2s;\n\
}\n\
.spinner-wi-fi::after {\n\
    width: 6em;\n\
    height: 6em;\n\
    left: -3em;\n\
    top: -3em;\n\
    animation-delay: 0s;\n\
}\n\
@keyframes spinner-wi-fi-core {\n\
    0%, 30%, 100% {\n\
        background-color: black;\n\
    }\n\
    15% {\n\
        background-color: #888;\n\
    }\n\
}\n\
@keyframes spinner-wi-fi-signal {\n\
    0%, 30%, 100% {\n\
        border-top-color: black;\n\
        transform: scale(1) rotate(45deg);\n\
    }\n\
    15% {\n\
        border-top-color: #888;\n\
        transform: scale(1.1) rotate(45deg);\n\
    }\n\
}'
    }
};

window.onload = function() {
    var content = document.querySelector('.content'),
        overlay = document.querySelector('.overlay'),
        source = document.querySelector('.source');

    content.innerHTML += [
        { name: 'spinner-1',          show: true },
        { name: 'spinner-2',          show: true },
        { name: 'spinner-3',          show: true },
        { name: 'spinner-4',          show: true },
        { name: 'spinner-5',          show: true },
        { name: 'spinner-6',          show: true },
        { name: 'spinner-7',          show: true },
        { name: 'spinner-8',          show: true },
        { name: 'spinner-9',          show: true },
        { name: 'spinner-10',         show: false },
        { name: 'spinner-11',         show: true },
        { name: 'spinner-12',         show: true },
        { name: 'spinner-17',         show: true },
        { name: 'spinner-13',         show: true },
        { name: 'spinner-14',         show: true },
        { name: 'spinner-15',         show: false },
        { name: 'spinner-16',         show: true },
        { name: 'spinner-wi-fi',      show: true },
        { name: 'spinner-heart',      show: true },
        { name: 'spinner-hydrogen',   show: true },
        { name: 'spinner-yin-yang',   show: true },
        { name: 'spinner-clock',      show: true },
        { name: 'spinner-counter',    show: true },
        { name: 'spinner-zebra',      show: true },
        { name: 'spinner-collisions', show: true },
        { name: 'spinner-glider',     show: true }
     ].filter(function(n) {
         return n.show;
     }).map(function(n) {
        var data = spinners[n.name] || {},
            html = '<div class="' + n.name + '"></div>';

        if (data.title) {
            html += '<div class="spinner-title">' + data.title + '</div>';
        }

        if (data.source) {
            html += '<div class="spinner-source"></div>';
        }

        return '<div class="spinner-container" data-spinner="' + n.name + '">' + html + '</div>';
    }).join('');

    content.onclick = function(e) {
        if (e.target.classList.contains('spinner-source')) {
            var spinnerName = e.target.parentNode.getAttribute('data-spinner'),
                spinnerData = spinners[spinnerName];

            overlay.classList.remove('hidden');
            source.classList.remove('hidden');
            source.querySelector('.source-html').innerText = document.querySelector('.' + spinnerName).outerHTML;
            source.querySelector('.source-css').innerHTML = '<pre>' + spinnerData.source + '</pre>';
            source.querySelector('.source-css').scrollLeft = 0;
            source.querySelector('.source-css').scrollTop = 0;
        }
    };

    overlay.onclick = function() {
        overlay.classList.add('hidden');
        source.classList.add('hidden');
    };

    overlay.onwheel = source.querySelector('.source-html').onwheel = function(e) {
        e.preventDefault();
    };
    source.onwheel = function(e) {
        var css = source.querySelector('.source-css');
        if ((css.scrollHeight - css.scrollTop === css.clientHeight && e.deltaY > 0) ||
            (css.scrollTop == 0 && e.deltaY < 0)) {
            e.preventDefault();
        }
    };
};
