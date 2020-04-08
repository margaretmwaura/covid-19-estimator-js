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
  impact.infectionsByRequestedTime = data.reportedCases * 50;

  severeImpact.currentlyInfected = data.reportedCases * 10;
  severeImpact.infectionsByRequestedTime = data.reportedCases * 50;

  return data;
};

export default covid19ImpactEstimator;
