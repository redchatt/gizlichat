const users = {
    "112233": "Admin",
    "dost1": "Kənan",
    "dost2": "Musa"
};

let activeUser = "";

function login() {
    const code = document.getElementById("pass-code").value;
    if (users[code]) {
        activeUser = users[code];
        document.getElementById("login-section").style.display = "none";
        document.getElementById("chat-section").style.display = "block";
        document.getElementById("user-title").innerText = "Salam, " + activeUser;
    } else {
        document.getElementById("err").innerText = "Kod səhvdir!";
    }
}

function send() {
    const m = document.getElementById("msg");
    if (m.value === "") return;
    const box = document.getElementById("messages");
    box.innerHTML += <div><b>${activeUser}:</b> ${m.value}</div>;
    m.value = "";
    box.scrollTop = box.scrollHeight;
}
