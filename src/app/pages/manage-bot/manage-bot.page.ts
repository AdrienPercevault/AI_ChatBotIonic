import { Component, NgZone } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';

declare var ApiAIPromises: any;

@Component({
  selector: 'app-manage-bot',
  templateUrl: './manage-bot.page.html',
  styleUrls: ['./manage-bot.page.scss'],
})
export class ManageBotPage {
  // List of the user message and answer from the bot
  public conversations: Array<{message: string, answer: string}> = [];
  
  speech: string;
  matches: String[];

  constructor(public platform: Platform, 
              public ngZone: NgZone, 
              public nav: NavController,
              private appLauncher: AppLauncher) {
    ApiAIPromises.init({
      clientAccessToken: "81a43e5c580340b982a29d86e67b0233" // Management BOT
      // clientAccessToken: "08b636033f7e43b6ae2e8f05ada6d525" // Music BOT
      // lang: "fr"
    },
    (response) => {
      console.log(response);
    },
    (error) => {
      console.error(error);
    });
  };

  // Message from the user
  getMessage(message) {
    ApiAIPromises.requestText({
      query: message
    })
    .then(({result}) => {
      const {speech} = result.fulfillment;
      this.ngZone.run(()=> {
        this.conversations.push({
          message: message,
          answer: speech
        })
      });
      console.log(result)
      if (result.action == "app.open") {
        this.openApplication(result.parameters.appName)
      }
    })
    .catch(error => {
      console.error(error)
    })
  };

  // Voice message from user with SpeechRecognition plugin
  getVoiceMessage() {
    let options = {
      // language: 'fr-FR'
      language: 'en-US'
    }
    this.ngZone.run(()=> {
      SpeechRecognition.startListening().subscribe(matches => {
        this.matches = matches;
        this.getMessage(this.matches[0])
      });
    });
  }

  openApplication(appName: string) {
    const options: AppLauncherOptions = {  }

    if (appName == 'Spotify') {
      options.packageName = 'com.spotify.music'
    }
    else if (appName == 'Gmail') {
      options.packageName = 'com.google.android.gm'
    }
    else if (appName == 'youtube') {
      options.packageName = 'com.google.android.youtube'
    }
    else if (appName == 'discord') {
      options.packageName = 'com.discord'
    }

    this.appLauncher.canLaunch(options)
      .then((canLaunch: boolean) => console.log(appName + ' is available'))
      .catch((error: any) => console.error(appName + ' is not available'));

    this.appLauncher.launch(options)
  }

}
