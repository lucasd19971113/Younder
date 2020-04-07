import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/pt';

registerLocaleData(localeDeAt);
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatSliderModule, MatTableModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule, MatButtonToggleModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserTableComponent  } from './table/user-table';
import { UserFormComponent } from './user-form/user-form.component';
import { hammerjs } from '../../node_modules/hammerjs';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { UserService } from './services/user-services.service';
import { BaseService } from './services/base-service.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    UserTableComponent,
    UserFormComponent 
  ],
  imports: [
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true
    }),
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatDatepickerModule, 
    MatButtonToggleModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path :'table', component: UserTableComponent  },
      { path: 'add-user', component : UserFormComponent}
    ])
  ],
  providers: [BsModalRef, { provide: LOCALE_ID, useValue: "pt-BR" }, UserService,BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
