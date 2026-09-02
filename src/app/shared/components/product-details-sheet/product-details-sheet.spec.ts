import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsSheet } from './product-details-sheet';

describe('ProductDetailsSheet', () => {
  let component: ProductDetailsSheet;
  let fixture: ComponentFixture<ProductDetailsSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsSheet],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsSheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
