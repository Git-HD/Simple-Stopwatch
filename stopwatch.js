let [millisseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.getElementById('output');
let int;

var toggle = true;

document.getElementById('toggle').addEventListener('click', () => {
    if (toggle) {
        int = setInterval(toggleCounting, 10);
        toggle = !toggle
    } else {
        toggle = !toggle
        clearInterval(int);
        
        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = millisseconds < 10  ? "00" + millisseconds : millisseconds < 100 ? "0" + millisseconds : millisseconds;
        navigator.clipboard.writeText(` ${h} : ${m} : ${s} : ${ms}`);
        
        [millisseconds, seconds, minutes, hours] = [0, 0, 0, 0];
        display.innerHTML = '00 : 00 : 00 : 000';
    }
});

toggleCounting = () => {
    millisseconds += 10;
    if (millisseconds == 1000) {
        millisseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = millisseconds < 10  ? "00" + millisseconds : millisseconds < 100 ? "0" + millisseconds : millisseconds;

    display.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}