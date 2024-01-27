import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TestymonialsComponent } from './testymonials/testymonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowWeWorkComponent,
    AboutUsComponent,
    RecipesComponent,
    TestymonialsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
