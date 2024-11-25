
const checklistRules = [
    {
      id: 'valuationFeePaid',
      name: 'Valuation Fee Paid',
      description: 'Checks if valuation fee has been paid',
      evaluate: (data) => ({
        passed: data.isValuationFeePaid === true,
        message: data.isValuationFeePaid ? 'Valuation fee is paid' : 'Valuation fee is not paid'
      })
    },
    {
      id: 'ukResident',
      name: 'UK Resident',
      description: 'Verifies UK residency status',
      evaluate: (data) => ({
        passed: data.isUkResident === true,
        message: data.isUkResident ? 'Applicant is UK resident' : 'Applicant is not UK resident'
      })
    },
    {
      id: 'riskRating',
      name: 'Risk Rating Medium',
      description: 'Confirms risk rating is Medium',
      evaluate: (data) => ({
        passed: data.riskRating === 'Medium',
        message: data.riskRating === 'Medium' ? 
          'Risk rating is Medium' : 
          `Risk rating is ${data.riskRating}, expected Medium`
      })
    },
    {
      id: 'ltvCheck',
      name: 'LTV Below 60%',
      description: 'Checks if Loan-to-Value ratio is below 60%',
      evaluate: (data) => {
        const ltv = (data.loanRequired / data.purchasePrice) * 100;
        return {
          passed: ltv < 60,
          message: `LTV is ${ltv.toFixed(2)}% (${ltv < 60 ? 'below' : 'above'} 60% threshold)`
        };
      }
    }
  ];
  
  module.exports = checklistRules;