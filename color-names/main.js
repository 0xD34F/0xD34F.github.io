function hexComplete(value, length) {
    var t = (+value).toString(16).toUpperCase();
    while (t.length < length) {
        t = '0' + t;
    }

    return t;
}

function setColor() {
    var color = 0;
    $('.color-intensity').each(function() {
        var $this = $(this),
            value = +$this.val();

        $this.next().html('0x' + hexComplete(value, 2));

        var shift = 8 * (+$this.attr('color-part'));
        color |= value << shift;
    });

    var originalColor = hexComplete(color, 6);

    var identifiedColor = getColorName(color);
    identifiedColor.code = hexComplete(identifiedColor.code, 6);

    $('#original')
        .css('background-color', '#' + originalColor)
        .parent().find('.color-sample-label').html('Original color: #' + originalColor);

    $('#detected')
        .css('background-color', '#' + identifiedColor.code)
        .parent().find('.color-sample-label').html('Identified as: ' + identifiedColor.name + ' (#' + identifiedColor.code + ')');
}

$(document).ready(function() {
    $('.color-intensity').change(setColor);

    setColor();
});
