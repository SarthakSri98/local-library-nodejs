import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInstanceComponent } from './book-instance.component';

describe('BookInstanceComponent', () => {
  let component: BookInstanceComponent;
  let fixture: ComponentFixture<BookInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
