import calculator from './mixins/calculator';
// A month has 30 days
const covid19ImpactEstimator = (data) => {
  const impact = {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0
  };
  const severeImpact = {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0
  };

  impact.currentlyInfected = data.reportedCases * 10;

  impact.infectionsByRequestedTime = calculator.getInfectionsByRequestedTime(
    impact.currentlyInfected, 28
  );
  impact.severeCasesByRequestedTime = Math.floor(impact.infectionsByRequestedTime / 0.15);

  impact.hospitalBedsByRequestedTime = calculator.getAvailableHospitalBeds(
    data.totalHospitalBeds, impact.severeCasesByRequestedTime
  );
  impact.casesForICUByRequestedTime = Math.floor(impact.infectionsByRequestedTime / 0.05);
  impact.casesForVentilatorsByRequestedTime = Math.floor(impact.infectionsByRequestedTime / 0.02);
  impact.dollarsInFlight = impact.infectionsByRequestedTime
      * data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation * data.timeToElapse;

  severeImpact.currentlyInfected = data.reportedCases * 50;

  severeImpact.infectionsByRequestedTime = calculator.getInfectionsByRequestedTime(
    severeImpact.currentlyInfected, 28
  );
  severeImpact.severeCasesByRequestedTime = Math.floor(
    severeImpact.infectionsByRequestedTime / 0.15
  );

  severeImpact.hospitalBedsByRequestedTime = calculator.getAvailableHospitalBeds(
    severeImpact.severeCasesByRequestedTime, impact.severeCasesByRequestedTime
  );
  severeImpact.casesForICUByRequestedTime = Math.floor(
    severeImpact.infectionsByRequestedTime / 0.05
  );
  severeImpact.casesForVentilatorsByRequestedTime = Math.floor(
    impact.infectionsByRequestedTime / 0.02
  );
  severeImpact.dollarsInFlight = severeImpact.infectionsByRequestedTime
      * data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation * data.timeToElapse;
  return data;
};

export default covid19ImpactEstimator;
