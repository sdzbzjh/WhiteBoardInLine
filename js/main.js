/**
 * Created by zhengjh on 2016/12/17.
 */
var main=(function () {
    var penColor = "";
    var penSize = 10;
    var inputColor = document.getElementById('inputcolor');
    var inputSize = document.getElementById('inputsize');
    var pen = document.getElementById('pen');
    var eraser = document.getElementById('eraser');
    var clearCanvas = document.getElementById('clearCanvas');
    var canvas_ = document.getElementsByTagName("canvas")[0];
    var color=document.getElementById('color');
    color.onclick = function () {
        inputColor.click();
    };
    inputColor.onchange = function () {
        penColor = this.value;
    };
    inputSize.onchange = function () {
        //alert(this.value);
        penSize = this.value;
    };

    eraser.onclick = function () {
        penColor = '#ffffff';
        eraser.src = 'image/eraser_click.jpg';
        pen.src = 'image/pen.jpg';
    };
    pen.onclick = function () {
        penColor = inputColor.value;
        pen.src = 'image/pen_click.jpg';
        eraser.src = 'image/eraser.jpg';
    };
//清除画布内容
    clearCanvas.onclick = function () {
        context.clearRect(0, 0, canvas_.width, canvas_.height);
    };


//全屏
    canvas_.setAttribute("width", window.screen.width);
    canvas_.setAttribute("height", window.screen.height);


    var context = canvas_.getContext("2d");
// context.strokeStyle = penColor;
// context.lineWidth = 10;

    var array_paint = [];
    var current_y = 0;
    var current_x = 0;
//判断鼠标是否按下
    var m_down = false;


    /*function paint() {
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
    }*/


//按下鼠标
    canvas_.onmousedown = function (event) {
        m_down = true;
        current_x = event.offsetX;
        current_y = event.offsetY;
        array_paint.push([current_x, current_y]);
        paint(context,penColor,penSize,array_paint);
    };


//鼠标松开,清空数据
    canvas_.onmouseup = function (event) {
        m_down = false;
        array_paint = [];
    };


//鼠标按下后拖动
    canvas_.onmousemove = function (event) {
        if (m_down) {
            current_x = event.offsetX;
            current_y = event.offsetY;
            array_paint.push([current_x, current_y]);
            paint(context,penColor,penSize,array_paint);
        }
    };

});
main();