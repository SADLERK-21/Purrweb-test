const contactDialog = document.getElementById("contact-dialog");
const contactButton = document.getElementById("contact-dialog-button");
const contactCloseButton = document.getElementById("contact-dialog-close-button");
const contactConfirmButton = document.getElementById("confirm-button");

const thanksDialog = document.getElementById("thanks-dialog");
const thanksCloseButton = document.getElementById("thanks-dialog-close-button");
const thanksConfirmButton = document.getElementById("thanks-dialog-button");

const cookiesDialog = document.getElementById("cookies-dialog");
const cookiesCloseButton = document.getElementById("cookies-dialog-close-button");
const cookiesAcceptButton = document.getElementById("cookies-dialog-accept-button");
const cookiesDeclineButton = document.getElementById("cookies-dialog-decline-button");

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");

const body = document.querySelector("body");

window.onload = () => {
    setTimeout(() => {
        cookiesDialog.showModal();
    }, 3000);
}

cookiesCloseButton.addEventListener('click', e => {
    cookiesDialog.close();
})

cookiesAcceptButton.addEventListener('click', e => {
    cookiesDialog.close();;
})

cookiesDeclineButton.addEventListener('click', e => {
    cookiesDialog.close();
})

contactButton.addEventListener('click', e => {
    contactDialog.showModal();
    body.style.cssText = 'filter: blur(2px);';
})

contactConfirmButton.addEventListener('click', e => {
    contactDialog.close();
    thanksDialog.showModal();
})

contactCloseButton.addEventListener('click', e => {
    contactDialog.close();
    body.style.cssText = 'filter: none;';
})

thanksCloseButton.addEventListener('click', e => {
    thanksDialog.close();
    body.style.cssText = 'filter: none;';
})

thanksConfirmButton.addEventListener('click', e => {
    thanksDialog.close();
    body.style.cssText = 'filter: none;';
})

contactConfirmButton.addEventListener('mouseenter', () => {
    contactConfirmButton.disabled = !validateForm();
});

function validateForm() {
    let result = true;

    if (nameInput.value == '') {
        nameInput.style.cssText = 'border: 2px solid red;';
        result = false;
    }

    if (emailInput.value == '') {
        emailInput.style.cssText = 'border: 2px solid red;';
        result = false;
    }

    if (phoneInput.value == '') {
        phoneInput.style.cssText = 'border: 2px solid red;';
        result = false;
    }

    if (result) {
        nameInput.style.cssText = '2px solid $primary01';
        emailInput.style.cssText = '2px solid $primary01';
        phoneInput.style.cssText = '2px solid $primary01';
    }

    return result;
}
