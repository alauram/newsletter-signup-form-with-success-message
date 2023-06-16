const card = document.querySelector(".card");
const sucess = document.querySelector(".sucess");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error");
const returnBtn = document.querySelector(".return");
let user = document.querySelector(".user");

submit.addEventListener("click", () => {
if(valid (email.value)){
    card.classList.add("hide");
    sucess.classList.remove("hide");
    user.innerHTML = email.value;
}
else{
    email.classList.add("active");
    error.classList.remove("hide");
}
});

returnBtn.addEventListener("click", () => {
    sucess.classList.add("hide");
    card.classList.remove("hide");
});

function valid(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};
