import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { BuyingComponent } from './buying/buying.component';
import { MainFilterComponent } from './main-filter/main-filter.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AppRoutingModule } from './app-routing.module';
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { CookingsComponent } from 'src/app/cookings/cookings.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
      DetailsComponent,
      FooterComponent,
      BuyingComponent,
      MainFilterComponent,
      AuthorizationComponent,
      PartnersComponent,
      AboutComponent,
      CookingsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
