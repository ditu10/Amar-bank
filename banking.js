document.getElementById('depo-btn').addEventListener('click',function(){
    const depoField = document.getElementById('depo-id');
    if(depoField.value == ''){
        alert('Invalid transaction');
        return;
    }
    const amout = parseFloat(depoField.value);
    if (amout < 0) {
        alert('Invalid transaction');
        depoField.value = '';
        return;
    }
    

    const previousDepo = document.getElementById('current-depo').innerText;
    const prevDepoAmount = parseFloat(previousDepo);
    const newDepoTotal = prevDepoAmount + amout;

    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceAmount = parseFloat(currentBalance);
    const newBalanceTotal = currentBalanceAmount + amout;
    depoField.value = '';
    document.getElementById('current-depo').innerText = newDepoTotal;
    document.getElementById('current-balance').innerText = newBalanceTotal;
})
document.getElementById('with-btn').addEventListener('click',function(){
    const withField = document.getElementById('with-id');
    if(withField.value == ''){
        alert('Invalid transaction');
        return;
    }
    const amout = parseFloat(withField.value);
    if (amout < 0) {
        alert('Invalid transaction');
        withField.value = '';
        return;
    }
    

    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceAmount = parseFloat(currentBalance);
    const newBalanceTotal = currentBalanceAmount - amout;

    if(newBalanceTotal<0){
        alert('Insufficinet balance!!');
        withField.value = '';
        return;
    }

    const previouswith = document.getElementById('current-with').innerText;
    const prevWithAmount = parseFloat(previouswith);
    const newwithTotal = prevWithAmount + amout;

    
    
    withField.value = '';
    document.getElementById('current-with').innerText = newwithTotal;
    document.getElementById('current-balance').innerText = newBalanceTotal;
    
})