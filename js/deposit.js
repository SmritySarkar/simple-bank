// step 1 : Add event Handler to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step 2 : Get the deposit amount from the deposit field 
    const depositField = document.getElementById('deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    if(isNaN(newDepositAmount)){
        alert('Please enter a number!');
        depositField.value = '';
        return;
    }
    // Step 3 : Get the current deposit amount total
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal =parseFloat(previousDepositTotalString);
    // Step 4 : Add numbers to set the total deposit amount
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    // Step 5: Get current balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // Step 6 : Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // Step  : Clear the deposit field
    depositField.value = '';
})