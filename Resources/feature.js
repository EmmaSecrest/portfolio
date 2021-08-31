function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var colorH1 = "#";
  for (var i = 0; i < 6; i++) {
    colorH1 += letters[Math.floor(Math.random() * 16)];
  }
  Name.style.color = colorH1;
}
let Name = document.querySelector("h1");

Name.addEventListener("mouseover", getRandomColor);
