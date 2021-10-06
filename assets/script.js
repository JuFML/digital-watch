const watchContainer = document.querySelector('.watch-container')


const reloadClock = () => {
    const present = new Date()
    
    const hour = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    const watchHTML = `
    <span>${String(hour).length === 1 ? `0${hour}`: hour}</span> :
    <span>${String(minutes).length === 1 ? `0${minutes}`: minutes}</span> :
    <span>${String(seconds).length === 1 ? `0${seconds}`: seconds}</span>
    `

    watchContainer.innerHTML = watchHTML
}

setInterval(reloadClock, 1000)