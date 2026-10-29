const selectmenu = document.querySelectorAll('select');
// console.log(selectmenu);
const TimeBox = document.querySelector('.time');
const setAlarmBtn = document.querySelector('button');
const ringtone = new Audio('images/ringtone.mp3');
const content = document.querySelector('.content');
let alarmTime , alarmState = 'noset';



// hours
for (let z = 23; z >= 0; z--) {
    z = z < 10 ? '0' + z : z;

    // if(h < 10 ) h + '0' + h 
    // else h = h

    let option = `<option value="${z}">${z}</option>`;
    console.log(option);
    selectmenu[0].firstElementChild.insertAdjacentHTML('afterend' , option)
}

// minutes
for (let z = 59; z >= 0; z--) {
    z = z < 10 ? '0' + z : z;

    let option = `<option value="${z}">${z}</option>`;
    console.log(option);
    selectmenu[1].firstElementChild.insertAdjacentHTML('afterend' , option)
}

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

  TimeBox.innerHTML = `${h}:${m}:${s}`;
  if(alarmTime == `${h}:${m}`){
    ringtone.play();
    ringtone.loop = true;
  };
}, 1000);
 

setAlarmBtn.addEventListener('click' , () =>{
    alarmTime = `${selectmenu[0].value}:${selectmenu[1].value}`;
    // console.log(selectmenu[0].value)
    // console.log(selectmenu[1].value)
    // console.log(alarmTime)
    if(alarmTime.includes('Hour') || alarmTime.includes('Minute')){
        return alert('choose correst time')
    }
    checkState(alarmState)


})
function checkState(state){
    if(state == 'noset'){
        content.classList.add('disable');
        setAlarmBtn.innerText = 'clear Alarm'
        alarmState = 'set'
    }
    else{
        content.classList.remove('disable');
        alarmTime = ''
        ringtone.pause()
        alarmState = 'noset'
        setAlarmBtn.innerText = 'set Alarm'

    }
}

