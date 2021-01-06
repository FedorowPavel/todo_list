const inputField = document.querySelector('input[type="text"]');
const inputBottomBorder = document.getElementById('input-border');


// inputField.addEventListener('focus', () => {
//     inputBottomBorder.style.width = "calc(100% - 48px)";
// });

// inputField.addEventListener('blur', () => {
//     inputBottomBorder.style.width = "0px";
// });

window.onclick = function (event) {
    if (event.target === inputField) {
        inputBottomBorder.style.width = "calc(100% - 48px)";
    }
    if (event.target !== inputField) {
        inputBottomBorder.style.width = "0px";
    }
}