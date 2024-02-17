let home_score, home_to, guest_score, guest_to, current_quarter, target_time
newGame()
let timer = setInterval(function () {refreshTime()}, 1000)

function newGame() {
    home_score = 0
    home_to = 3
    guest_score = 0
    guest_to = 3
    current_quarter = 1

    // Get the current date and time
    current_time = new Date().getTime()

    // Add 2 minutes to the current date and time
    target_time = current_time + 2 * 60 * 1000

    refreshGuest()
    refreshHome()
    refreshTime()
}

function refreshTime() {
    current_time = new Date().getTime()
    let difference = target_time - current_time
    if (difference < 0) {
        target_time = current_time + 2 * 60 * 1000
        difference = target_time - current_time
        current_quarter += 1
    }

    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((difference % (1000 * 60)) / 1000)

    document.getElementById("clock").textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    document.getElementById("quarter").textContent = current_quarter
}


function refreshHome() {
    document.getElementById("home-score").textContent = home_score
    document.getElementById("home-to").textContent = home_to
}

function refreshGuest() {
    document.getElementById("guest-score").textContent = guest_score
    document.getElementById("guest-to").textContent = guest_to
}

function addPoints(team, points) {
    if (team === "home") {
        home_score += points
        refreshHome()
    } else {
        guest_score += points
        refreshGuest()
    }
}

function toHome() {
    if (home_to > 0) {
        home_to -= 1
        refreshHome()
    }
}

function toGuest() {
    if (guest_to > 0) {
        guest_to -= 1
        refreshGuest()
    }
}