document.addEventListener("DOMContentLoaded", function() {
    const secondHand = document.querySelector('.second-hand')
    const minHand = document.querySelector('.min-hand')
    const hourHand = document.querySelector('.hour-hand')
    const digitalTime = document.querySelector('.digital-time')

    function setTime(){
        const now = new Date();
        const seconds = now.getSeconds();
        setDegrees(seconds, 60, secondHand);

        const minutes = now.getMinutes();
        setDegrees(minutes, 60, minHand);

        const hours = now.getHours();
        setDegrees(hours, 24, hourHand)

        digitalTime.textContent = `${timeStartPad(hours)}:${timeStartPad(minutes)}:${timeStartPad(seconds)}`;
    }

    function setDegrees(value, perDay, htmlElement){
        const degrees = ((value / perDay) * 360) + 90;
        const transitionDuration = degrees === 90 ? 0 : 0.05;

        htmlElement.style.transition = `all ${transitionDuration}s`;
        htmlElement.style.transform = `rotate(${degrees}deg)`
    }

    function timeStartPad(number){
        return number.toString().padStart(2, '0');
    }

    setTime();
    setInterval(setTime, 1000);
});

