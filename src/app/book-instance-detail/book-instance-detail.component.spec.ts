import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInstanceDetailComponent } from './book-instance-detail.component';

describe('BookInstanceDetailComponent', () => {
  let component: BookInstanceDetailComponent;
  let fixture: ComponentFixture<BookInstanceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInstanceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInstanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
