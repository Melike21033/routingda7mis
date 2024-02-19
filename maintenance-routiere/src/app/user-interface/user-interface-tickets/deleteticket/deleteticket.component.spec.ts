import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteticketComponent } from './deleteticket.component';

describe('DeleteticketComponent', () => {
  let component: DeleteticketComponent;
  let fixture: ComponentFixture<DeleteticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
