'use strict';

var textY;
// функкция отрисовки текста
var drawText = function (ctx, text) {
  ctx.fillText(text, 120, textY);
  textY += 20;  // 20 - высота строки
};

// функция заливки рандомным синим
var makeRandomColorBlue = function (ctx) {
  var randomColor = ((Math.random() * 5) * 50).toFixed(0);
  var randomOpacity = (Math.random()).toFixed(1);
  return ['rgba(0, 0, ', randomColor, ',', randomOpacity, ')'].join('');
};

// получаем максимальное значение
var getMax = function (times) {
  var max = times[0];

  for (var i = 1; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }
  return max;
};


// рисуем колонки
var drawColumn = function (ctx, name, time, step, i) {

  var histoX = 120;
  var histoY = 100;
  var histoHeight = 150;
  var columnIndent = 50;
  var columnWidth = 40;

  var height = step * time;
  var columnX = histoX + (columnWidth * i) + (columnIndent * i);
  var columnY = histoY + (histoHeight - height);
  var nameY = histoY + histoHeight + 20;
  var timeY = histoY + (histoHeight - height) - 10;

  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = makeRandomColorBlue(ctx);
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
  textY = 40;
  drawText(ctx, 'Ура Вы победили !');
  drawText(ctx, 'Список результатов:');

  var histoHeight = 150;
  var step = histoHeight / getMax(times);

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var time = times[i];

    drawColumn(ctx, name, time, step, i);
  }
};
