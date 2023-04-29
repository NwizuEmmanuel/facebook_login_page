function login(){
    let email_or_phone = document.getElementById("email_or_phone");
    let modalBody = document.querySelector("div.modal-body");

    modalBody.innerHTML = `Welcome ${email_or_phone.value}`;
}