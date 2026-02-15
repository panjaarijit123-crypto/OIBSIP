// ---------- REGISTER ----------
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let user = document.getElementById("regUser").value;
        let pass = document.getElementById("regPass").value;

        if (localStorage.getItem(user)) {
            document.getElementById("regMsg").innerText = "User already exists";
        } else {
            localStorage.setItem(user, pass);
            document.getElementById("regMsg").innerText = "Registration successful";
        }
    });
}

// ---------- LOGIN ----------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let user = document.getElementById("loginUser").value;
        let pass = document.getElementById("loginPass").value;

        let storedPass = localStorage.getItem(user);

        if (storedPass === pass) {
            localStorage.setItem("loggedIn", user);
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("loginMsg").innerText = "Invalid login details";
        }
    });
}

// ---------- PROTECT DASHBOARD ----------
if (window.location.pathname.includes("dashboard.html")) {
    let check = localStorage.getItem("loggedIn");
    if (!check) {
        window.location.href = "index.html";
    }
}

// ---------- LOGOUT ----------
function logout() {
    localStorage.removeItem("loggedIn");
    alert("Logout successful");
    window.location.href = "index.html";
}
