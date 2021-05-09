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
  //alert("Rainbow");
  var H = rainbowImage.getHeight();
  
  if (rainbowImage == null || ! rainbowImage.complete()) {
    alert("Image has not loaded");
  }
  else {
    for (var pixel of rainbowImage.values()){
      var y = pixel.getY()
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
      
      // Red horizontal stripe
      if (y <= H/7){
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

      // Orange horizontal stripe
      else if (y < H/7 || y <= 2*H/7 ){
        if (avg < 128) {
            pixel.setRed(2*avg);
            pixel.setGreen(0.8*avg);
            pixel.setBlue(0);
        }        
        else {
            pixel.setRed(255);
            pixel.setGreen(1.2*avg-51);
            pixel.setBlue(2*avg-255);
        }
      }

      // Yellow horizontal stripe
      else if (y < 2*H/7 || y <= 3*H/7 ){
        if (avg < 128) {
            pixel.setRed(2*avg);
            pixel.setGreen(2*avg);
            pixel.setBlue(0);
        }        
        else {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(2*avg-255);
        }
      }

      // Green horizontal stripe
      else if (y < 3*H/7 || y <= 4*H/7 ){
        if (avg < 128) {
            pixel.setRed(0);
            pixel.setGreen(2*avg);
            pixel.setBlue(0);
        }        
        else {
            pixel.setRed(2*avg-255);
            pixel.setGreen(255);
            pixel.setBlue(2*avg-255);
        }
      }

      // Blue horizontal stripe
      else if (y < 4*H/7 || y <= 5*H/7 ){
        if (avg < 128) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
        }        
        else {
            pixel.setRed(2*avg-255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
        }
      }

      // Indigo horizontal stripe
      else if (y < 5*H/7 || y <= 6*H/7 ){
        if (avg < 128) {
            pixel.setRed(0.8*avg);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
        }        
        else {
            pixel.setRed(1.2*avg-51);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
        }
      }

      // Purple horizontal stripe
      else {
        if (avg < 128) {
            pixel.setRed(1.6*avg);
            pixel.setGreen(0);
            pixel.setBlue(1.6*avg);
        }        
        else {
            pixel.setRed(0.4*avg+153);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(0.4*avg+153);
        }
      }

    }
    rainbowImage.drawTo(canvas);
  }
}

function resetImage() {
  //alert("Are you sure you want to reset?");
  originalImage.drawTo(canvas);
}