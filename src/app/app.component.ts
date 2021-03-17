import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carstock-ui';
  stockLength: number;
  data: [];
  brandKey: Array<String> = [];
  segmentKey: Array<String> = [];
  year: Array<Number> = [];
  engine: Array<String> = [];

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get("assets/query_results.json").subscribe(data => {
      this.stockLength = data['body'].data.length;
      this.data = data['body'].data;
    })
  }

  brandChange(event) {
    this.brandKey = [];
    for (var i = 0; i < event.target.selectedOptions.length; i++) {
      this.brandKey.push(event.target.selectedOptions[i].id);
    }
    const filteredData = this.data.filter(carData => {
      return this.filterData(carData);
    });
    this.stockLength = filteredData.length;
  }

  segmentChange(event) {
    this.segmentKey = [];
    for (var i = 0; i < event.target.selectedOptions.length; i++) {
      this.segmentKey.push(event.target.selectedOptions[i].id);
    }
    const filteredData = this.data.filter(carData => {
      return this.filterData(carData);
    });
    this.stockLength = filteredData.length;
  }

  yearChange(event) {
    this.year = [];
    for (var i = 0; i < event.target.selectedOptions.length; i++) {
      this.year.push(Number(event.target.selectedOptions[i].id));
    }
    const filteredData = this.data.filter(carData => {
      return this.filterData(carData);
    });
    this.stockLength = filteredData.length;
  }

  engineChange(event) {
    this.engine = [];
    for (var i = 0; i < event.target.selectedOptions.length; i++) {
      this.engine.push(event.target.selectedOptions[i].id);
    }
    const filteredData = this.data.filter(carData => {
      return this.filterData(carData);
    });
    this.stockLength = filteredData.length;
  }

  filterData(carData): boolean {
    if (this.brandKey.length != 0 && this.segmentKey.length != 0 && this.year.length != 0 && this.engine.length != 0) {
      return this.brandKey.includes(carData['brand_key']) && this.segmentKey.includes(carData['segment_key']) && this.year.includes(carData['year']) && this.engine.includes(carData['engine_type_key']);
    } else if (this.brandKey.length != 0 && this.segmentKey.length != 0 && this.year.length != 0) {
      return this.brandKey.includes(carData['brand_key']) && this.segmentKey.includes(carData['segment_key']) && this.year.includes(carData['year']);
    } else if (this.brandKey.length != 0 && this.year.length != 0 && this.engine.length != 0) {
      return this.brandKey.includes(carData['brand_key']) && this.year.includes(carData['year']) && this.engine.includes(carData['engine_type_key']);
    } else if (this.segmentKey.length != 0 && this.year.length != 0 && this.engine.length != 0) {
      return this.segmentKey.includes(carData['segment_key']) && this.year.includes(carData['year']) && this.engine.includes(carData['engine_type_key']);
    } else if (this.brandKey.length != 0 && this.year.length != 0) {
      return this.brandKey.includes(carData['brand_key']) && this.year.includes(carData['year']);
    } else if (this.segmentKey.length != 0 && this.year.length != 0) {
      return this.segmentKey.includes(carData['segment_key']) && this.year.includes(carData['year']);
    } else if (this.year.length != 0 && this.engine.length != 0) {
      return this.year.includes(carData['year']) && this.engine.includes(carData['engine_type_key']);
    } else if (this.brandKey.length != 0 && this.segmentKey.length != 0) {
      return this.brandKey.includes(carData['brand_key']) && this.segmentKey.includes(carData['segment_key']);
    } else if (this.brandKey.length != 0) {
      return this.brandKey.includes(carData['brand_key']);
    } else if (this.segmentKey.length != 0) {
      return this.segmentKey.includes(carData['segment_key']);
    } else if (this.year.length != 0) {
      return this.year.includes(carData['year']);
    } else if (this.engine.length != 0) {
      return this.engine.includes(carData['engine_type_key']);
    }
  }
}