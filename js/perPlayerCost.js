document.getElementById('btn-per-player-cost').addEventListener('click',function(){
//    get pre-player-value and make that in integer
    const perPlayerFild =document.getElementById('per-player-fild').value;
    const perPlayerIntValue = parseInt(perPlayerFild);

// calculate player cost and set that value 
    const allFivePlayerCost = perPlayerIntValue * 5; 
    const playerExpensesElement = document.getElementById('player-expenses');
    playerExpensesElement.innerText=allFivePlayerCost;
  
    
   
});