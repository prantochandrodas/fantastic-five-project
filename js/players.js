
// get players namesby id function 
function getPlayersName(name) {
     const playerName = document.getElementById(name).innerText;
     return playerName;
}
// end

//get the players name and set it on the selected five function 
function setPlayerName(playerName) {
     const players = document.getElementById('players');
     const playersChildCount = players.childElementCount;
     console.log(playersChildCount);
     if (playersChildCount > 4) {
          
          alert('Five Player Selected');
          makeDisable();
     }
     else {

          const creatPlayerList = document.createElement('li');
          creatPlayerList.innerText = playerName;
          players.append(creatPlayerList);

     }

}
// end 

// make button disable onclick it 
function makeDisable(disable) {
          const btnDisable = document.getElementById(disable);
          btnDisable.setAttribute('disabled', true);
          btnDisable.style.backgroundColor='gray';
}
// end 

// add event listner on setplyer button 1  and call the functions 
document.getElementById('setPlayer1').addEventListener('click', function () {
     const playerName = getPlayersName('player1');

     setPlayerName(playerName);
     makeDisable('setPlayer1');
});


//add event listner on setplyer button 2  and call the functions  
document.getElementById('setPlayer2').addEventListener('click',function(){
     const playerName = getPlayersName('player2');

     setPlayerName(playerName);
     makeDisable('setPlayer2');
});

//add event listner on setplyer button 3  and call the functions 
document.getElementById('setPlayer3').addEventListener('click',function(){
     const playerName = getPlayersName('player3');

     setPlayerName(playerName);
     makeDisable('setPlayer3');
});

//add event listner on setplyer button 4  and call the functions 
document.getElementById('setPlayer4').addEventListener('click',function(){
     const playerName = getPlayersName('player4');

     setPlayerName(playerName);
     makeDisable('setPlayer4');
});


//add event listner on setplyer button 5  and call the functions 
document.getElementById('setPlayer5').addEventListener('click',function(){
     const playerName = getPlayersName('player5');

     setPlayerName(playerName);
     makeDisable('setPlayer5');
});


//add event listner on setplyer button 6  and call the functions 
document.getElementById('setPlayer6').addEventListener('click',function(){
     const playerName = getPlayersName('player6');

     setPlayerName(playerName);
     makeDisable('setPlayer6');
});


