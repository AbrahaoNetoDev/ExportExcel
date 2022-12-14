import { Component } from '@angular/core';
import { ExportExcelService } from './export-excel-demo/export-excel.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any = [
    {
      eid: 'e101',
      ename: 'ravi',
      esal: 1000,
    },
    {
      eid: 'e102',
      ename: 'ram',
      esal: 2000,
    },
    {
      eid: 'e103',
      ename: 'rajesh',
      esal: 3000,
    },
  ];

  constructor(private excelService: ExportExcelService) {}

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
}
