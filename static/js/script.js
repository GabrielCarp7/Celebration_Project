
// NEW YEAR COUNTDOWN

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the target date from the hidden element
    var targetDate = document.getElementById('newyear-date').textContent;
    var countDownDate = new Date(targetDate).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
});


// CHRISTMAS COUNTDOWN

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the target date from the hidden element
    var targetDate = document.getElementById('christmas-date').textContent;
    var countDownDate = new Date(targetDate).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
});


// EASTER COUNTDOWN

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the target date from the hidden element
    var targetDate = document.getElementById('easter-date').textContent;
    var countDownDate = new Date(targetDate).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
});

