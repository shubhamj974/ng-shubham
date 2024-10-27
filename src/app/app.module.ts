// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './demo/services/auth.intercepter.service';
import { UsersModule } from './demo/modules/users/users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, UsersModule],
  bootstrap: [AppComponent],
  providers: [provideHttpClient(withInterceptors([loggingInterceptor]))]
})
export class AppModule {}
