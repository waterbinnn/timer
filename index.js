"use strict";
const startBtn = document.querySelector('.btn-timer.start');
const pauseBtn = document.querySelector('.btn-timer.pause');
const resetBtn = document.querySelector('.btn-timer.reset');
const imgStart = document.querySelector('#img-start');
const imgReset = document.querySelector('#img-reset');
const timebox = document.querySelectorAll('.time-box');
const setTimeUp = () => {
    startBtn.disabled = false;
    resetBtn.disabled = false;
    imgStart.src = './assets/image/start-default.svg';
    imgReset.src = './assets/image/reset-default.svg';
};
const resetTimer = () => {
    for (let i = 0; i < timebox.length; i++) {
        timebox[i].textContent = '00';
    }
    startBtn.disabled = true;
    resetBtn.disabled = true;
    pauseBtn.style.display = 'none';
    startBtn.style.display = 'block';
    imgStart.src = './assets/image/start-disabled.svg';
    imgReset.src = './assets/image/reset-disabled.svg';
};
for (let i = 0; i < timebox.length; i++) {
    timebox[i].addEventListener('click', (e) => {
        let time = parseInt(e.target.textContent);
        //클릭시 숫자 up
        if (i === 2) {
            //sec
            time += 10;
        }
        else {
            //hrs, min
            time++;
        }
        e.target.textContent = time;
        if (time < 10) {
            e.target.textContent = '0' + time;
        }
        else {
            e.target.textContent = time;
        }
        setTimeUp();
    });
}
let timer;
//타이머 작동 함수
function playTimer() {
    let hrsCount = parseInt(timebox[0].innerHTML);
    let minCount = parseInt(timebox[1].innerHTML);
    let secCount = parseInt(timebox[2].innerHTML);
    function clock() {
        if (hrsCount > 0 || minCount >= 0) {
            secCount--;
            if (minCount > 0 && secCount === -1) {
                minCount = minCount - 1;
                secCount = 59;
            }
            else if (hrsCount > 0 && minCount === 0 && secCount > 0) {
                hrsCount--;
                minCount = 59;
            }
            else if (hrsCount >= 1 && secCount > 0) {
                if (minCount === 0) {
                    hrsCount--;
                    minCount = 59;
                }
            }
            else if (hrsCount > 0 && minCount === 0) {
                hrsCount = hrsCount - 1;
                minCount = 59;
                secCount = 59;
            }
        }
        //모두 0 이 되었을 때 스탑 타이머
        if (secCount === 0 && minCount === 0 && hrsCount === 0) {
            clearInterval(timer);
            resetTimer();
            alert('Time is up!');
        }
        //타이머 텍스트 변경값
        if (hrsCount < 10) {
            timebox[0].innerHTML = '0' + hrsCount;
        }
        else {
            timebox[0].innerHTML = hrsCount.toString();
        }
        if (minCount < 10) {
            timebox[1].innerHTML = '0' + minCount;
        }
        else {
            timebox[1].innerHTML = minCount.toString();
        }
        if (secCount < 10) {
            timebox[2].innerHTML = '0' + secCount;
        }
        else {
            timebox[2].innerHTML = secCount.toString();
        }
        // console.log('sec', secCount);
        // console.log('min', minCount);
        // console.log('hrs', hrsCount);
    }
    timer = setInterval(clock, 1000);
}
function stopTimer() {
    clearInterval(timer);
}
startBtn.addEventListener('click', () => {
    playTimer();
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
});
pauseBtn.addEventListener('click', () => {
    stopTimer();
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
});
resetBtn.addEventListener('click', () => {
    stopTimer();
    resetTimer();
});
