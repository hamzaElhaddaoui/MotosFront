import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MarqueMotoComponent } from './marque-moto/marque-moto.component';
import { CarteMotoComponent } from './carte-moto/carte-moto.component';
import { FooterComponent } from './footer/footer.component';
import { PreloadskelComponent } from './preloadskel/preloadskel.component';
import { MotosComponentComponent } from './motos-component/motos-component.component';
import { MotoInfoComponent } from './moto-info/moto-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreloadMotoInfoComponent } from './preload-moto-info/preload-moto-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMotoComponent } from './add-moto/add-moto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MarqueMotoComponent,
    CarteMotoComponent,
    FooterComponent,
    PreloadskelComponent,
    MotosComponentComponent,
    MotoInfoComponent,
    NotFoundComponent,
    PreloadMotoInfoComponent,
    AddMotoComponent
  ],
  imports: [
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
