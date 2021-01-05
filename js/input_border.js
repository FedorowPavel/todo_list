const inputField = document.querySelector('input[type="text"]');
const inputBottomBorder = document.getElementById('input-border');


inputField.addEventListener('focus', () => {
    inputBottomBorder.style.width = "calc(100% - 48px)";
});

inputField.addEventListener('blur', () => {
    inputBottomBorder.style.width = "0px";
});
