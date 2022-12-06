var characterX = 90;
var characterY = 90;
var characterW = 90;
var characterZ = 90;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeW = 30;
var shapeZ = 50;

var shapeXs = [];
var shapeYs = [];
var shapeWs = [];
var shapeWs = [];

var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];
var shapeWSpeeds = [];
var shapeZSpeeds = [];

var mouseShapeX;
var mouseShapeY;
var mouseShapeW;
var mouseShapeZ;

function setup() {
    createCanvas(500, 600);
    for (var i = 0; i < 21; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(100);
        shapeYs[i] = getRandomNumber(300);
        diameters[i] = getRandomNumber(55);
    }

    createCharacter(300, 310);
    fill(200,20,400);
}

function draw() {
    background(420, 425, 78);
    stroke(144);
    fill(20,220,300);

   
    createBorders(21);

    
    textSize(10);
    fill(222,323,22);
    text("EXIT!", width - 50, height - 50)

    drawCharacter();
    characterMovement();
    fill(113, 145, 334);

    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        

        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }

    if (characterX > width && characterY > width - 50) {
        fill(155,334,227);
        stroke(2);
        textSize(70);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    fill(420, 200, 40);
    square(mouseShapeX, mouseShapeY, 85);
    fill(120, 20, 420);
    circle(mouseShapeX, mouseShapeY, 45);
    fill(320, 220, 380);
    square(mouseShapeX, mouseShapeY, 55);
    fill(330, 520, 420);
    circle(mouseShapeX, mouseShapeY, 25);
    
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;

           if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(223, 243, 423);
    circle(characterX, characterY, 65);
}

function createBorders(thickness) {
   
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height -10, width, thickness);
    rect(width -10,  0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
    mouseShapeW = mouseW;
    mouseShapeZ = mouseShapeZ;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}