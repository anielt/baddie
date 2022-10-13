function random_image() {
  var imageA = "https://i.imgur.com/kWiO17S.png";
  var imageB = "https://i.imgur.com/nMbfMcA.png";
  var imageC = "https://i.imgur.com/cBGhzfK.png";
  var imageD = "https://i.imgur.com/BIDDCeJ.png";
  var imageE = "https://i.imgur.com/XQfBPcf.png";
  var imageF = "https://i.imgur.com/wcZJxmU.png";
  var imageG = "https://i.imgur.com/T3Ny5Ro.png";
  var imageH = "https://i.imgur.com/QyoyWdW.png";
  var imageI = "https://i.imgur.com/MBe6dot.png";  
  var imageJ = "https://i.imgur.com/hVsgWFE.png";
  var imageK = "https://i.imgur.com/a7Lg0ct.png";



  var array_of_images = new Array ();
  console.log(array_of_images);
  array_of_images.push(imageA);
  array_of_images.push(imageB);
  array_of_images.push(imageC);
  array_of_images.push(imageD);
  array_of_images.push(imageE);
  array_of_images.push(imageF);
  array_of_images.push(imageG);
  array_of_images.push(imageH);
  array_of_images.push(imageI);
  array_of_images.push(imageJ);
  array_of_images.push(imageK);

  var choice = Math.floor(Math.random() * array_of_images.length);
  document.getElementById("container").innerHTML = "<img src='" 
      + array_of_images[choice] + "'></img>";
}
