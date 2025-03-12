define({
  _BASE_APP: {
    children: ['background', 'logo', 'winUpTo', 'numberGrid', 'prizeBonus'],
  },

  /*
   * BACKGROUND
   */
  background: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_background',
    },
    portrait: {
      texture: 'portrait_background',
    },
  },

  /*
   * LOGO
   */
  logo: {
    type: 'sprite',
    anchor: 0.5,
    landscape: {
      x: 217.5,
      y: 199.5,
      texture: 'landscape_gameLogo',
    },
    portrait: {
      x: 405,
      y: 99,
      texture: 'portrait_gameLogo',
    },
  },

  /*
   * WIN UP TO
   */
  winUpTo: {
    type: 'container',
    children: ['winUpToIn', 'winUpToOut'],
    landscape: { x: 327, y: 256 },
    portrait: { x: 405, y: 209 },
  },
  winUpToIn: {
    type: 'container',
    children: ['winUpToInText'],
  },
  winUpToInText: {
    type: 'text',
    style: 'winUpTo',
    string: 'winUpTo',
    anchor: 0.5,
    maxWidth: 400,
  },
  winUpToOut: {
    type: 'container',
    children: ['winUpToOutText'],
  },
  winUpToOutText: {
    type: 'text',
    style: 'winUpTo',
    string: 'winUpTo',
    anchor: 0.5,
    maxWidth: 400,
  },

  /*
   *
   */
  numberGrid: {
    type: 'container',
    children: ['gridBackground', 'playerNumber1', 'playerNumber2', 'playerNumber3', 'playerNumber4', 'playerNumber5', 'playerNumber6', 'playerNumber7', 'playerNumber8', 'playerNumber9'],
    landscape: {
      x: 970,
      y: 350     
    },
    portrait: {
      x: 405,
      y: 99
    },
  },

  gridBackground: {
    type: 'sprite',
    anchor: 0.5,
    texture: 'gridBG',
    scale: 0.7
  },

  playerNumber1: {
    type: 'container',
    x:-200,
    y:-200
  },
  playerNumber2: {
    type: 'container',
    x:0,
    y:-200
  },
  playerNumber3: {
    type: 'container',
    x:200,
    y:-200
  },
  playerNumber4: {
    type: 'container',
    x:-200,
    y:0
  },
  playerNumber5: {
    type: 'container',
    x:0,
    y:0
  },
  playerNumber6: {
    type: 'container',
    x:200,
    y:0
  },
  playerNumber7: {
    type: 'container',
    x:-200,
    y:200
  },
  playerNumber8: {
    type: 'container',
    x:0,
    y:200
  },
  playerNumber9: {
    type: 'container',
    x:200,
    y:200
  },

  prizeBonus: {
    type: 'container'
  },

  /*
   * How To Play
   */
  howToPlayOverlay: {
    type: 'sprite',
    landscape: {
      texture: 'landscape_background',
    },
    portrait: {
      texture: 'portrait_background',
    },
  },
  howToPlayContainer: {
    type: 'container',
    children: [
      'howToPlayOverlay',
      'howToPlayBackground',
      'howToPlayPages',
      'howToPlayTitle',
      'versionText',
      'audioButtonContainer',
      'howToPlayPrevious',
      'howToPlayNext',
      'howToPlayClose',
      'howToPlayIndicators',
    ],
  },
  howToPlayPages: {
    type: 'container',
    children: ['howToPlayPage1'],
  },
  howToPlayPage1: {
    type: 'text',
    string: 'page1',
    style: 'howToPlayText',
    fontSize: 30,
    wordWrap: true,
    anchor: 0.5,
    align: 'center',
    landscape: { x: 720, y: 415, wordWrapWidth: 1100 },
    portrait: { x: 405, y: 550, wordWrapWidth: 560 },
  },
  howToPlayBackground: {
    type: 'sprite',
    anchor: { x: 0.5 },
    y: 98,
    landscape: {
      x: 720,
      texture: 'landscape_tutorialBackground',
    },
    portrait: {
      x: 405,
      texture: 'portrait_tutorialBackground',
    },
  },
  howToPlayTitle: {
    type: 'text',
    string: 'howToPlay',
    style: 'howToPlayTitle',
    anchor: 0.5,
    y: 178,
    landscape: { x: 720 },
    portrait: { x: 405 },
  },
  versionText: {
    type: 'text',
    style: 'versionText',
    x: 35,
    y: 120,
    alpha: 0.5,
  },
  howToPlayClose: {
    type: 'button',
    string: 'button_ok',
    landscape: { x: 720, y: 678 },
    portrait: { x: 405, y: 957 },
    textures: {
      enabled: 'tutorialOKButtonEnabled',
      over: 'tutorialOKButtonOver',
      pressed: 'tutorialOKButtonPressed',
    },
    style: {
      enabled: 'tutorialOKButtonEnabled',
      over: 'tutorialOKButtonOver',
      pressed: 'tutorialOKButtonPressed',
    },
  },
  howToPlayPrevious: {
    type: 'button',
    landscape: { x: 72, y: 418 },
    portrait: { x: 64, y: 568 },
    textures: {
      enabled: 'tutorialLeftButtonEnabled',
      disabled: 'tutorialLeftButtonDisabled',
      over: 'tutorialLeftButtonOver',
      pressed: 'tutorialLeftButtonPressed',
    },
  },
  howToPlayNext: {
    type: 'button',
    landscape: { x: 1368, y: 418 },
    portrait: { x: 746, y: 568 },
    textures: {
      enabled: 'tutorialRightButtonEnabled',
      disabled: 'tutorialRightButtonDisabled',
      over: 'tutorialRightButtonOver',
      pressed: 'tutorialRightButtonPressed',
    },
  },

  howToPlayIndicators: {
    type: 'container',
    children: ['howToPlayIndicatorActive', 'howToPlayIndicatorInactive'],
    landscape: { x: 720, y: 610 },
    portrait: { x: 405, y: 885 },
  },
  howToPlayIndicatorActive: {
    type: 'sprite',
    texture: 'tutorialPageIndicatorActive',
  },
  howToPlayIndicatorInactive: {
    type: 'sprite',
    texture: 'tutorialPageIndicatorInactive',
  },

  audioButtonContainer: {
    type: 'container',
    landscape: { x: 79, y: 675 },
    portrait: { x: 71, y: 957 },
  },
});
