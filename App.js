const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const sec = document.getElementById('sec');

const july = new Date(2022, 6, 01).getTime()


const countDown = ()=>{
    const now = new Date().getTime()
    const cal = july - now
    const day = Math.floor(cal/(1000*60*60*24));
    if (day < 10) {
        days.textContent = `0${day}`
    }else{
        days.textContent = day
    }
    
    const hour = Math.floor((cal/(1000*60*60))%24);
    if (hour < 10) {
        hours.textContent = `0${hour}`
    }else{
        hours.textContent = hour
    }
    
    const min = Math.floor((cal/(1000*60))%60);
    if (min < 10) {
        mins.textContent = `0${min}`
    }else{
        mins.textContent = min
    }
    
    const secs = Math.floor((cal/(1000))%60);
    if (secs < 10) {
        sec.textContent = `0${secs}`
    }else{
        sec.textContent = secs
    }
    
}
setInterval(() => {
    countDown()
}, 1000);
