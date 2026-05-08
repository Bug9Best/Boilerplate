import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { HighchartsChartComponent } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { ApiService } from '../../core/services/postgres/api.service';

@Component({
  selector: 'app-dashboard',
  imports: [CardModule, HighchartsChartComponent],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: { type: 'spline', backgroundColor: 'transparent' },
    title: { text: '' },
    xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
    yAxis: { title: { text: 'Value' } },
    series: [
      { type: 'spline', name: 'Users', data: [1, 3, 2, 4, 3, 5, 4] },
      { type: 'spline', name: 'Sales', data: [2, 1, 3, 2, 4, 3, 5] }
    ],
    credits: { enabled: false }
  };

  private apiService = inject(ApiService);

  ngOnInit() {
    // Example of calling the API service (currently commented out as backend is skipped)
    /*
    this.apiService.get<any>('/dashboard-stats').subscribe({
      next: (data) => {
        console.log('Fetched data:', data);
        // Update chart options here
      },
      error: (err) => console.error(err)
    });
    */
  }
}
