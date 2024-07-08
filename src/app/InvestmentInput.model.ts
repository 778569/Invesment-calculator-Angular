export type InvestmentInput={
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

export interface TableDataArray {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}[];

// export type TableDataArray = TableData[];