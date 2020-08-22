"use strict"
const canvas = document.getElementById('canvas');
const ctxWidth = canvas.clientWidth;
const ctxHeight = canvas.clientHeight;
let ctx = canvas.getContext('2d');

const color = {
  sky: "#4a627a",
  outerRect: '#dddddd',
  baseRect: '#ececea',
  baseRectLineOuter: '#666666',
  baseRectLineInner: '#d8caaf',
  mountain: '#23366c',
  cat: '#dedede',
  moon: '#e8ae4a'
}

/**
 * 外部矩形
 */
function drawOuterRect() {
  const halfWidth = 140;
  const halfHeight = 220;
  ctx.strokeStyle =  color.outerRect;
  ctx.lineWidth = "10";
  ctx.strokeRect(ctxWidth/2 - halfWidth, ctxHeight/2 - halfHeight, halfWidth * 2, halfHeight * 2);
  ctx.fillStyle = color.sky;
  ctx.fillRect(ctxWidth/2 - halfWidth + 10, ctxHeight/2 - halfHeight + 10, halfWidth * 2 - 20, halfHeight * 2 - 10);
}

/**
 * 底座
 *
 */
function drawBaseRect() {
  const halfWidth = 158;
  const halfHeight = 8;
  const yDis = 220;
  ctx.fillStyle = color.baseRect;
  ctx.lineWidth = "10";
  ctx.fillRect(ctxWidth/2 - halfWidth, ctxHeight/2 + yDis, halfWidth*2, halfHeight*2);
}

function drawBaseRectLine() {
  const halfHeight = 3;
  const yDis = 215;
  ctx.lineWidth = "10";
  /**
   * 底座上第 0 层，用来外部两个线
   *
   */
  function drawBaseRectLineOuter() {
    const halfWidth = 158;
    ctx.fillStyle = color.baseRectLineOuter;
    ctx.fillRect(ctxWidth/2 - halfWidth, ctxHeight/2 + yDis, halfWidth*2, halfHeight*2);
  }

  /**
   * 底座上第 1 层，用来内部的线
   *
   */
  function drawBaseRectLineInner() {
    const halfWidth = 145;
    ctx.fillStyle = color.baseRectLineInner;
    ctx.fillRect(ctxWidth/2 - halfWidth, ctxHeight/2 + yDis, halfWidth*2, halfHeight*2);
  }
  drawBaseRectLineOuter();
  drawBaseRectLineInner(); 
}

/**
 * 边框内左侧
 *
 */
function drawOuterRectInnerLeft() {
  const halfWidth = 4;
  const xPos = 135;
  const halfHeight = 215;
  ctx.fillStyle = color.baseRectLineInner;
  ctx.lineWidth = "10";
  ctx.fillRect(ctxWidth/2 - xPos, ctxHeight/2 - halfHeight, halfWidth * 2, halfHeight * 2);
}

/**
 * 边框内右侧
 *
 */
function drawOuterRectInnerRight() {
  const halfWidth = 4;
  const xPos = 128;
  const halfHeight = 215;
  ctx.fillStyle = color.baseRectLineInner;
  ctx.lineWidth = "10";
  ctx.fillRect(ctxWidth/2 + xPos, ctxHeight/2 - halfHeight, halfWidth * 2, halfHeight * 2);
}

/**
 * 画中间的线
 */
function drawMiddleLine() {
  const halfWidth = 136;
  const halfHeight = 4;
  const yDis = 20;
  ctx.fillStyle = color.outerRect;
  ctx.lineWidth = "10";
  ctx.fillRect(ctxWidth/2 - halfWidth, ctxHeight/2 - yDis, halfWidth*2, halfHeight*2);
}

/**
 * 中间窗帘上的线
 *
 */
function drawLineAboveMiddle() {
  const halfWidth = 135;
  const halfHeight = 3;
  const yDis = 25;
  ctx.fillStyle = color.baseRectLineInner;
  ctx.lineWidth = "10";
  ctx.fillRect(ctxWidth/2 - halfWidth, ctxHeight/2 - yDis, halfWidth*2, halfHeight*2); 
}

/**
 * 上面窗帘上的线
 *
 */
function drawLineBehindTop() {
  const halfWidth = 135;
  const halfHeight = 3;
  const yDis = 215;
  ctx.fillStyle = color.baseRectLineInner;
  ctx.lineWidth = "10";
  ctx.fillRect(ctxWidth/2 - halfWidth, ctxHeight/2 - yDis, halfWidth*2, halfHeight*2); 
}

