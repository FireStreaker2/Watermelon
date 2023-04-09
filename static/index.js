const root = document.getElementById("root");

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

var _z = console;
Object.defineProperty( window, "console", {
    get : function(){if( _z._commandLineAPI ){ throw "Script execution not permitted" } return _z; },
    set : function(val){ _z = val }
});