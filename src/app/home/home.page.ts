import { Component, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';

declare var ApiAIPlugin: any;
declare var ApiAIPromises: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  // List of the user message and answer from the bot
  public conversations: Array<{message: string, answer: string}> = [];
  
  public speech: string;

  constructor(public platform: Platform, public ngZone: NgZone) {
    ApiAIPromises.init({
      clientAccessToken: "5829386a7bfb4bb2a480e887292ef6ec",
      lang: "fr"
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
    .then(({result: {fulfillment: {speech}}}) => {
      this.ngZone.run(()=> {
        this.conversations.push({
          message: message,
          answer: speech
        })
      });
    })
    .catch(error => {
      console.error(error)
    })
  };

  // Voice message from the user
  getVoiceMessage() {
    let self: any = this;
    self.speech = '';
    self.resolvedQuery = '';

    try {
      ApiAIPlugin.requestVoice({
        lang: "fr"
        // empty for simple requests, some optional parameters can be here
      },
      (response) => {
        self.speech = response.result.fulfillment.speech;
        self.resolvedQuery = response.result.fulfillment.resolevedQuery;
        this.ngZone.run(()=> {
          this.conversations.push({
            message: self.resolvedQuery,
            answer: self.speech
          })
        });
        console.log(self.speech);
      },
      (error) => {
        console.log(self.speech);
        self.speech = error.message;
      });
    }
    catch (error) {
      console.error(error);
    }
  };

}