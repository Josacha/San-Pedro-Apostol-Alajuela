// ⚠️ Firebase se conecta aquí luego
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // 🔒 TEMPORAL (solo prueba visual)
    if (email === "admin@parroquia.com" && password === "123456") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginError").innerText =
            "Acceso denegado. Credenciales inválidas.";
    }
});
