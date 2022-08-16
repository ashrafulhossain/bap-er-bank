document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('deposit btn clicked');
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //console.log(typeof newDepositAmount);

    // console.log(depositAmount);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //console.log(typeof previousDepositTotal);


    //console.log(depositTotal);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;


    depositTotalElement.innerText = currentDepositTotal;

    //get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;








    depositField.value = '';


})