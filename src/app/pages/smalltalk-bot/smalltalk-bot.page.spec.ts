import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmalltalkBotPage } from './smalltalk-bot.page';

describe('SmalltalkBotPage', () => {
  let component: SmalltalkBotPage;
  let fixture: ComponentFixture<SmalltalkBotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmalltalkBotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmalltalkBotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
