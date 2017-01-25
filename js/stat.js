'use strict';

// функкция отрисовки текста
var textY = 20;
var drawText = function (ctx, text) {
  function counterY() {
    return textY + 20;
  }
  textY = counterY();
  var textX = 120;
  ctx.fillText(text, textX, textY);
};

// функция заливки рандомным синим
var makeRandomColor = function (ctx, rgbcolor) {
  var randomColor1 = ((Math.random() * 5) * 50).toFixed(0);
  var randomColor2 = ((Math.random() * 5) * 50).toFixed(0);
  var randomColor3 = ((Math.random() * 5) * 50).toFixed(0);
  var randomOpacity = (Math.random()).toFixed(1);

  if (rgbcolor === 'blue') {
    ctx.fillStyle = ['rgba(0, 0, ', randomColor1, ',', randomOpacity, ')'].join('');
  } else if (rgbcolor === 'red') {
    ctx.fillStyle = ['rgba(', randomColor1, ', 0, 0,', randomOpacity, ')'].join('');
  } else if (rgbcolor === 'green') {
    ctx.fillStyle = ['rgba(0, ', randomColor1, ', 0,', randomOpacity, ')'].join('');
  } else {
    ctx.fillStyle = ['rgba(', randomColor1, ', ', randomColor2, ', ', randomColor3, ', ', randomOpacity, ')'].join('');
  }
};
var max = -1;
// рисуем колонки
var drawColumn = function (ctx, names[i], times[i], histoX, histoY, histoHeight, columnIndent, columnWidth) {
  var name = names[i];
  var time = times[i];

  // var histoX = 120;
  // var histoY = 100;
  // var histoHeight = 150;
  // var step = histoHeight / max;
  // var columnIndent = 50;
  // var columnWidth = 40;

  var step = histoHeight / max;
  var height = step * time;
  var columnX = histoX + (columnWidth * i) + (columnIndent * i);
  var columnY = histoY + (histoHeight - height);
  var nameY = histoY + histoHeight + 20;
  var timeY = histoY + (histoHeight - height) - 10;

  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    makeRandomColor(ctx, 'blue');
  }

  ctx.fillRect(x, y, columnWidth, height);

  ctx.fillStyle = '#000';
  сtx.fillText(name, x, nameY);
  ctx.fillText(time.toFixed(0), x, timeY);
};


window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect = (110, 20, 420, 270);
  ctx.strokeRect = (110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect = (100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  drawText(ctx, 'Ура Вы победили !');
  drawText(ctx, 'Список результатов:');

  var max = -1;

  for(var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }


  for (var i = 0; i < times.length; i++) {
     drawColumn(ctx, name, time, 120, 100, 150, 50, 40);
  }

};
