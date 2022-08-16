document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('submit button click');
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);

    const passWordField = document.getElementById('user-password');
    const password = passWordField.value;
    // console.log(email, password);
    if (email === 'ashraful@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html';

    }
    else {
        alert('tui password bhule gecos ture ajke phyci ami');
    }

})