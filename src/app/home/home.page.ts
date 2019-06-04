import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public nav: NavController, private appLauncher: AppLauncher) {
  }
  
  // changePage() {
  //   this.nav.navigateForward('/management-bot')
  // }

  test() {
    const options: AppLauncherOptions = {
      packageName: 'com.spotify.music'
    }

    this.appLauncher.canLaunch(options)
      .then((canLaunch: boolean) => console.log('Spotify is available'))
      .catch((error: any) => console.error('Spotify is not available'));

    this.appLauncher.launch(options)
  }
}
