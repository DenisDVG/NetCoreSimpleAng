import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'netCoreSimpleAng';
  
  constructor(private http: HttpClient) {
  }

  makeApiRequest() {
    const url = 'http://localhost:49153/WeatherForecast'; // Replace with your API endpoint
    debugger
    this.http.get(url).subscribe(
      (response) => {
        console.log(response); // Handle the response data
      },
      (error) => {
        console.error(error); // Handle any errors
      }
    );
  }
  
}
