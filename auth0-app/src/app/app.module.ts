import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Import for the Auth0
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-0vfz-ykc.us.auth0.com',
      clientId: '1tVnBhtdFjzL9XEj0AiPvFijr5e8nD94',
      redirect_uri: 'http://localhost:4200/home/'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
