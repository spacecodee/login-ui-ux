const errorText = document.querySelector(".err"),
    loginBtn = document.querySelector(".ingresar button"),
    txtMail = document.getElementById("txtMail"),
    pwsPass = document.getElementById("pwsPass");

loginBtn.onclick = () => {
    const user = txtMail.value;
    const password = pwsPass.value;

    if (user.trim() === "" || password.trim() === "") {
        errorText.style.display = "block";
    } else {
        errorText.style.display = "none";
    }
};