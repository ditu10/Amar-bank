document.getElementById('login-btn').addEventListener('click',function(){
    let userField = document.getElementById('user-id');
    let passField = document.getElementById('pass-id');

    const user = userField.value;
    const pass = passField.value;
    if(user=='sontan' && pass == '1234'){
        userField.value = '';
        passField.value = '';
        window.location.href = 'bank.html';
    }
    else if(user=='' || pass == ''){
        alert('Please enter the Username and Password')
    }
    else{
        window.alert('Invalid login');
    }
})