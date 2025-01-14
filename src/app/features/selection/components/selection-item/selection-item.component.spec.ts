import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionItemComponent } from './selection-item.component';

describe('SelectionItemComponent', () => {
  let component: SelectionItemComponent;
  let fixture: ComponentFixture<SelectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
