import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvesmentResultsComponent } from "./invesment-results/invesment-results.component";
import { InvestmentInput } from './InvestmentInput.model';


@Component({
    selector: 'app-root',
    standalone: false,
    templateUrl: './app.component.html',
    
})
export class AppComponent {
mytabledata? :{
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}[];
  calculateInvestmentResults(data:InvestmentInput) {
    const {initialInvestment, annualInvestment,expectedReturn,duration} = data
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.mytabledata = annualData
  // console.log(annualData)
    // return annualData;
  }
}
