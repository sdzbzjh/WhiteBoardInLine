/**
 * Created by zhengjh on 2016/12/17.
 */
var paint=(function (context,penColor,penSize,array_paint) {
    context.strokeStyle = penColor;
    context.lineWidth = penSize;
    context.beginPath();
    context.moveTo(array_paint[0][0], array_paint[0][1]);
    if (array_paint.length == 1)
        context.lineTo(array_paint[0][0] + 1, array_paint[0][1] + 1);
    else {
        var i = 1;
        for (i in array_paint) {
            context.lineTo(array_paint[i][0], array_paint[i][1]);
            context.moveTo(array_paint[i][0], array_paint[i][1]);
        }

    }
    context.closePath();
    context.stroke();
});