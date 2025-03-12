define(require => {
  //const Timeline = require('com/gsap/TimelineLite');
  const gameConfig = require('game/custom/config');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  //const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
  //const resources = require('skbJet/component/pixiResourceLoader/pixiResourceLoader');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  //const prizeData = require('skbJet/componentManchester/standardIW/prizeData');
  const GridSquare = require('game/components/GridSquare');
  require('com/gsap/plugins/PixiPlugin');

  require('com/gsap/TweenMax');
  require('com/gsap/easing/EasePack');

  const Tween = window.TweenMax;

  let gridSquares = [];
  let idleTween;

  function init(){
    idleTween = Tween.to({}, randomIdleDuration(), {
      onComplete: promptIdle,
      paused: true,
    });

     gridSquares = [
          GridSquare.fromContainer(displayList.playerNumber1),
          GridSquare.fromContainer(displayList.playerNumber2),
          GridSquare.fromContainer(displayList.playerNumber3),
          GridSquare.fromContainer(displayList.playerNumber4),
          GridSquare.fromContainer(displayList.playerNumber5),
          GridSquare.fromContainer(displayList.playerNumber6),
          GridSquare.fromContainer(displayList.playerNumber7),
          GridSquare.fromContainer(displayList.playerNumber8),
          GridSquare.fromContainer(displayList.playerNumber9),
      ];

      console.log(gridSquares);
      console.log(displayList);
      console.log(msgBus);
  }

  function randomIdleDuration() {
    return (
      gameConfig.playerNumberIdleInterval -
      gameConfig.idleIntervalVariation +
      Math.random() * gameConfig.idleIntervalVariation * 2
    );
  }

  function promptIdle() {
    // Check if there are any remaining unrevealed squares
    const unrevealed = gridSquares.filter(square => !square.revealed);
    if (unrevealed.length === 0) {
      return;
    }

    // Pick one at random to animate
    unrevealed[Math.floor(unrevealed.length * Math.random())].prompt();

    // Restart the idle timer tween
    idleTween.duration(randomIdleDuration());
    resetIdle(0);
  }

  function resetIdle(inVal){
    idleTween.play(inVal);
  }

  function enable() {
    // Start the idle timer tween
    resetIdle(0);

    // Return an array of promises for each card's lifecycle
    return gridSquares.map(async square => {
      // Enable the card and wait for it to be revealed (manually or automatically)
      await square.enable();
      // HITGA-75 - The idle animations should not animate if the game has been interacted with within the last 5 seconds or so.
      // Restart the idle timer tween everywhere
      msgBus.publish('Game.ResetIdle', 0);
      // Play the Player Number reveal audio
      //audio.playSequential('playerNumber');
      // Get the next Winning Number
      //const nextData = numbers.shift();
      //square.populate(nextData);
      // Wait for the uncover animation (if animated)
      await square.uncover();
      //stop idle tween if we've revealed all of them
      stopIdleIfAllRevealed();
      /*msgBus.publish('Game.PlayerNumber', nextData[0]);
      // If the revealed number matches a revealed Winning Number then mark the match
      // But with this game we also need to consider an x2 win or a Win All  
      if (!card.matched){
        if (numberState.winning.includes(nextData[0])){
          //then it's a number match, woo
          card.match();
          audio.playSequential('match');
          meterData.win += card.value;
          await card.presentWin();
        }        
      }*/
    });
  }

  function stopIdleIfAllRevealed(){
    const revealed = gridSquares.filter(square => square.revealed);
    if (revealed.length === gridSquares.length){
      // Stop the idle timer tween
      idleTween.pause(0);
    }
  }

  function reset(){
    console.log('reset');
  }

  function populate(inArr){
    for (var i = 0; i < gridSquares.length; i++){
      gridSquares[i].setState(inArr[i]);
    }
  }

  return {
    init,
    enable,
    reset,
    populate
  };
});
