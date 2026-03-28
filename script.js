let score = JSON.parse(localStorage.getItem('score')) || {
        wins : 0,
        losses : 0,
        Ties : 0
      };

    updateScore();

  let isAutoPlaying = false;
  let intervalId;

  //const autoPlay = () => {
  // This is the arrow function of this autoPlay function
  //};
   function autoPlay(){
  if (!isAutoPlaying) {
        intervalId =  setInterval(() => {
          const playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000) ;
       isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}
 function playbutton(){
 const playbtnElement = document.querySelector('.js-auto-play');
 if (playbtnElement.innerText === 'Auto Play') {
   playbtnElement.innerHTML = 'Stop Play'; 
 }else  {
    playbtnElement.innerHTML = 'Auto Play';
 }
}

  function playGame(playerMove) {
           const computerMove = pickComputerMove();
  let result = '';
  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
        result = 'You Lose.';
      }
      if (computerMove === 'Paper') {
        result = 'You Win.';
      }
    if (computerMove === 'Scissors') {
        result = 'Tie.';
      }
  } else if (playerMove === 'Paper') {
  
    if (computerMove === 'Rock') {
      result = 'You Win.';
    }
    if (computerMove === 'Paper') {
      result = 'Tie.';
    }
  if (computerMove === 'Scissors') {
      result = 'You Lose.';
    }
  } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
      result = 'Tie.';
    }
    if (computerMove === 'Paper') {
      result = 'You Lose.';
    }
  if (computerMove === 'Scissors') {
      result = 'You Win.';
    }
  }
  if (result === 'You Win.') {
     score.wins+=1;
  }else if (result === 'You Lose.') {
    score.losses+=1;
  }else if (result === 'Tie.') {
    score.Ties +=1;
  }
  
  localStorage.setItem('score' , JSON.stringify(score)); 
  
  updateScore();
  
  document.querySelector('.js-result').
   innerHTML = result;

  document.querySelector('.js-moves').
   innerHTML = `You <img class="Your-move-im" src="images/${playerMove}-emoji.png" alt=""> <img class="Your-move-im" src="images/${computerMove}-emoji.png" alt="Scissors"> Computer`
  }
   
    function updateScore() {
       document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Lossess : ${score.losses} , Ties : ${score.Ties}`;
    }

    function pickComputerMove() {
        const randomNumber = Math.random();
          let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove =  'Rock'
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3 ) {
          computerMove = 'Paper'
        } else if (randomNumber >= 2 / 3 && randomNumber < 1 ){
          computerMove = 'Scissors'
        }

        return computerMove;
    }