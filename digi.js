
console.log("hi")
const hour = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const am = document.querySelector(".AM");
const pm = document.querySelector(".PM");
setInterval(() => {
const time = new Date();
const hours = time.getHours();
const mins = time.getMinutes();
const secs = time.getSeconds();

if(hours > 11){
    pm.className = "active"
    am.className = "AM";
     if(hours > 12){
     hour.innerText = hours - 12;
    }else{
        hour.innerText = hours
    }
}else{
    am.className = "active"
    pm.className = "PM"
    if(hours == 0){
        hour.innerText = hours + 12;
       }else{
           hour.innerText = hours
       }

       
}   
        min.innerText = mins;
        sec.innerText = secs;


} ,1000);