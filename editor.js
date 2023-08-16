document.getElementById('text-bold').addEventListener('click', function () {
    const element = document.getElementById('editor');
    element.classList.toggle('font-bold');
})
document.getElementById('text-italic').addEventListener('click', function () {
    const element = document.getElementById('editor');
    element.classList.toggle('italic');
})
document.getElementById('text-decoration').addEventListener('click', function () {
    const element = document.getElementById('editor');
    element.classList.toggle('underline');
})
document.getElementById('align-left').addEventListener('click', function () {
    const elementStyle = document.getElementById('editor').style;
    // console.log(element.classList);
    if (elementStyle.textAlign !== 'left') {
        elementStyle.textAlign = 'left';
    }
})
document.getElementById('align-center').addEventListener('click', function () {
    const elementStyle = document.getElementById('editor').style;
    // console.log(element.classList);
    if (elementStyle.textAlign !== 'center') {
        elementStyle.textAlign = 'center';
    }
    else {
        elementStyle.textAlign = 'left';
    }

})
document.getElementById('align-right').addEventListener('click', function () {
    const elementStyle = document.getElementById('editor').style;
    // console.log(element.classList);
    if (elementStyle.textAlign !== 'right') {
        elementStyle.textAlign = 'right';
    }
    else {
        elementStyle.textAlign = 'left';
    }
})
document.getElementById('align-justify').addEventListener('click', function () {
    const elementStyle = document.getElementById('editor').style;
    // console.log(element.classList);
    if (elementStyle.textAlign !== 'justify') {
        elementStyle.textAlign = 'justify';
    }
    else {
        elementStyle.textAlign = 'left';
    }
})
document.getElementById('text-transform').addEventListener('click', function () {
    const element = document.getElementById('editor');
    element.classList.toggle('uppercase');
})
document.getElementById('font-size').addEventListener('change', function (e) {
    const elementStyle = document.getElementById('editor').style;
    elementStyle.fontSize = `${e.target.value}px`;
})
document.getElementById('text-color').addEventListener('change', function (e) {
    const elementStyle = document.getElementById('editor').style;
    elementStyle.color = e.target.value;
})
