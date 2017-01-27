'use strict';

// функкция отрисовки текста
var textY = 20;
var drawText = function (ctx, text) {
  function makeCountY() {
    return textY + 20;
  }
  textY = makeCountY();
  ctx.fillText(text, 120, textY);
};

// функция заливки рандомным синим
var makeRandomColorBlue = function (ctx) {
  var randomColor = ((Math.random() * 5) * 50).toFixed(0);
  var randomOpacity = (Math.random()).toFixed(1);

  ctx.fillStyle = ['rgba(0, 0, ', randomColor, ',', randomOpacity, ')'].join('');

};

// рисуем колонки
var drawColumn = function (ctx, name, time, histoX, histoY, histoHeight, columnIndent, columnWidth) {

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
    makeRandomColorBlue(ctx);
  }

  ctx.fillRect(columnX, columnY, columnWidth, height);

  ctx.fillStyle = '#000';
  ctx.fillText(name, columnX, nameY);
  ctx.fillText(time.toFixed(0), columnX, timeY);
};


window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  drawText(ctx, 'Ура Вы победили !');
  drawText(ctx, 'Список результатов:');

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  for (i = 0; i < names.length; i++) {
    var name = names[i];
    time = times[i];

    drawColumn(ctx, name, time, 120, 100, 150, 50, 40);
  }
};
