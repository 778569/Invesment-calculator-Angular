import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
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
