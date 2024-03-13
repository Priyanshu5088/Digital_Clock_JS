const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());--> runs in console
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

