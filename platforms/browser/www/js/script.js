window.onload = function () {

document.addEventListener("deviceready", init, false); // check that Mobile devices is ready, if it is, run init() function.
//init(); // use for testing on chrome

};

function init() {
    window.addEventListener('deviceorientation', handleOrientation);
}



var x = window.innerWidth/2;
var y = window.innerHeight/2;
var r = 0;
var g = 0;
var b = 0;
var rx = 0;
var ry = 0;

    function setup(){
        var cnv = createCanvas(displayWidth,displayHeight,WEBGL);
        cnv.parent("container")
        background(200);
        angleMode(DEGREES);
}

function draw(){
    //style info
//    noFill();
//    stroke(r,g,b);
//    strokeWeight(4);
    background(200);
    
    //shape
    rotateX(rx);
    rotateY(ry);
    box(100,100,100);
    
    
    //    ellipse(x,y, 100);
}

function handleOrientation(event) {
    
    var beta = event.beta;
    var gamma = event.gamma;
    var alpha = event.alpha;
    
    r = map(beta, -180, 180, 0, 255);
    g = map(gamma, -90, 90, 0, 255);
    b = map(alpha, 0, 360, 0, 255);
    
    rx = map(beta, -180, 180, 0, 255);
    ry = map(gamma, -90, 90, 0, 255);
    
    x += gamma;
    y += beta;
    
    
}

