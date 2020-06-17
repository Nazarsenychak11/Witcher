
const getText = document.querySelector('.info-bonus__copy-btn');
const getTextBlink = document.querySelector('.info-bonus__witcher-text');

getText.addEventListener('click', copyText);

function copyText() {

    let textToCopy = 'Witcher';

    let myTemporaryInputElement = document.createElement('input');
    myTemporaryInputElement.type = 'text';
    myTemporaryInputElement.value = textToCopy;

    document.body.appendChild(myTemporaryInputElement);

    myTemporaryInputElement.select();
    document.execCommand('Copy');

    document.body.removeChild(myTemporaryInputElement);

    getText.innerText = '';
    getText.innerText = 'was copied';
    setTimeout(() => {
        getText.innerText = 'copy code';
    }, 1500);

    getTextBlink.classList.add('blink_text');
    setTimeout(() => {
        getTextBlink.classList.remove('blink_text');
    }, 1000);
}
