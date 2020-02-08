import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { ApiService } from '../api.service';
import * as CanvasJS from '../../../../my-app/canvasjs.min'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details: any;
  error: any;
  values:any;
  countryName: any;
  hourelydeatils: any;
  dateDisplay: number;
  momthDisplay: number;
  dps: {
    x: Date;
    y: any;
}[]
  chartdone: boolean;
  errorShown: boolean =false;

  
  constructor(private _Activatedroute:ActivatedRoute,private apiService: ApiService,private router: Router) { 


  }

  ngOnInit() {
    this.values = this._Activatedroute.params.subscribe(params => {
      this.values =JSON.parse(params.data);
     this.getDetails();
    this.hourlyForecast();
      });
   
  }
  
  getDetails(){
    this.apiService.weatherDetailsByName(this.values)
    .subscribe( data => {
      this.details=data;
    },(error) =>{
      this.apiService.handleError(error);
    })
    }

  getChartDetails(){
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Hourly change of temprature "
      },
      axisX:{
        title: "timeline",
        valueFormatString: "DD-MMM : hh TT",
        labelAngle: -50,
        gridThickness: 2
    },
    axisY: {
        title: "Temperature"
    },
      data: [{
        type: "column",
        dataPoints: this.dps
        
      }]
    });
      
    chart.render();
    this.chartdone=true;
    }
    

    chatCases=[];
	  hourlyForecast(){
      this.apiService.hourlyForecast(this.values)
      .subscribe( data => {
        this.hourelydeatils=data.list;
        console.log("  this.hourelydeatils",  this.hourelydeatils);
        let cnt=0;
        for (let appViewState of this.hourelydeatils) {
          if (cnt<16) {
            this.chatCases.push(appViewState);
            cnt++;
         //   console.log("this.chatCases",this.chatCases);
           }
       }

       this.dateCalculation();
      },(error) =>{
        this.apiService.handleError(error); 
 
        
      })
      }
      
dateCalculation(){
  for (let appViewState of this.chatCases) {
    let d = new Date(appViewState.dt_txt);
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    appViewState.date = d.getDate();
    appViewState.month = d.getMonth();
    appViewState.monthName = months[d.getMonth()];
    appViewState.year = d.getFullYear();
    appViewState.hours = d.getHours();
    appViewState.minutes=d.getMinutes();
    appViewState.seconds=d.getSeconds();
    appViewState.temp=appViewState.main.temp;
    console.log("this.chatCases",this.chatCases);
    
    this.dps = [
      { x: new Date(this.chatCases[0].year, this.chatCases[0].month, this.chatCases[0].date,this.chatCases[0].hours,this.chatCases[0].minutes), y: this.chatCases[0].temp}, 
      { x: new Date(this.chatCases[1].year, this.chatCases[1].month, this.chatCases[1].date,this.chatCases[1].hours,this.chatCases[1].minutes), y: this.chatCases[1].temp}, 
      { x: new Date(this.chatCases[2].year, this.chatCases[2].month, this.chatCases[2].date,this.chatCases[2].hours,this.chatCases[2].minutes), y: this.chatCases[2].temp}, 
      { x: new Date(this.chatCases[3].year, this.chatCases[3].month, this.chatCases[3].date,this.chatCases[3].hours,this.chatCases[3].minutes), y: this.chatCases[3].temp}, 
      { x: new Date(this.chatCases[4].year, this.chatCases[4].month, this.chatCases[4].date,this.chatCases[4].hours,this.chatCases[4].minutes), y: this.chatCases[4].temp}, 
      { x: new Date(this.chatCases[5].year, this.chatCases[5].month, this.chatCases[5].date,this.chatCases[5].hours,this.chatCases[5].minutes), y: this.chatCases[5].temp}, 
      { x: new Date(this.chatCases[6].year, this.chatCases[6].month, this.chatCases[6].date,this.chatCases[6].hours,this.chatCases[6].minutes), y: this.chatCases[6].temp}, 
      { x: new Date(this.chatCases[7].year, this.chatCases[7].month, this.chatCases[7].date,this.chatCases[7].hours,this.chatCases[7].minutes), y: this.chatCases[7].temp}, 
      { x: new Date(this.chatCases[8].year, this.chatCases[8].month, this.chatCases[8].date,this.chatCases[8].hours,this.chatCases[8].minutes), y: this.chatCases[8].temp},
      { x: new Date(this.chatCases[9].year, this.chatCases[9].month, this.chatCases[9].date,this.chatCases[9].hours,this.chatCases[9].minutes), y: this.chatCases[9].temp},
      { x: new Date(this.chatCases[10].year, this.chatCases[10].month, this.chatCases[10].date,this.chatCases[10].hours,this.chatCases[10].minutes), y: this.chatCases[11].temp},
      { x: new Date(this.chatCases[11].year, this.chatCases[11].month, this.chatCases[11].date,this.chatCases[11].hours,this.chatCases[11].minutes), y: this.chatCases[12].temp},
      { x: new Date(this.chatCases[12].year, this.chatCases[12].month, this.chatCases[12].date,this.chatCases[12].hours,this.chatCases[12].minutes), y: this.chatCases[13].temp},
      { x: new Date(this.chatCases[13].year, this.chatCases[13].month, this.chatCases[13].date,this.chatCases[13].hours,this.chatCases[13].minutes), y: this.chatCases[14].temp},
      { x: new Date(this.chatCases[14].year, this.chatCases[14].month, this.chatCases[14].date,this.chatCases[14].hours,this.chatCases[14].minutes), y: this.chatCases[15].temp}, 
];
    this.getChartDetails();
  }
  

}
}
