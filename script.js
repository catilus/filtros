var originalImage = null;
var grayImage = null;
var canvas = document.getElementById("canvas");

function loadImage() {
  originalImage = new SimpleImage(document.getElementById("ogimage"));
  grayImage = new SimpleImage(document.getElementById("ogimage"));
  redImage = new SimpleImage(document.getElementById("ogimage"));
  
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

function makeRainbow() {
  alert("Rainbow");
}

function resetImage() {
  //alert("Are you sure you want to reset?");
  originalImage.drawTo(canvas);
}