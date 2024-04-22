let email = document.getElementById("email")
let password = document.getElementById("password")
let error = document.getElementById("loginError")
let submit = document.getElementById("submit")
let distinct

let users = [
    {
        username: "1",
        email: "hunter@gmail.com",
        password: "hunter@gmail.com"
    },
    {
        username: "2",
        email: "reactive@gmail.com",
        password: "reactive"
    }
]


// import { data } from "./startup.js"
// console.log(data, "false")
submit.addEventListener("click", login)

function login() {

    event.preventDefault()
    for (let i = 0; i < users.length; i++) {
        if (email.value == users[i].email && password.value == users[i].password) {
            distinct = i
            console.log("works")
            window.location.href = "./index.html"
            return false
        }
    }
    error.style.display = "block"
}

// function logout() {

// }


// FIX NEEDED!! - Store locally or Firebase
export default users
export { distinct }