// get input value
function getInputElementValue(inputId){
    const inputElement = document.getElementById(inputId);
    const inputElementString = inputElement.value;
    const inputValue = parseFloat(inputElementString);
    return inputValue;
}
document.getElementById('initial-calculation').addEventListener('click', function(){
    const totalIncome = getInputElementValue('total-income-id');
    const food = getInputElementValue('food-id');
    const rent = getInputElementValue('rent-id');
    const cloths = getInputElementValue('cloths-id');
    if(isNaN(totalIncome) || isNaN(food) || isNaN(rent) || isNaN(cloths)){
        alert("Invalid Input");
        return;
    }
    const totalExpense = food + rent + cloths;
    document.getElementById('total-expense-id').innerText = totalExpense;
    
    const balance = totalIncome - totalExpense;
    document.getElementById('balance-id').innerText = balance;
})

// savings calculation
document.getElementById('save-btn').addEventListener('click', function(){
    const totalIncome = getInputElementValue('total-income-id');
    const food = getInputElementValue('food-id');
    const rent = getInputElementValue('rent-id');
    const cloths = getInputElementValue('cloths-id');
    const save = getInputElementValue('saving-id');
    if(isNaN(save)){
        alert("Invalid Input");
        return;
    }
    
    const totalExpense = food + rent + cloths;
    document.getElementById('total-expense-id').innerText = totalExpense;
    
    const balance = totalIncome - totalExpense;
    
    const totalSave = ((save*balance)/100);
    document.getElementById('saving-ammount').innerText = totalSave;
    
    const remainingBalance = balance - totalSave;
    document.getElementById('remaining-balance').innerText = remainingBalance;
})