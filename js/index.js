const errorText = document.querySelector(".err"),
    errorLogin = document.querySelector(".login-err "),
    loginBtn = document.querySelector(".ingresar button"),
    txtMail = document.getElementById("txtMail"),
    pwsPass = document.getElementById("pwsPass");

loginBtn.onclick = () => {
    const user = txtMail.value;
    const password = pwsPass.value;
    const credentials = [{
            "user": "admin",
            "password": "admin"
        },
        {
            "user": "user",
            "password": "user"
        },
        {
            "user": "guest",
            "password": "guest"
        }
    ];

    //validar inicio de sesion
    if (user.trim() === "" || password.trim() === "") {
        errorText.style.display = "block";
        errorLogin.style.display = "none";
        return;
    } else {
        errorText.style.display = "none";

        for (let i = 0; i < credentials.length; i++) {
            if (user === credentials[i].user && password === credentials[i].password) {
                errorLogin.style.display = "none";
                location.href = "./../src/home.html";
                return;
            } else {
                errorLogin.style.display = "block";
            }
        }
    }
};