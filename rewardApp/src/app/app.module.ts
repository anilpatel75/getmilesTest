import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RewardComponent } from './reward/reward.component';
import { CategoryComponent } from './category/category.component';
import { CategoryContainerComponent } from './category-container/category-container.component';
import { MainService } from './main.service';

@NgModule({
  declarations: [
    AppComponent,
    RewardComponent,
    CategoryComponent,
    CategoryContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
