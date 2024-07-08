import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../InvestmentInput.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>();
  enterdinitialInvestment =''
  enterdfannualInvestment = ''
  enterdExpectedReturn = '5'
  enterdDuration= '10'

  onSubmit(){
    // console.log("Submitted")
    // calculateInvestmentResults()
    this.calculate.emit({
      initialInvestment : +this.enterdinitialInvestment,
      annualInvestment: +this.enterdfannualInvestment,
      expectedReturn:+this.enterdExpectedReturn,
      duration:+this.enterdDuration

    });
  }
}
