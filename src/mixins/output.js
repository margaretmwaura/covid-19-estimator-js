import calculator from './calculator';

const output = {

  getOutput(data, percentage) {
    const currentlyInfected = data.reportedCases * percentage;

    const infectionsByRequestedTime = calculator.getInfectionsByRequestedTime(
      currentlyInfected, data.timeToElapse
    );
    const severeCasesByRequestedTime = Math.floor(infectionsByRequestedTime / 0.15);

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
