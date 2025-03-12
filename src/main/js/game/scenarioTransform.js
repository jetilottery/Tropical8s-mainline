define((require) => {
  const prizeData = require('skbJet/componentManchester/standardIW/prizeData');

  return function scenarioTransform(scenarioString) {
    // split the string into the three components; winning, instant and player numbers
    const [multiplierInfo, gridInfo] = scenarioString.split('|');

    // grid numbers are just a comma seperated list of numbers
    const playerNumbers = gridInfo.split(',').map(int => parseInt(int, 10));

    // the multiplier info is a letter and a number, delimited by a comma
    const multiplier = multiplierInfo.split(',')[0];
    const multiplierValue = prizeData.prizeTable[multiplierInfo.split(',')[1]];

    return {
      playerNumbers,
      multiplier,
      multiplierValue
    };
  };
});
