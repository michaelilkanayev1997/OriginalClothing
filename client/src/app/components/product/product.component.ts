import { Component, Input } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

import { Product } from '../../../types';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: Product;
}
