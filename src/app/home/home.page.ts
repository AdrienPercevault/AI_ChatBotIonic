import { Component, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';

declare var ApiAIPromises: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  // conversations = [{ message: [], answer: [] }];
  public conversations: Array<{message: string, answer: string}> = [];
  
  constructor(public platform: Platform, public ngZone: NgZone) {
    ApiAIPromises.init({
      clientAccessToken: "5829386a7bfb4bb2a480e887292ef6ec",
      lang: "fr"
    });
  }

  ask(question) {
    ApiAIPromises.requestText({
      query: question
    })
    .then(({result: {fulfillment: {speech}}}) => {
      this.ngZone.run(()=> {
        this.conversations.push({
          message: question,
          answer: speech
        })
      });
    })
  }
}