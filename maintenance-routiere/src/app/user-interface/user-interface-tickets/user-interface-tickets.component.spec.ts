import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterfaceTicketsComponent } from './user-interface-tickets.component';

describe('UserInterfaceTicketsComponent', () => {
  let component: UserInterfaceTicketsComponent;
  let fixture: ComponentFixture<UserInterfaceTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInterfaceTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInterfaceTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
