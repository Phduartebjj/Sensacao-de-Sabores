import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { Product } from '../../../core/models/product.model';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  const mockProduct: Product = {
    id: '1',
    name: 'Bolo de pote',
    flavor: 'Paçoca',
    description: 'Delicioso bolo',
    price: 8.0,
    image: ['/assets/images/products/Bolo_de_pote_paçoca.jpg'],
    category: 'bolos de pote',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    fixture.componentRef.setInput('product', mockProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
