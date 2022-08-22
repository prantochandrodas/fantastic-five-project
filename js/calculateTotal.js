// get input fild value useing function 
function getFildValue(field) {
    const getFieldValue = document.getElementById(field);
    const getFieldStringValue = getFieldValue.value;
    const getFieldIntValue = parseInt(getFieldStringValue);
    return getFieldIntValue;
}

// add eventListner on calculate button and call all the function in it 
document.getElementById('btn-total').addEventListener('click', function () {
//    call get fildvalue function and get value 
    const getManageFieldValue = getFildValue('manager-field');
    const getCoachFieldValue = getFildValue('coach-field');
//get player expenses form player expenses 
    const allFivePlayerCost = document.getElementById('player-expenses');
    const allPlayerStringCost = allFivePlayerCost.innerText
    const allPlayerCost = parseInt(allPlayerStringCost);

// validation for blank player total cost 
    if (allPlayerStringCost == "") {
        alert('Please Calculate The Player Total First ');
    }
    else {
        // validation for manager coach input value black
        if (getManageFieldValue == "" || getCoachFieldValue == "") {
            alert('Plase Fillup The Fild');
        } 
        else {
              // validation for isnumber of  coach,manager and playertotal
            if (isNaN(getManageFieldValue) || isNaN(getCoachFieldValue) || isNaN(allPlayerCost)) {
                alert('please enter number in the input fild');
            } else {
                // calculate final total 
                const total = getManageFieldValue + getCoachFieldValue + allPlayerCost;
                const totalElement = document.getElementById('total');
                totalElement.innerText = total;

            }

        }
    }


});