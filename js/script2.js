// work with deposit amount
document.getElementById('depositBtn').addEventListener('click', function() {
    const depositAmount = document.getElementById('depositInput').value;
    const depositAmountNumber = parseFloat(depositAmount);
    if(depositAmountNumber>0){
    const balance = document.getElementById('balanceAmount').innerText;
    const balanceAmountNumber = parseFloat(balance);
    const totalBalance = depositAmountNumber + balanceAmountNumber;
    document.getElementById('balanceAmount').innerText = totalBalance;
    const previousDeposit = document.getElementById('depositAmount')
    const previousDepositNumber = parseFloat(previousDeposit.innerText);
    const newDepositAmount = previousDepositNumber + depositAmountNumber;
    previousDeposit.innerText = newDepositAmount;
    document.getElementById('depositInput').value = ''
    }
    else{
        alert('Please Inter the deposit amount')
    }
    
})

// work With Withdraw amount
document.getElementById('withdrawBtn').addEventListener('click', function() {
    const withdrawAmount = document.getElementById('withdrawInput').value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    if(withdrawAmountNumber>0){
        const balance = document.getElementById('balanceAmount').innerText;
    const balanceAmountNumber = parseFloat(balance);
    const newBalance = balanceAmountNumber - withdrawAmountNumber;
    if(newBalance>=0){
    document.getElementById('balanceAmount').innerText = newBalance;
    const previousWithdraw = document.getElementById('withdrawAmount')
    const previousWithdrawNumber = parseFloat(previousWithdraw.innerText);
    const newWithdrawAmount = previousWithdrawNumber + withdrawAmountNumber;
    previousWithdraw.innerText = newWithdrawAmount;
    document.getElementById('withdrawInput').value = ''
    }else{
        alert("You Bank Balance is lower than withdraw Amount")
    }
    
    }
    else{
        alert('Please Inter the withdraw amount')
    }
})