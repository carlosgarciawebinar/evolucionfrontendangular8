import { NgModule } from '@angular/core';
import {MatButtonModule, MatBottomSheetModule} from '@angular/material';

@NgModule({
  exports: [
    MatBottomSheetModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
