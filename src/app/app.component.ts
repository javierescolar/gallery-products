import { Component, OnInit } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private readonly _loadingService: LoadingService) {}
  ngOnInit(): void {
    this._loadingService.isLoading().subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
}
