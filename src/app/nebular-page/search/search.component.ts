import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  catFacts = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get().subscribe((data: any[]) => {
      console.log(data);
      this.catFacts = data;
    })
  }
}
