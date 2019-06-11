import { Component, NgZone } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';

declare var ApiAIPromises: any;

@Component({
  selector: 'app-smalltalk-bot',
  templateUrl: './smalltalk-bot.page.html',
  styleUrls: ['./smalltalk-bot.page.scss'],
})
export class SmalltalkBotPage {

  // List of the user message and answer from the bot
  public conversations: Array<{message: string, answer: string}> = [];
  
  speech: string;
  matches: String[];

  constructor(public platform: Platform, 
              public ngZone: NgZone, 
              public nav: NavController) {
    ApiAIPromises.init({
      clientAccessToken: "41547b48a1004f7193110e5a88074956",
      lang: "fr"
    }, (response) => {
      console.log(response);
    }, (error) => {
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
    })
    .catch(error => {
      console.error(error)
    })
  };

  // Voice message from user with SpeechRecognition plugin
  getVoiceMessage() {
    let options = {
      language: 'fr-FR'
      // language: 'en-US'
    }
    this.ngZone.run(()=> {
      SpeechRecognition.startListening().subscribe(matches => {
        this.matches = matches;
        this.getMessage(this.matches[0])
      });
    });
  }
}
