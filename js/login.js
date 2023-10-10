// step 1 : Add event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){

    // step 2 : Get the email address value from the email field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step 3 : Get the password value from the password field 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: Do not verify email password on the client side

    // Step 4 : Verify email and password
    if(email === 'bristy@gmail.com' && password === 'pandaslove'){
        window.location.href = 'bank.html';
    }
    else{
        alert('You put wrong credential!')
        window.location.href = 'index.html';
    }

})

