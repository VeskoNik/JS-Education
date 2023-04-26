function attachEventsListeners() {
const days  = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const buttons = Array.from(document.querySelectorAll('input[type=button]'))
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click' , convert)
})
function convert(event) {
    let clicked = event.target
    if(clicked.id === 'daysBtn'){
        let input = Number(days.value)
        hours.value = input * 24
        minutes.value = hours.value * 60
        seconds.value = minutes.value * 60
    }else if(clicked.id === 'hoursBtn'){
        let input = Number(hours.value)
        days.value = input /24
        minutes.value = input * 60
        seconds.value = minutes.value * 60
    }else if(clicked.id === 'minutesBtn'){
        let input = Number(minutes.value)
        hours.value = minutes.value /60
        days.value = hours.value /24
        seconds.value = input * 60
    }else if(clicked.id === 'secondsBtn'){
        let input = Number(seconds.value)
        minutes.value = input / 60
        hours.value = minutes.value /60
        days.value = hours.value / 24
    }
}
     
}