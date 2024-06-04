// code combined from https://www.w3schools.com/howto/howto_js_countdown.asp 
// and https://www.w3schools.com/js/js_date_methods.asp
// and Github Copilot


const Timer = () => {

var countDownDate = new Date("jun 21, 2024 15:37:25").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + ":" + hours + ":"
  + minutes + ":" + seconds + " ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Event over ";
  }
}, 1000);



return (
    <div>
        <h1>Countdown Timer</h1>
        <p id="timer"></p>
    </div>
);

}

export default Timer;