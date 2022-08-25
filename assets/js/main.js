let counter
let message = document.getElementsByClassName('message')[0]
let countDown = document.getElementById('count')
let myInterval

onload = () => {
    counter = 9
    myInterval = setInterval(countingDown, 1000)
}

const countingDown = () => {
    if (counter === 0) {
        console.log('Endlich Feierabend!')
        clearInterval(myInterval)
        countDown.innerHTML = counter
        message.style.opacity = '0'
    } else if (counter <= 9) {
        console.log(counter)
        countDown.innerHTML = '0' + counter--
    }
}