type InvestmentInput={
    initialInvestment: number,
    annualInvestment:number, 
    expectedReturn:number, 
    duration:number
}

// interface TableDataArray {
//     year: number,
//     interest: number,
//     valueEndOfYear: number,
//     annualInvestment: number,
//     totalInterest: number,
//     totalAmountInvested: number,
// }

interface TableData {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}

type TableDataArray = TableData[];