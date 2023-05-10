import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TargetComponent } from './components/target/target.component';


@NgModule({
  declarations: [
    CarouselComponent,
    TargetComponent
  ],
  imports: [    
    CommonModule
  ],
  exports:[
    CarouselComponent,
    TargetComponent
  ]
})
export class SharedModule { }
