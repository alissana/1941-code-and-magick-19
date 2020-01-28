'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var COLUMN_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3 + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = '#f00';
    } else {
      ctx.fillStyle = 'hsl(216, 100%, ' + Math.ceil((Math.random() * 100)) + '%)';
    }

    var HISTOGRAM_HEIGHT = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillRect(CLOUD_X + GAP * 5 + BAR_WIDTH * i + COLUMN_GAP * i, CLOUD_HEIGHT - GAP * 3 - HISTOGRAM_HEIGHT, BAR_WIDTH, HISTOGRAM_HEIGHT);

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP * 5 + BAR_WIDTH * i + COLUMN_GAP * i, CLOUD_HEIGHT - GAP);
  }
};
