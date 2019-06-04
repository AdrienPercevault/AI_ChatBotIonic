import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicBotPage } from './music-bot.page';

describe('MusicBotPage', () => {
  let component: MusicBotPage;
  let fixture: ComponentFixture<MusicBotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicBotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicBotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
