(function() {

    /* Up / Down placeholder field form */

    const fields = document.querySelectorAll('form .field > input, form .field > textarea'),
        classNameForActiveField = 'field__placeholder--active';
    for (let item of fields) {
        item.addEventListener('focus', focusInputForFieldForm);
        item.addEventListener('blur', blurInputForFieldForm);
    }
    function focusInputForFieldForm() {
        this.parentNode.querySelector('.field__placeholder').classList.add(classNameForActiveField);
    }
    function blurInputForFieldForm() {
        if (this.value.length === 0) {
            this.parentNode.querySelector('.field__placeholder').classList.remove(classNameForActiveField);
        }
    }

    /* Animate button send form */

    const forms = document.querySelectorAll('form');
    for (let form of forms) {
        form.addEventListener('submit', animateButtonSubmitForm);
    }
    function animateButtonSubmitForm(e) {
        e.preventDefault();
        let button = this.querySelector('button[type="submit"]'),
            span = button.querySelector('span'),
            textSubmited = span.getAttribute('data-submited');

        console.log(textSubmited);
        button.classList.add('animated');
        setTimeout(function() {
            span.innerHTML = textSubmited;
        }, 250);
    }


})();