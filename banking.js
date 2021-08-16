function addTransactionData(type,amount) {
    // console.log(type,amount)
    const td1 = document.createElement('td');
    td1.innerText = type;
    
    const td2 = document.createElement('td');
    td2.innerText = amount;
    const tr = document.createElement('tr');
    
    const date = new Date();
    // const string = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    const td3 = document.createElement('td');
    td3.innerText = date;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    document.getElementById('table-body').appendChild(tr);

}

document.getElementById('depo-btn').addEventListener('click', function () {
    const depoField = document.getElementById('depo-id');
    if(depoField.value == ''){
        alert('Invalid transaction');
        return;
    }
    if (parseFloat(depoField.value).toString() == 'NaN') {
        alert('Invalid transaction');
        depoField.value = '';
        return;
    }
    const amount = parseFloat(depoField.value);
    if (amount < 0) {
        alert('Invalid transaction');
        depoField.value = '';
        return;
    }
    

    const previousDepo = document.getElementById('current-depo').innerText;
    const prevDepoAmount = parseFloat(previousDepo);
    const newDepoTotal = prevDepoAmount + amount;

    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceAmount = parseFloat(currentBalance);
    const newBalanceTotal = currentBalanceAmount + amount;
    depoField.value = '';
    document.getElementById('current-depo').innerText = newDepoTotal;
    document.getElementById('current-balance').innerText = newBalanceTotal;

    addTransactionData('Deposit', amount);

})
document.getElementById('with-btn').addEventListener('click',function(){
    const withField = document.getElementById('with-id');
    if(withField.value == ''){
        alert('Invalid transaction');
        return;
    }
    if (parseFloat(withField.value).toString() == 'NaN') {
        alert('Invalid transaction');
        withField.value = '';
        return;
    }
    const amount = parseFloat(withField.value);
    
    if (amount < 0) {
        alert('Invalid transaction');
        withField.value = '';
        return;
    }
    

    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceAmount = parseFloat(currentBalance);
    const newBalanceTotal = currentBalanceAmount - amount;

    if(newBalanceTotal<0){
        alert('Insufficinet balance!!');
        withField.value = '';
        return;
    }

    const previouswith = document.getElementById('current-with').innerText;
    const prevWithAmount = parseFloat(previouswith);
    const newwithTotal = prevWithAmount + amount;

    
    
    withField.value = '';
    document.getElementById('current-with').innerText = newwithTotal;
    document.getElementById('current-balance').innerText = newBalanceTotal;
    addTransactionData('Withdraw',amount)
})