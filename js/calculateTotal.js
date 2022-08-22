function getFildValue(field) {
    const getFieldValue = document.getElementById(field);
    const getFieldStringValue = getFieldValue.value;
    const getFieldIntValue = parseInt(getFieldStringValue);
    return getFieldIntValue;
}
document.getElementById('btn-total').addEventListener('click', function () {
    const getManageFieldValue = getFildValue('manager-field');
    const getCoachFieldValue = getFildValue('coach-field');

    const allFivePlayerCost = document.getElementById('player-expenses');
    const allPlayerStringCost = allFivePlayerCost.innerText
    const allPlayerCost = parseInt(allPlayerStringCost);

    if (allPlayerStringCost == "") {
        alert('Please Calculate The Player Total First ');
    }
    else {
        if (getManageFieldValue == "" || getCoachFieldValue == "") {
            alert('Plase Fillup The Fild');
        } 
        else {
            if (isNaN(getManageFieldValue) || isNaN(getCoachFieldValue) || isNaN(allPlayerCost)) {
                alert('please enter number in the input fild');
            } else {
                const total = getManageFieldValue + getCoachFieldValue + allPlayerCost;
                const totalElement = document.getElementById('total');
                totalElement.innerText = total;

            }

        }
    }


});