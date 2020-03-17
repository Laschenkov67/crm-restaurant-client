import { AnalyticsPage } from './../interfaces/analytics/analytics.interface';
import { AnalyticsService } from './../services/analytics.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"]
})
export class AnalyticsComponent implements AfterViewInit, OnDestroy {

  @ViewChild("gain", { static: false }) gainRef: ElementRef;
  @ViewChild("order", { static: false }) orderRef: ElementRef;

  aSub: Subscription;
  average: number;
  pending = true;

  constructor(private service: AnalyticsService) {}

  ngAfterViewInit() {
    this.aSub = this.service.getAnalytics().subscribe((data: AnalyticsPage) => {
      this.average = data.average;

      this.pending = false;
    });
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
