import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'rxjs/Rx';

import { AngularFireModule } from 'angularfire2';

import { DemoComponent } from '../pages/demos/demo.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

//import {initializeApp,database} from 'firebase';

export const firebaseConfig =  {
  apiKey: "AIzaSyDgedr4WE4qp7AiMEpdKh3hK0lky149urw",
  authDomain: "fir-b28f8.firebaseapp.com",
  databaseURL: "https://fir-b28f8.firebaseio.com",
  projectId: "fir-b28f8",
  storageBucket: "fir-b28f8.appspot.com",
  messagingSenderId: "234891404286"
};

//initializeApp(firebaseConfig);
//database().ref('institutions/UNMSM').on('value', snapshot => console.log(snapshot.val()));

@NgModule({
  declarations: [
    MyApp,
    DemoComponent,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DemoComponent,
    Page1,
    Page2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
