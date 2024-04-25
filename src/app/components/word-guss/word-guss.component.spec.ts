import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGussComponent } from './word-guss.component';

describe('WordGussComponent', () => {
  let component: WordGussComponent;
  let fixture: ComponentFixture<WordGussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordGussComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordGussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
