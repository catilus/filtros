var originalImage = null;
var grayImage = null;
var redImage = null;
var rainbowImage = null;
var alphaImage = null;
var canvas = document.getElementById("canvas");

function loadImage() {
  originalImage = new SimpleImage(document.getElementById("ogimage"));
  grayImage = new SimpleImage(document.getElementById("ogimage"));
  redImage = new SimpleImage(document.getElementById("ogimage"));
  rainbowImage = new SimpleImage(document.getElementById("ogimage"));
  alphaImage = new SimpleImage(document.getElementById("ogimage"));
  
  originalImage.drawTo(canvas);
}

function makeGray() {
  //alert("Grayscale");
  
  if (grayImage == null || ! grayImage.complete()) {
    alert("Image has not loaded");
  }
  else {
    for (var pixel of grayImage.values()){
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    grayImage.drawTo(canvas);
  }
}

function makeRed() {
  //alert("Red");
  if (redImage == null || ! redImage.complete()) {
    alert("Image has not loaded");
  }
  else {
    for (var pixel of redImage.values()){
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        
      pixel.setRed(colorPixel(255, avg));
      pixel.setGreen(colorPixel(0, avg));
      pixel.setBlue(colorPixel(0, avg)); 
    }
    redImage.drawTo(canvas);
  }
}

function makeAlphaBorder() {
  //alert("Alpha");
  
  if (alphaImage == null || ! alphaImage.complete()) {
    alert("Image has not loaded");
  }
  else {
    var imgWidth = alphaImage.getWidth();
    var imgHeight = alphaImage.getHeight();
    var borderSize = document.getElementById("sizeInput").value;
    
    if (isNaN(borderSize) || borderSize < 0) {
      alert("Set a correct number.");
    }   
    else {  
      for (var pixel of alphaImage.values()){
        var x = pixel.getX();
        var y = pixel.getY();
      
        if (x < borderSize || x > imgWidth-borderSize){
          pixel.setAlpha(100);
        }
      
        if (y < borderSize || y > imgHeight-borderSize){
          pixel.setAlpha(100);
        }
      }
      alphaImage.drawTo(canvas);
    } 
  }
}

function makeRainbow() {
  //alert("Rainbow");
  
  if (rainbowImage == null || ! rainbowImage.complete()) {
    alert("Image has not loaded");
  }
  else {
    for (var pixel of rainbowImage.values()){
      var H = rainbowImage.getHeight();
      var y = pixel.getY()
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
      
      // Red horizontal stripe
      if (y <= H/7){
        pixel.setRed(colorPixel(255, avg));
        pixel.setGreen(colorPixel(0, avg));
        pixel.setBlue(colorPixel(0, avg));
      }

      // Orange horizontal stripe
      else if (y < H/7 || y <= 2*H/7 ){
        pixel.setRed(colorPixel(255, avg));
        pixel.setGreen(colorPixel(126, avg));
        pixel.setBlue(colorPixel(0, avg));
      }

      // Yellow horizontal stripe
      else if (y < 2*H/7 || y <= 3*H/7 ){
        pixel.setRed(colorPixel(255, avg));
        pixel.setGreen(colorPixel(219, avg));
        pixel.setBlue(colorPixel(0, avg));
      }

      // Green horizontal stripe
      else if (y < 3*H/7 || y <= 4*H/7 ){
        pixel.setRed(colorPixel(0, avg));
        pixel.setGreen(colorPixel(255, avg));
        pixel.setBlue(colorPixel(0, avg));
      }

      // Blue horizontal stripe
      else if (y < 4*H/7 || y <= 5*H/7 ){
        pixel.setRed(colorPixel(0, avg));
        pixel.setGreen(colorPixel(0, avg));
        pixel.setBlue(colorPixel(255, avg));
      }

      // Indigo horizontal stripe
      else if (y < 5*H/7 || y <= 6*H/7 ){
        pixel.setRed(colorPixel(116, avg));
        pixel.setGreen(colorPixel(0, avg));
        pixel.setBlue(colorPixel(255, avg));
      }

      // Purple horizontal stripe
      else {
        pixel.setRed(colorPixel(255, avg));
        pixel.setGreen(colorPixel(11, avg));
        pixel.setBlue(colorPixel(238, avg));
      }

    }
    rainbowImage.drawTo(canvas);
  }
}

function resetImage() {
  //alert("Are you sure you want to reset?");
  originalImage.drawTo(canvas);
}

function colorPixel(c,avg){
  var C = 0;

  if (avg < 128) {
      C = c/127.5*avg;
  }
  else {
      C = (2 - c/127.5)*avg + 2*c - 255;
  }
  
  return C
}