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
function setValueById(id, value) {
    document.getElementById(id).innerText = value;
}

// count function where words and characters are counted
let wordsCount = 0;
let charactersCount = 0;
function count() {
    const element = document.getElementById('editor');
    const text = element.value;
    const optimizedText = text.replace(/  +/g, ' ');
    const words = optimizedText.trim().split(' ');
    console.log(words);
    console.log(words.join('').length);
    if (words[0] === '') {
        wordsCount = 0;
    }
    else {
        wordsCount = words.length;
    }
    let isChecked = document.getElementById('check-space-count').checked;
    charactersCount = isChecked ? text.length : words.join('').length;
    setValueById('words-count', wordsCount);
    setValueById('characters-count', charactersCount)
}

const editableParagraph = document.getElementById("editableParagraph");

editableParagraph.addEventListener("click", function () {
    // Create a textarea element
    const textarea = document.createElement("textarea");
    textarea.value = this.textContent;

    // Replace the <p> element with the <textarea>
    this.parentNode.replaceChild(textarea, this);

    // Focus on the textarea and select its content
    textarea.focus();
    textarea.select();

    // Handle the blur event (when the textarea loses focus)
    textarea.addEventListener("blur", function () {
        // Create a new <p> element
        const newParagraph = document.createElement("p");
        newParagraph.textContent = this.value;

        // Replace the <textarea> element with the new <p> element
        this.parentNode.replaceChild(newParagraph, this);
    });
});

