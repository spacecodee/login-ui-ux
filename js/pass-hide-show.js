const pswrdField = document.querySelector(".content input[type='password']"),
    toggleBtn = document.querySelector(".content .pass i");

//agregar ojo al textfield de la contraseña
toggleBtn.onclick = () => {
    if (pswrdField.type === "password") {
        pswrdField.type = "text";
        toggleBtn.classList.add("active"); //con este se agregar una nueva clase al toggleBtn
    } else {
        pswrdField.type = "password";
        toggleBtn.classList.remove("active");
    }
};