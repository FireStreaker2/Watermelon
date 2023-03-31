root = document.getElementById("root");

$.post('/endpoint', {query: "watermelon"}, function(response) {
  const url = response;
  const picture = document.createElement("img");
  picture.src = url;
  picture.style.length = "100%";
  picture.style.width = "100%";
  root.innerHTML = "";
  root.appendChild(picture);
})
.fail(function(error) {
  console.error(error);
});