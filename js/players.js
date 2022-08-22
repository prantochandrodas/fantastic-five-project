
// function getPlayerBtnById(name){
//   const newPlayerName =  document.getElementById(name).innerText;


//   const players = document.getElementById('players');
//   const playersChildCount = players.childElementCount;
//   console.log(playersChildCount);
//    if(playersChildCount>4){

//         alert('hi')
//    }
//    else{
//     const creatPlayerList = document.createElement('ul');
//     creatPlayerList.innerText= newPlayerName;
//     players.append(creatPlayerList);

//    }

// }
function getPlayersName(name) {
     const playerName = document.getElementById(name).innerText;
     return playerName;
}
function setPlayerName(playerName) {
     const players = document.getElementById('players');
     const playersChildCount = players.childElementCount;
     console.log(playersChildCount);
     if (playersChildCount > 4) {

          alert('hi')
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

