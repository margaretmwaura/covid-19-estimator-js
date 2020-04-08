const calculator = {
  getInfectionsByRequestedTime(currentlyInfected, days) {
    const power = Math.floor(days / 3);
    const powerValue = 2 ** power;
    return power * powerValue;
  }
};

export default calculator;
