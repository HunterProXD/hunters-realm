const account = document.getElementById('viewAccount')
const connections = document.getElementById('viewConnections')
const privacy = document.getElementById('viewPrivacy')
const orderHistory = document.getElementById('viewOrderHistory')
const redeemCode = document.getElementById('viewRedeemCode')
const activity = document.getElementById('viewActivity')

const btnAccount = document.getElementById('Account')
const btnConnections = document.getElementById("Connections")
const btnPrivacy = document.getElementById('Privacy')
const btnOrderHistory = document.getElementById('Order History')
const btnRedeemCode = document.getElementById('Redeem Code')
const btnActivity = document.getElementById('Activity')

btnAccount.addEventListener("click", swapToAccount)
btnConnections.addEventListener("click", swapToConnections)
btnPrivacy.addEventListener('click', swapToPrivacy)
btnOrderHistory.addEventListener('click', swapToOrderHistory)
btnRedeemCode.addEventListener('click', swapToRedeemCode)
btnActivity.addEventListener('click', swapToActivity)

function swapToAccount() {
    account.style.display = "flex";
    connections.style.display = "none";
    privacy.style.display = "none";
    orderHistory.style.display = "none";
    redeemCode.style.display = "none";
    activity.style.display = "none";
}

function swapToConnections() {
    account.style.display = "none";
    connections.style.display = "flex";
    privacy.style.display = "none";
    orderHistory.style.display = "none";
    redeemCode.style.display = "none";
    activity.style.display = "none";
}

function swapToPrivacy() {
    account.style.display = "none";
    connections.style.display = "none";
    privacy.style.display = "flex";
    orderHistory.style.display = "none";
    redeemCode.style.display = "none";
    activity.style.display = "none";
}

function swapToOrderHistory() {
    account.style.display = "none";
    connections.style.display = "none";
    privacy.style.display = "none";
    orderHistory.style.display = "flex";
    redeemCode.style.display = "none";
    activity.style.display = "none";
}

function swapToRedeemCode() {
    account.style.display = "none";
    connections.style.display = "none";
    privacy.style.display = "none";
    orderHistory.style.display = "none";
    redeemCode.style.display = "flex";
    activity.style.display = "none";
}

function swapToActivity() {
    account.style.display = "none";
    connections.style.display = "none";
    privacy.style.display = "none";
    orderHistory.style.display = "none";
    redeemCode.style.display = "none";
    activity.style.display = "flex";
}