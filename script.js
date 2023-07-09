let timeLoop;
let shadowTimeLoop; 
startBtn.addEventListener('click', (e) =>{
    clearAllIntervals();
    circle.classList.remove('shadow-lg');

    let time = setTime(timer.innerText);
    timeLoop = setInterval(() => {
        time.setSeconds(time.getSeconds() + 1);
        const h = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        const m = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        const s = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
        timer.innerText = `${h}:${m}:${s}`;
    }, 1000);
});

stopBtn.addEventListener('click', (e) => {
    clearAllIntervals();
    shadowTimeLoop = setInterval(() => {
        circle.classList.toggle('shadow-lg');
    }, 500);
});

resetBtn.addEventListener('click', (e) =>{
    clearAllIntervals();
    circle.classList.remove('shadow-lg');
    timer.innerText = '00:00:00';
});

const setTime = (time) => {
    const [h, m, s] = time.split(':');
    const date = new Date();
    date.setHours(h, m, s);
    return date;
}

const clearAllIntervals = () =>{
    clearInterval(timeLoop);
    clearInterval(shadowTimeLoop);
}