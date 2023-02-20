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

No_Of_Questions = [150,100,300 ];

// Find the minimum and maximum values in the array
minQuestions= Math.min(...this.No_Of_Questions);
maxQuestions = Math.max(...this.No_Of_Questions);

// Normalizing each value to a range between 0 and 100
 normalizedValues = this.No_Of_Questions.map(value => (value) / (this.maxQuestions) *100);





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
        data: this.normalizedValues,
      },
      {
        name: 'Accuracy',
        data: [20, 30, 40],
      }
    ],

    xAxis: {
      categories: ['Maths', 'Physics', 'Chemistry'],

    },

    yAxis: [{
      title: {
        text: 'Left Axis'
      },
      min:0,
      max:100,
    },
    {
      title: {
        text: 'Right Axis'
      },
      min:0,
      max:100,
      opposite: true
    },


    ],
    plotOptions: {
      column: {
        pointWidth: 10
      }
    },


}

}
