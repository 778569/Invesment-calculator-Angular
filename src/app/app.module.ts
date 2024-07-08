import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvesmentResultsComponent } from "./invesment-results/invesment-results.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    declarations:[AppComponent,HeaderComponent,InvesmentResultsComponent],
    imports:[BrowserModule,FormsModule,UserInputModule],
    bootstrap:[AppComponent]
})


export class AppModule{}