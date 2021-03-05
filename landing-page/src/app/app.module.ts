import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonPrimaryComponent } from 'src/app/components/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from 'src/app/components/button-secondary/button-secondary.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent, CardComponent, ButtonPrimaryComponent, ButtonSecondaryComponent],
    imports: [BrowserModule, FontAwesomeModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
