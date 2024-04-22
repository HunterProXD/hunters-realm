let btnNavList = document.getElementById('phoneBar')
let navSub = document.getElementById('navListSub')
let btnNavSubDrop = document.getElementById('btnSubGames')
let navSubDrop = document.getElementById('navListSubDrop')
let displayUsername = document.getElementById('displayUsername')

// import users from "./login.js" // Import user data from login.js file
// import { distinct } from "./login.js"

// console.log(users[distinct].username)

// displayUsername.value = users[distinct].username

btnNavList.addEventListener('click', showNavList)
btnNavSubDrop.addEventListener('click', showPhoneGamesList)

/*setInterval(showNavListReset, 50)

function showNavListReset() {

    if (window.innerWidth > 625) {
    navSub.style.display = "none"
    console.log("sindow > 625px")
    }

}*/

function showNavList() {
    
    switch (navSub.style.display) {
        case navSub.style.display = "none":
            navSub.style.display = "flex"
            break

        case navSub.style.display = "flex":
            navSub.style.display = "none"
            break
    }
    if (navSubDrop.style.display = "flex") {
        navSubDrop.style.display = "none" 
    }
    
}

function showPhoneGamesList() {

    switch (navSubDrop.style.display) {
        case navSubDrop.style.display = "none":
            navSubDrop.style.display = "flex"
            break

        case navSubDrop.style.display = "flex":
            navSubDrop.style.display = "none"
            break
    }

}


// Access admin panel
const btnAdminPanel = document.getElementById('AdminPanel')
btnAdminPanel.addEventListener('click', () => {
    window.location.href = "./admin.html"
})