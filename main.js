let imgswitch = 0;

function changeImage() {
  let img = document.querySelector("#ImageId");

  if (imgswitch === 0) {
    img.setAttribute("src", 'Crafts/Na1.jpg');
    document.getElementById("LabelId").innerHTML = '&#10094Предишна снимка';
    imgswitch = 1;
  } else {
    img.setAttribute("src", 'Crafts/Na.jpg');
    document.getElementById("LabelId").innerHTML = 'Следваща снимка&#10095';
    imgswitch = 0;
  }
}
