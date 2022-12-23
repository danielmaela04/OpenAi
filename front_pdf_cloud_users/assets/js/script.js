window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});

let text1 = document.getElementById("text");
let enter = document.getElementById("submit");
let image = document.getElementById("image");
let down = document.getElementById("down");

enter.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify({
      prompt: text1.value,
      model: "image-alpha-001",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data[0].url);
      image.innerHTML = `<img src="${data.data[0].url}/>"`;
      down.innerHTML = `<a href="${data.data[0].url}">Download</a>`;
    });
});

filter("hom");
function filter(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "hom") c = "hom";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  let arr1 = element.className.split(" ");
  let arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var activeBottom = document.getElementById("menuBottom");
var button = activeBottom.getElementsByClassName("col-2");
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
