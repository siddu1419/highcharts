import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { max } from 'rxjs';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
Highcharts: typeof Highcharts = Highcharts;

No_Of_Questions = [330,100,180 ];

// Find the minimum and maximum values in the array
maxQuestions = Math.max(...this.No_Of_Questions);

// minQuestions= Math.min(...this.No_Of_Questions);

// // Normalizing each value to a range between 0 and 100
//  normalizedValues = this.No_Of_Questions.map(value => (value) / (this.maxQuestions) *100);





    chartOptions: any = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'My Bar Chart'
    },

    series: [
      {
        name: 'No of Questions',
        data: this.No_Of_Questions,
        yAxis: 0,
      },
      {
        name: 'Accuracy',
        data: [60, 70, 50],
        yAxis: 1,
      }
    ],


    xAxis: {
      categories: ['Maths', 'Physics', 'Chemistry'],

    },

    yAxis: [
      {
        title: {
          text: 'No of Questions'
        },
        // labels: {
        //   format: '{value}'
        // },
        min: 0,
        max: this.maxQuestions,
      },
      {
        title: {
          text: 'Accuracy'
        },
        // labels: {
        //   format: '{value}'
        // },
        opposite: true,
        min: 0,
        max: 100
      }
    ],
    plotOptions: {
      column: {
        pointWidth: 10
      }
    },


}

}
