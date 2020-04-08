const calculator = {
  getInfectionsByRequestedTime(currentlyInfected, days) {
    const power = Math.trunc(days / 3);
    const powerValue = 2 ** power;
    const results = currentlyInfected * powerValue;
    return results;
  },
  getAvailableHospitalBeds(availableBeds, patients) {
    const remainingBeds = Math.trunc(availableBeds * 0.35);
    let available = 0;
    if (remainingBeds > patients) {
      available = remainingBeds;
    }
    if (remainingBeds < patients) {
      available = remainingBeds - patients;
    }
    return Math.trunc(available);
  }
};

export default calculator;
