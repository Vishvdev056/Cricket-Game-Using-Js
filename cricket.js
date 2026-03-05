  let scoreStr = localStorage.getItem('results');
  let score = {
  win:0,
  lost:0,
  tie:0
};


resetScore(scoreStr);

document.querySelector('#score').innerText = score.displayScore();
  
function resetScore(scoreStr){
  score = JSON.parse(scoreStr) || {
    win:0,
    lost:0,
    tie:0
  };

  score.displayScore = function(){
    return `You Win ${score.win}, You Lost ${score.lost}, Match Tie ${score.tie}`;
  };
}
  function generateComputerChoice(){
       let randomNumber = Math.random() * 3;
  
        
  if (randomNumber < 1) {
    return 'Bat';
  } 
  else if (randomNumber < 2) {
    return 'Ball';
  } 
  else {
    return 'Stump';
  }
  
  }

  function results(userMove,computerMove){
    if(userMove==='Bat'){
       if (computerMove === 'Ball') {
           score.win++;
          return 'You Win';
  } 
  else if (computerMove === 'Bat') {
           score.tie++;
          return 'Match is Tie';
  } 
  else if (computerMove === 'Stump'){
          score.lost++; 
          return 'Out';
  }
    
  }else if(userMove==='Ball'){
        if (computerMove === 'Ball') {
          score.tie++;
          return 'Match is Tie';
  } 
  else if (computerMove === 'Bat') {
          score.lost++;
          return 'Computer Won';
  } 
  else if (computerMove === 'Stump'){
          score.win++
          return 'Out';
  }

  }else if(userMove==='Stump'){
     if (computerMove === 'Ball') {
            score.lost++;
          return 'Computer Won';
  } 
  else if (computerMove === 'Bat') {
          score.win++;
          return 'User Won';
  } 
  else if (computerMove === 'Stump'){
          score.tie++;
          return 'Match is Tie';
  }

  }
}
  function showResults(userMove,computerMove,results){
    document.querySelector('#user-Move').innerText=
    userMove!==undefined? `User choice is ${userMove}`:'';
    document.querySelector('#computer-Move').innerText=
    computerMove!==undefined?`Computer Choice is ${computerMove}`: '';
    document.querySelector('#result').innerText=
    results!==undefined?`${results}`: '';
    document.querySelector('#score').innerText=score.displayScore();
    
    localStorage.setItem('results', JSON.stringify(score))
    console.log(score)
    
  }
 
 
  // console.log(localStorage.getItem('results'))