function drawMountain() {
  const baseHeight = ctxHeight / 2 + 150;
  ctx.lineWidth = '1'
  ctx.fillStyle = color.mountain;
  /**
   * 左侧的山
   *
   */
  function drawMountainLeft() {
    const baseWidth = ctxWidth / 2 - 127;
    ctx.beginPath();
    ctx.moveTo(baseWidth, baseHeight);
    ctx.lineTo(baseWidth + 15, baseHeight + 50);
    ctx.lineTo(baseWidth + 16, baseHeight + 50);
    ctx.lineTo(baseWidth + 28, baseHeight + 20);
    ctx.lineTo(baseWidth + 31, baseHeight + 20);
    ctx.lineTo(baseWidth + 40, baseHeight + 50);
    ctx.lineTo(baseWidth + 41, baseHeight + 50);
    ctx.lineTo(baseWidth + 55, baseHeight + 10);
    ctx.lineTo(baseWidth + 57, baseHeight + 10);
    ctx.lineTo(baseWidth + 75, baseHeight + 65);
    ctx.lineTo(baseWidth, baseHeight + 65);
    ctx.closePath();
    ctx.fill();
  }

  /**
   * 右侧的山
   *
   */
  function drawMountainRight() {
    const baseWidth = ctxWidth / 2 + 127;
    ctx.beginPath();
    ctx.moveTo(baseWidth, baseHeight);
    ctx.lineTo(baseWidth - 15, baseHeight + 50);
    ctx.lineTo(baseWidth - 16, baseHeight + 50);
    ctx.lineTo(baseWidth - 26, baseHeight + 10);
    ctx.lineTo(baseWidth - 29, baseHeight + 10);
    ctx.lineTo(baseWidth - 36, baseHeight + 50);
    ctx.lineTo(baseWidth - 36, baseHeight + 50);
    ctx.lineTo(baseWidth - 50, baseHeight + 20);
    ctx.lineTo(baseWidth - 52, baseHeight + 20);
    ctx.lineTo(baseWidth - 67, baseHeight + 65);
    ctx.lineTo(baseWidth, baseHeight + 65);
    ctx.closePath();
    ctx.fill();
  }
  drawMountainLeft();
  drawMountainRight();
}

function drawCat() {
  ctx.fillStyle = color.cat;

  /**
   * 猫身
   *
   */
  function drawCatBody() {
    const baseWidth = ctxWidth / 2 - 25;
    const baseHeight = ctxHeight / 2 + 221;
    ctx.beginPath();
    ctx.moveTo(baseWidth, baseHeight);
    ctx.lineTo(baseWidth, baseHeight - 120);
    ctx.lineTo(baseWidth + 12, baseHeight - 105);
    ctx.lineTo(baseWidth + 13, baseHeight - 105);
    ctx.arc(baseWidth + 20,baseHeight - 97,12,0, 2 * Math.PI);
    ctx.lineTo(baseWidth + 29, baseHeight - 105);
    ctx.lineTo(baseWidth + 41, baseHeight - 120)
    ctx.lineTo(baseWidth + 41, baseHeight - 40)
    ctx.arc(baseWidth + 40 ,baseHeight - 31,32,0, 2 * Math.PI);
    ctx.lineTo(baseWidth + 50,baseHeight)
    ctx.closePath();
    ctx.fill();
  }

  /**
   * 猫尾
   *
   */
  function drawCatTail() {
    const baseWidth = ctxWidth / 2 + 25;
    const baseHeight = ctxHeight / 2 + 210;
    ctx.fillRect(baseWidth,baseHeight,10,42);
    ctx.beginPath();
    ctx.arc(baseWidth + 5, baseHeight + 42, 5,0, 2*Math.PI)
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  drawCatBody();
  drawCatTail();
}

function drawMoon() {
  const baseWidth = ctxWidth / 2 - 100;
  const baseHeight = ctxHeight / 2 - 100;
  /**
   * 画月亮1
   *
   */
  function drawMoon1() {
    ctx.fillStyle = color.moon;
    ctx.beginPath();
    ctx.arc(baseWidth + 40, baseHeight - 50,35, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill(); 
  }

  /**
   * 画月亮2
   *
   */
  function drawMoon2() {
    ctx.fillStyle = color.sky;  // 覆盖
    ctx.beginPath();
    ctx.arc(baseWidth + 60, baseHeight - 55, 40, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill(); 
  }
  drawMoon1();
  drawMoon2();
}

function drawStars() {
  ctx.fillStyle = color.moon;
  ctx.shadowColor = color.moon;
  ctx.shadowBlur = 10;
  function drawStar(baseWidth, baseHeight) {
    ctx.beginPath();
    ctx.arc(baseWidth, baseHeight, 4, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }
  function one() {
    const baseHeight = ctxHeight / 2 + 40;
    const baseWidth = ctxWidth / 2 - 60;
    drawStar(baseWidth, baseHeight);
  }
  function two() {
    const baseHeight = ctxHeight / 2 + 10;
    const baseWidth = ctxWidth / 2 + 50;
    drawStar(baseWidth, baseHeight);
  }
  function three() {
    const baseHeight = ctxHeight / 2 - 100;
    const baseWidth = ctxWidth / 2 + 20;
    drawStar(baseWidth, baseHeight);
  }
  function four() {
    const baseHeight = ctxHeight / 2 - 180;
    const baseWidth = ctxWidth / 2 + 80;
    drawStar(baseWidth, baseHeight);
  }
  function five() {
    const baseHeight = ctxHeight / 2 - 60;
    const baseWidth = ctxWidth / 2 - 90;
    drawStar(baseWidth, baseHeight);
  }
  one();
  two();
  three();
  four();
  five();
}


drawOuterRect();
drawBaseRect();
drawBaseRectLine();
drawOuterRectInnerLeft();
drawOuterRectInnerRight();
drawMiddleLine();
drawLineAboveMiddle();
drawLineBehindTop();
drawMountain();
drawCat();
drawMoon();
drawStars();