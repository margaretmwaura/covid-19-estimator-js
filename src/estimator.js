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

  severeImpact.currentlyInfected = data.reportedCases * 50;

  severeImpact.infectionsByRequestedTime = calculator.getInfectionsByRequestedTime(
    severeImpact.currentlyInfected, 28
  );

  // eslint-disable-next-line max-len
  severeImpact.severeCasesByRequestedTime = Math.floor(severeImpact.infectionsByRequestedTime / 0.15);

  severeImpact.hospitalBedsByRequestedTime = calculator.getAvailableHospitalBeds(
    severeImpact.severeCasesByRequestedTime, impact.severeCasesByRequestedTime
  );

  return data;
};

export default covid19ImpactEstimator;
