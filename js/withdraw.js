// step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    //step 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);

    //step 4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    //step 5
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step 6
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //console.log(previousBalanceTotal);

    //step 7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    //step 8
    withdrawField.value = '';




})