const calculator = {
  getInfectionsByRequestedTime(currentlyInfected, days) {
    const power = Math.floor(days / 3);
    const powerValue = 2 ** power;
    return power * powerValue;
  },
  getAvailableHospitalBeds(availableBeds, patients) {
    const remainingBeds = Math.floor(availableBeds / 0.35);
    if (remainingBeds > patients) {
      return remainingBeds;
    }
    return (remainingBeds - patients);
  }
};

export default calculator;
