'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var LINEHEIGHT = 20;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var wrapText = function (ctx, text, x, y, maxWidth, fontStyle, colorText) {
  ctx.font = fontStyle;
  ctx.fillStyle = colorText;

  var words = text.split(' ');
  var line = '';
  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + ' ';
      y += LINEHEIGHT;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
};

var changesColorBar = function (ctx, player, name, yourColor, otherColor) {
  if (player === name) {
    ctx.fillStyle = yourColor;
  } else {
    ctx.fillStyle = otherColor;
  }
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  wrapText(ctx, 'Ура вы победили! Список результатов: ', CLOUD_X + 20, CLOUD_Y + 30, 200, '16px PT Mono', '#000');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    changesColorBar(ctx, players[i], 'Вы', '#f00', 'hsl(216, 100%, ' + Math.ceil((Math.random() * 100)) + '%)');

    var HISTOGRAM_HEIGHT = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillRect(CLOUD_X + 50 + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT - 30 - HISTOGRAM_HEIGHT, BAR_WIDTH, HISTOGRAM_HEIGHT);
    wrapText(ctx, players[i], CLOUD_X + 50 + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT - 10, 50, '16px PT Mono', '#000');
  }
};
