import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductXCardComponent } from './product-x-card.component';

describe('ProductXCardComponent', () => {
  let component: ProductXCardComponent;
  let fixture: ComponentFixture<ProductXCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductXCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductXCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
