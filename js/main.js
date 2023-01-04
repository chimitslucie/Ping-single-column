const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const email = document.querySelector(".form-email");
const form = document.querySelector(".form");
const messageError = document.querySelector(".message__error");
const button = document.querySelector(".request__btn");

function validateEmail(email) {
    if (!email.value.match(regexEmail)) {
        messageError.style.display = "block";
        email.style.border = "1px solid var(--light-red)";
        form.classList.add(".in-error");
        email.classList.add(".error");
    } else {
        messageError.style.display = "none";
        email.style.border = "1px solid var(--pale-blue)";
        form.classList.remove(".in-error");
        email.classList.remove(".error");
    }
}

button.addEventListener("click", (e) => {
    validateEmail(email);
});
