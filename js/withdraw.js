document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmountString = withdrawField.value;
    newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // Add withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set Withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // Get Balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // Step 6 : Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    withdrawField.value = '';
})