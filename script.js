function random_image() {
  var imageA = "https://i.imgur.com/6Op142i.png";
  var imageB = "https://i.imgur.com/nMbfMcA.png";
  var imageC = "https://i.imgur.com/cBGhzfK.png";
  var imageD = "https://i.imgur.com/BIDDCeJ.png";
  var imageE = "https://i.imgur.com/XQfBPcf.png";
  var imageG = "https://i.imgur.com/wcZJxmU.png";
  var imageF = "https://i.imgur.com/T3Ny5Ro.png";

  var array_of_images = new Array ();
  console.log(array_of_images);
  array_of_images.push(imageA);
  array_of_images.push(imageB);
  array_of_images.push(imageC);
  var choice = Math.floor(Math.random() * array_of_images.length);
  document.getElementById("container").innerHTML = "<img src='" 
      + array_of_images[choice] + "'></img>";
}
