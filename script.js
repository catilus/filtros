var originalImage = null;
var grayImage = null;
var redImage = null;
var alphaImage = null;
var canvas = document.getElementById("canvas");

function loadImage() {
  originalImage = new SimpleImage(document.getElementById("ogimage"));
  grayImage = new SimpleImage(document.getElementById("ogimage"));
  redImage = new SimpleImage(document.getElementById("ogimage"));
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
  if (redImage == null || ! grayImage.complete()) {
    alert("Image has not loaded");
  }
  else {
    for (var pixel of redImage.values()){
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        
      if (avg < 128) {
            pixel.setRed(2*avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
      }
        
      else {
            pixel.setRed(255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(2*avg-255);
      }  
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
  alert("Rainbow");
}

function resetImage() {
  //alert("Are you sure you want to reset?");
  originalImage.drawTo(canvas);
}