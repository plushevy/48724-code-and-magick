'use strict';

// функция отрисовки облака-фона
var drawCloud = function (ctx, x, y, width, height) {
  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);
};

// функкция отрисовки текста
var drawText = function (ctx, text, x, y, fontsize, fontfamily, fontcolor) {
  ctx.fillStyle = String(fontcolor);
  ctx.font = fontsize +'px' + ' ' + String(fontfamily);
  ctx.fillText(text, x, y);
};

//функция заливки рандомным синим
var drawRandomColor = function (ctx, rgbcolor) {
  var randomColor1 = ((Math.random() * 5) * 50).toFixed(0);
  var randomColor2 = ((Math.random() * 5) * 50).toFixed(0);
  var randomColor3 = ((Math.random() * 5) * 50).toFixed(0);
  var randomOpacity = (Math.random()).toFixed(1);

  if (rgbcolor === 'blue') {
    ctx.fillStyle = ['rgba(0, 0, ', randomColor1,',', randomOpacity, ')'].join('');
  } else if (rgbcolor === 'red') {
    ctx.fillStyle = ['rgba(', randomColor1,', 0, 0,', randomOpacity, ')'].join('');
  } else if (rgbcolor === 'green') {
    ctx.fillStyle = ['rgba(0, ', randomColor1,', 0,', randomOpacity, ')'].join('');
  } else {
    ctx.fillStyle = ['rgba(', randomColor1,', ', randomColor2,', ', randomColor3,', ', randomOpacity,')'].join('');
  }
};



window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(ctx, 110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  drawCloud(ctx, 100, 10, 420, 270);

  drawText(ctx, 'Ура Вы победили !', 120, 40, 16, 'PT Mono', '#000');
  drawText(ctx, 'Список результатов:', 120, 60, 16, 'PT Mono', '#000');



  var max = -1;

  for(var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoX = 120;
  var histoY = 100;
  var histoHeight = 150;
  var step = histoHeight / max;
  var columnIndent = 50;
  var columnWidth = 40;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * time;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      drawRandomColor(ctx, 'blue');
    }

    var x = histoX + (columnWidth * i) + (columnIndent * i);
    var y = histoY + (histoHeight - height);
    var nameY = histoY + histoHeight + 20;
    var timeY = histoY + (histoHeight - height) - 10;

    // рисуем колонки
    var drawColumn = function (ctx) {
      ctx.fillRect(x, y, columnWidth, height);
    }

    drawColumn(ctx);

    ctx.fillStyle = '#000';
    ctx.fillText(name, x, nameY);
    ctx.fillText(time.toFixed(0), x, timeY);
  }
};

var canvas = document.querySelector('canvas');
renderStatistics(canvas.getContext('2d'), ['Иван', 'Игнат', 'Вы'], [20.32, 40.15, 4.28]);
