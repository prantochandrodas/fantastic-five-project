document.getElementById('btn-per-player-cost').addEventListener('click',function(){
//    get pre-player-value and make that in integer
    const perPlayerFild =document.getElementById('per-player-fild').value;
    const perPlayerIntValue = parseInt(perPlayerFild);

//make validation of input fild
if(perPlayerFild == ""){
    // validation for blank input field
    alert('Please fil up the pre Player fild');
}
else{
    // validation for is number
    if(isNaN(perPlayerIntValue)){
        alert('Please Put Number In The Input Fild')
    }else{
        // calculate player cost and set that value 
        const allFivePlayerCost = perPlayerIntValue * 5; 
        const playerExpensesElement = document.getElementById('player-expenses');
        playerExpensesElement.innerText=allFivePlayerCost;
    }
}
    
  
    
   
});