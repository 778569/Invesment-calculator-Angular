import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invesment-results',
  standalone: true,
  imports: [],
  templateUrl: './invesment-results.component.html',
  styleUrl: './invesment-results.component.css'
})
export class InvesmentResultsComponent {
@Input() tabledata! : TableDataArray
}
