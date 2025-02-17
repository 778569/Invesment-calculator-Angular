
import { CurrencyPipe } from '@angular/common';
import { Component, Input, Pipe } from '@angular/core';

@Component({
  selector: 'app-invesment-results',
  templateUrl: './invesment-results.component.html',
  styleUrl: './invesment-results.component.css'
})
export class InvesmentResultsComponent {
@Input() tabledata?: {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}[];
}
