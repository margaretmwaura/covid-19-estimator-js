import output from './mixins/output';
// A month has 30 days
const covid19ImpactEstimator = (data) => {
  const impact = output.getOutput(data , 10);
  const severeImpact = output.getOutput(data, 50);
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
