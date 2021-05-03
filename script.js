function random_image() {
  var imageA = "https://i.imgur.com/6H9D8To.jpg";
  var imageB = "https://i.imgur.com/5CeeOwo.jpg";
  var imageC = "https://i.imgur.com/5CQriHS.jpg";
  var array_of_images = new Array ();
  console.log(array_of_images);
  array_of_images.push(imageA);
  array_of_images.push(imageB);
  array_of_images.push(imageC);
  var choice = Math.floor(Math.random() * array_of_images.length);
  document.getElementById("container").innerHTML = "<img src='" 
      + array_of_images[choice] + "'></img>";
}
