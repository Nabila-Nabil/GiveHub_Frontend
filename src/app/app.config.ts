import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { storeTokenInterceptor } from './interceptors/store-token.interceptor';
import {  withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withFetch()),
  provideHttpClient(withInterceptors(
    [ storeTokenInterceptor]))]
};
