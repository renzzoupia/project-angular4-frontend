import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from "@angular/material/button";
import { ModalTalleresComponent } from './pages/dashboard/modal-talleres/modal-talleres.component';
import { ModalEstudiantesTalleresComponent } from './pages/dashboard/modal-estudiantes-talleres/modal-estudiantes-talleres.component';
import { ModalEncuestasTalleresComponent } from './pages/dashboard/modal-encuestas-talleres/modal-encuestas-talleres.component';
import { LoginComponent } from './pages/login/login.component';

/*POSIBLEMENTE LOS ERROS DEL DISEÑO ES IMPORTAAAAR ACA IMPORTAR IMPORTANTE*/

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ModalTalleresComponent,
    ModalEstudiantesTalleresComponent,
    ModalEncuestasTalleresComponent,
    LoginComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,/*aca importamos */
        CoreModule,
        NgbModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatSelectModule,
        MatSidenavModule,
        FontAwesomeModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
