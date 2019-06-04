import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBotPage } from './manage-bot.page';

describe('ManageBotPage', () => {
  let component: ManageBotPage;
  let fixture: ComponentFixture<ManageBotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
