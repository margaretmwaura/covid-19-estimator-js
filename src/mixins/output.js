import calculator from './calculator';

const output = {

  getOutput(data, percentage) {
    const time = data.timeToElapse;
    const typeOfTime = data.periodType;
    let days = 0;
    if (typeOfTime === 'days') {
      days = time;
    }
    if (typeOfTime === 'weeks') {
      days = time * 7;
    }
    if (typeOfTime === 'months') {
      days = time * 30;
    }

    const currentlyInfected = data.reportedCases * percentage;

    const infectionsByRequestedTime = calculator.getInfectionsByRequestedTime(
      currentlyInfected, days
    );
    const severeCasesByRequestedTime = infectionsByRequestedTime * 0.15;
    const hospitalBedsByRequestedTime = calculator.getAvailableHospitalBeds(
      data.totalHospitalBeds, severeCasesByRequestedTime
    );
    const casesForICUByRequestedTime = Math.floor(infectionsByRequestedTime / 0.05);
    const casesForVentilatorsByRequestedTime = Math.floor(infectionsByRequestedTime / 0.02);
    const dollarsInFlight = infectionsByRequestedTime
          * data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation
        * data.timeToElapse;
    return {
      currentlyInfected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime,
      casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime,
      dollarsInFlight
    };
  }

};
export default output;
