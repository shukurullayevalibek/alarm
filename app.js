let alarmCard = document.querySelector(".alarm-card")
let displayClock = document.querySelector(".display-clock")
let alarmInput = document.querySelector(".alarm-inp")
let setBtn = document.querySelector(".set-btn")
let massage = document.querySelector(".massage")
let modal = document.querySelector(".modal")
let modalTime = document.querySelector(".modal-time")
let modalStop = document.querySelector(".modal-stop")


let alarmTime = null
let alarmSound = new Audio("alarm.mp3")
alarmSound.loop = true
let isRinging = false

setInterval(()=>{
    let date = new Date()
    let hours = date.getHours() < 10 ? "0" + date.getHours(): date.getHours()
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes(): date.getMinutes()
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds(): date.getSeconds()
    displayClock.textContent = `${hours}:${minutes}:${seconds}`

    let currentTimeShort = `${hours}:${minutes}`

    if(alarmInput.value === currentTimeShort && !isRinging){
        ringAlarm()
    }
},1000)

setBtn.addEventListener('click', ()=>{
    if(alarmInput.value){
        alarmTime = alarmInput.value
        massage.classList.add("blue")
        massage.textContent = `Budilnik ${alarmTime} ga o'rnatildi`
    }
    else(
        alert("Vaqtni kiriting")
    )
})

function ringAlarm(){
    modal.classList.remove("hidden")
    isRinging = true
    modalTime.textContent = `${alarmTime}` 
    alarmSound.play()
}
modalStop.addEventListener('click',()=>{
    modal.classList.add("hidden")
    isRinging = false
    alarmTime = null
    alarmSound.pause()
    massage.textContent = ""
    alarmInput.value = ""
    alarmSound.currectTime = 0
})