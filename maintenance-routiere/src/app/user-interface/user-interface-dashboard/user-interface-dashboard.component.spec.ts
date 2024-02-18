import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterfaceDashboardComponent } from './user-interface-dashboard.component';

describe('UserInterfaceDashboardComponent', () => {
  let component: UserInterfaceDashboardComponent;
  let fixture: ComponentFixture<UserInterfaceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInterfaceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInterfaceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
