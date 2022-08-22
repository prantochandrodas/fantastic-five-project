

function getPlayersName(name) {
     const playerName = document.getElementById(name).innerText;
     return playerName;
}
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
function makeDisable(disable) {
          const btnDisable = document.getElementById(disable);
          btnDisable.setAttribute('disabled', true);
          btnDisable.style.backgroundColor='gray';
}
document.getElementById('setPlayer1').addEventListener('click', function () {
     const playerName = getPlayersName('player1');

     setPlayerName(playerName);
     makeDisable('setPlayer1');
});
document.getElementById('setPlayer2').addEventListener('click',function(){
     const playerName = getPlayersName('player2');

     setPlayerName(playerName);
     makeDisable('setPlayer2');
});
document.getElementById('setPlayer3').addEventListener('click',function(){
     const playerName = getPlayersName('player3');

     setPlayerName(playerName);
     makeDisable('setPlayer3');
});
document.getElementById('setPlayer4').addEventListener('click',function(){
     const playerName = getPlayersName('player4');

     setPlayerName(playerName);
     makeDisable('setPlayer4');
});
document.getElementById('setPlayer5').addEventListener('click',function(){
     const playerName = getPlayersName('player5');

     setPlayerName(playerName);
     makeDisable('setPlayer5');
});
document.getElementById('setPlayer6').addEventListener('click',function(){
     const playerName = getPlayersName('player6');

     setPlayerName(playerName);
     makeDisable('setPlayer6');
});


