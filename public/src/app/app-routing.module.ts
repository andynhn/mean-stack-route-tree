import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PdetailComponent } from './products/pdetail/pdetail.component';
import { BrandComponent } from './products/brand/brand.component';
import { CategoryComponent } from './products/category/category.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RdetailComponent } from './reviews/rdetail/rdetail.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllreviewsComponent } from './reviews/allreviews/allreviews.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
      { path: 'details/:id', component: PdetailComponent },
      { path: 'brand/:brand', component: BrandComponent },
      { path: 'category/:cat', component: CategoryComponent }
    ]
  },
  { path: 'reviews', component: ReviewsComponent, children: [
      { path: 'details/:id', component: RdetailComponent },
      { path: 'author/:id', component: AuthorComponent },
      { path: 'all/:id', component: AllreviewsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
