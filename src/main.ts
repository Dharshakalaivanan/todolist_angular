import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


platformBrowserDynamic()
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  


function platformBrowserDynamic() {
  throw new Error('Function not implemented.');
}

