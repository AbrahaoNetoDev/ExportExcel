import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExportExcelService } from './export-excel-demo/export-excel.Service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ExportExcelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
