import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeModule } from './home/home.module';
import { BeautyModule } from './beauty/beauty.module';
import { CateringModule } from './catering/catering.module';
import { DecoratorsModule } from './decorators/decorators.module';
import { PhotographyModule } from './photography/photography.module';
import { VenuesModule } from './venues/venues.module';

import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, SharedModule } from './shared';

import { ApiService } from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouting,
    SharedModule,
    HomeModule,
    BeautyModule,
    CateringModule,
    DecoratorsModule,
    PhotographyModule,
    VenuesModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
