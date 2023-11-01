var ONE_MINUTE = 60 * 1000;

function showTime() {
  console.log(new Date().toTimeString().split(' ')[0]);
}

function repeatEvery(func, interval) {
    var now = new Date(),
        delay = interval - now % interval;

    function start() {
        func();
        setInterval(func, interval);
    }

    setTimeout(start, delay);
}
showTime();
repeatEvery(showTime, ONE_MINUTE);