define(require => {
  const PIXI = require('com/pixijs/pixi');
  const Pressable = require('skbJet/componentManchester/standardIW/components/pressable');
  //const textStyles = require('skbJet/componentManchester/standardIW/textStyles');
  const autoPlay = require('skbJet/componentManchester/standardIW/autoPlay');
  //const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  //const audio = require('skbJet/componentManchester/standardIW/audio');
  //const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
  const utils = require('skbJet/componentManchester/standardIW/layout/utils');
  require('com/gsap/TweenMax');
  require('com/gsap/easing/EasePack');

  const Tween = window.TweenMax;

  class GridSquare extends Pressable {
    constructor() {
      super();  

      this.WIDTH = 115;
      this.HEIGHT = 100; 

      this.revealContainer = new PIXI.Container();
      this.resultContainer = new PIXI.Container();

      //we'll need quite a few things here
      //the dollar spin animation
      //and since we're using sprite sheets properly, we can use animations for the numbers 1-9
      //create reveal and idle anims
      this.revealAnim = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.sparkleAnim = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.oneReveal = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.twoReveal = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.threeReveal = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.fourReveal = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.fiveReveal = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.sixReveal = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.sevenReveal = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.eightReveal = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.nineReveal = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);

      this.one = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.two = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.three = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.four = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.five = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.six = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.seven = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.eight = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
      this.nine = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);

      const revealAnimFrames = utils.findFrameSequence('dollarAnim');
      this.revealAnim.textures = revealAnimFrames.map(PIXI.Texture.from);
      this.revealAnim.animationSpeed = 0.5;
      this.revealAnim.loop = false;
      this.revealAnim.anchor.set(0.5);

      const oneFrames = utils.findFrameSequence('one');
      this.one.textures = oneFrames.map(PIXI.Texture.from);
      this.one.animationSpeed = 0.5;
      this.one.loop = false;
      this.one.anchor.set(0.5);

      const twoFrames = utils.findFrameSequence('two');
      this.two.textures = twoFrames.map(PIXI.Texture.from);
      this.two.animationSpeed = 0.5;
      this.two.loop = false;
      this.two.anchor.set(0.5);

      const threeFrames = utils.findFrameSequence('three');
      this.three.textures = threeFrames.map(PIXI.Texture.from);
      this.three.animationSpeed = 0.5;
      this.three.loop = false;
      this.three.anchor.set(0.5);

      const fourFrames = utils.findFrameSequence('four');
      this.four.textures = fourFrames.map(PIXI.Texture.from);
      this.four.animationSpeed = 0.5;
      this.four.loop = false;
      this.four.anchor.set(0.5);

      const fiveFrames = utils.findFrameSequence('five');
      this.five.textures = fiveFrames.map(PIXI.Texture.from);
      this.five.animationSpeed = 0.5;
      this.five.loop = false;
      this.five.anchor.set(0.5);

      const sixFrames = utils.findFrameSequence('six');
      this.six.textures = sixFrames.map(PIXI.Texture.from);
      this.six.animationSpeed = 0.5;
      this.six.loop = false;
      this.six.anchor.set(0.5);

      const sevenFrames = utils.findFrameSequence('seven');
      this.seven.textures = sevenFrames.map(PIXI.Texture.from);
      this.seven.animationSpeed = 0.5;
      this.seven.loop = false;
      this.seven.anchor.set(0.5);

      const eightFrames = utils.findFrameSequence('eight');
      this.eight.textures = eightFrames.map(PIXI.Texture.from);
      this.eight.animationSpeed = 0.5;
      this.eight.loop = false;
      this.eight.anchor.set(0.5);

      const nineFrames = utils.findFrameSequence('nine');
      this.nine.textures = nineFrames.map(PIXI.Texture.from);
      this.nine.animationSpeed = 0.5;
      this.nine.loop = false;
      this.nine.anchor.set(0.5);

      const oneRevealFrames = utils.findFrameSequence('oneReveal');
      this.oneReveal.textures = oneRevealFrames.map(PIXI.Texture.from);
      this.oneReveal.animationSpeed = 0.5;
      this.oneReveal.loop = false;
      this.oneReveal.anchor.set(0.5);

      const twoRevealFrames = utils.findFrameSequence('twoReveal');
      this.twoReveal.textures = twoRevealFrames.map(PIXI.Texture.from);
      this.twoReveal.animationSpeed = 0.5;
      this.twoReveal.loop = false;
      this.twoReveal.anchor.set(0.5);

      const threeRevealFrames = utils.findFrameSequence('threeReveal');
      this.threeReveal.textures = threeRevealFrames.map(PIXI.Texture.from);
      this.threeReveal.animationSpeed = 0.5;
      this.threeReveal.loop = false;
      this.threeReveal.anchor.set(0.5);

      const fourRevealFrames = utils.findFrameSequence('fourReveal');
      this.fourReveal.textures = fourRevealFrames.map(PIXI.Texture.from);
      this.fourReveal.animationSpeed = 0.5;
      this.fourReveal.loop = false;
      this.fourReveal.anchor.set(0.5);

      const fiveRevealFrames = utils.findFrameSequence('fiveReveal');
      this.fiveReveal.textures = fiveRevealFrames.map(PIXI.Texture.from);
      this.fiveReveal.animationSpeed = 0.5;
      this.fiveReveal.loop = false;
      this.fiveReveal.anchor.set(0.5);

      const sixRevealFrames = utils.findFrameSequence('sixReveal');
      this.sixReveal.textures = sixRevealFrames.map(PIXI.Texture.from);
      this.sixReveal.animationSpeed = 0.5;
      this.sixReveal.loop = false;
      this.sixReveal.anchor.set(0.5);

      const sevenRevealFrames = utils.findFrameSequence('sevenReveal');
      this.sevenReveal.textures = sevenRevealFrames.map(PIXI.Texture.from);
      this.sevenReveal.animationSpeed = 0.5;
      this.sevenReveal.loop = false;
      this.sevenReveal.anchor.set(0.5);

      const eightRevealFrames = utils.findFrameSequence('eightReveal');
      this.eightReveal.textures = eightRevealFrames.map(PIXI.Texture.from);
      this.eightReveal.animationSpeed = 0.5;
      this.eightReveal.loop = false;
      this.eightReveal.anchor.set(0.5);

      const nineRevealFrames = utils.findFrameSequence('nineReveal');
      this.nineReveal.textures = nineRevealFrames.map(PIXI.Texture.from);
      this.nineReveal.animationSpeed = 0.5;
      this.nineReveal.loop = false;
      this.nineReveal.anchor.set(0.5);

      const sparkleFrames = utils.findFrameSequence('gridSparkle');
      this.sparkleAnim.textures = sparkleFrames.map(PIXI.Texture.from);
      this.sparkleAnim.animationSpeed = 0.5;
      this.sparkleAnim.loop = false;
      this.sparkleAnim.visible = false;
      this.sparkleAnim.anchor.set(0.5);

      //add everything
      this.resultContainer.addChild(this.one, this.two, this.three, this.four, this.five, this.six, this.seven, this.eight, this.nine);
      this.one.visible = this.two.visible = this.three.visible = this.four.visible = this.five.visible = this.six.visible = this.seven.visible = this.eight.visible = this.nine.visible = false;
      this.resultContainer.addChild(this.oneReveal, this.twoReveal, this.threeReveal, this.fourReveal, this.fiveReveal, this.sixReveal, this.sevenReveal, this.eightReveal, this.nineReveal);
      this.oneReveal.visible = this.twoReveal.visible = this.threeReveal.visible = this.fourReveal.visible = this.fiveReveal.visible = this.sixReveal.visible = this.sevenReveal.visible = this.eightReveal.visible = this.nineReveal.visible = false;
      this.revealContainer.addChild(this.revealAnim, this.sparkleAnim);

      this.addChild(this.resultContainer, this.revealContainer);

      //hide the resultContainer by default
      this.resultContainer.visible = false;
      //show the revealContainer by default
      this.revealContainer.visible = true;

      this.state = 0;

      // State
      this.revealed = false;
      this.interactive = false;
      this.enabled = false;

      // Interactivity
      this.hitArea = new PIXI.Rectangle(
        this.WIDTH / -2,
        this.HEIGHT / -2,
        this.WIDTH,
        this.HEIGHT
      );

      //event listener
      this.on('press', () => {
        if (!autoPlay.enabled) {
          this.reveal();
        }
      });
    }

    enable() {
      return new Promise(resolve => {
        this.reveal = resolve;
        this.enabled = true;
      }).then(() => {
        this.enabled = false;
      });
    }   

    hideAll() {

    }

    playReveal() {
      switch (this.state){
        case 1:
          this.oneReveal.visible = true;
          this.oneReveal.gotoAndPlay(1);
          break;
        case 2:
          this.twoReveal.visible = true;
          this.twoReveal.gotoAndPlay(1);
          break;
        case 3:
          this.threeReveal.visible = true;
          this.threeReveal.gotoAndPlay(1);
          break;
        case 4:
          this.fourReveal.visible = true;
          this.fourReveal.gotoAndPlay(1);
          break;
        case 5:
          this.fiveReveal.visible = true;
          this.fiveReveal.gotoAndPlay(1);
          break;
        case 6:
          this.sixReveal.visible = true;
          this.sixReveal.gotoAndPlay(1);
          break;
        case 7:
          this.sevenReveal.visible = true;
          this.sevenReveal.gotoAndPlay(1);
          break;
        case 8:
          this.eightReveal.visible = true;
          this.eightReveal.gotoAndPlay(1);
          break;
        case 9:
          this.nineReveal.visible = true;
          this.nineReveal.gotoAndPlay(1);
          break;
        default:
          //that shouldn't have happened
          break;
      }
    }

    setState(inVal) {
      this.hideAll();
      this.state = inVal;      
    }

    async uncover() {
      if (this.revealAnim.textures && this.revealAnim.textures.length > 1) {
        await new Promise(resolve => {
          // kill all tweens first
          Tween.killTweensOf(this.scale);
          this.scale.x = this.scale.y = 1;

          //HITGA-104 - HITGA_COM:Game stuck after resize window or rotate device to anther orientation
          //the issue is that on a resize the revealAnims are snapping back to the start, which means
          //they will never resolve - the answer is to work out what frame we were on before
          //and then when the frame changes, work out whether the current frame is greater than the previous one
          //if the current frame is greater than the previous frame, fine, we're definitely playing the animation
          //if the current frame is now less than the previous frame, we have a problem
          this.revealAnim.onFrameChange = () => {
            //check to see if we have already started to play this one
            if (this.revealAnim.playStarted){
              //so the frame has changed
              if (this.revealAnim.currentFrame > this.revealAnim.previousFrame){
                this.revealAnim.previousFrame = this.revealAnim.currentFrame;
              }else{
                this.revealAnim.gotoAndPlay(this.revealAnim.previousFrame);
              }
            }            
          };

          // Wait for the animation to complete before resolving
          this.revealAnim.onComplete = () => {
            //show the resultContainer
            this.revealContainer.visible = false;
            this.revealAnim.visible = false;
            this.revealed = true;
            this.revealAnim.playStarted = false;
            this.revealAnim.previousFrame = 0;
            resolve();
          };

          // Disable interactivity to prevent re-reveal, then switch to the animation
          this.enabled = false;
          //this.cover.visible = false;
          this.revealAnim.previousFrame = 0;
          this.revealAnim.playStarted = true;
          this.revealAnim.gotoAndPlay(0);
          this.playReveal();

          //show the resultContainer
          this.resultContainer.visible = true;
          //now we need to play the correct reveal anim
          //this shouldn't be too difficult
        });
      } else {
        // Otherwise just a swap from the cover to the resultsContainer
        this.revealAnim.visible = false;
        this.revealed = true;
      }
    }

    reset() {
      //add everything
      this.one.visible = this.two.visible = this.three.visible = this.four.visible = this.five.visible = this.six.visible = this.seven.visible = this.eight.visible = this.nine.visible = false;
      this.oneReveal.visible = this.twoReveal.visible = this.threeReveal.visible = this.fourReveal.visible = this.fiveReveal.visible = this.sixReveal.visible = this.sevenReveal.visible = this.eightReveal.visible = this.nineReveal.visible = false;
      //hide the resultContainer by default
      this.resultContainer.visible = false;
      //show the revealContainer by default
      this.revealContainer.visible = true;
      // State
      this.revealed = false;
      this.interactive = false;
      this.enabled = false;
    }

    prompt() {
      console.log('prompt');
    }

    presentWin() {
      /*return new Promise(resolve => Tween.fromTo(
        this.resultContainer.scale,
        0.75,
        {
          x: 0.666,
          y: 0.666,
        },
        {
          x: 1,
          y: 1,
          ease: window.Elastic.easeOut.config(
            gameConfig.matchAnimAmplitude,
            gameConfig.matchAnimPeriod
          ),
          onComplete: resolve,
        }
      ));*/
    }

    static fromContainer(container) {
      const square = new GridSquare();
      container.addChild(square);
      return square;
    }
  }

  return GridSquare;
});