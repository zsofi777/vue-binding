var myObject = new Vue({
  el: ".change",
  data: { message: "Everything changes" }
});

function myFunction() {
  myObject.message = "Forever";
}