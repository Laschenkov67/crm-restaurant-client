import { MaterialService } from './../../services/material.service';
import { Position } from './../../interfaces/positions/positions.interface';
import { switchMap, map } from 'rxjs/operators';
import { PositionsService } from './../../services/positions.service';
import { OrderService } from './../../services/order.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-order-positions",
  templateUrl: "./order-positions.component.html",
  styleUrls: ["./order-positions.component.scss"]
})
export class OrderPositionsComponent implements OnInit {

  positions$: Observable<Position[]>;

  constructor(
    private route: ActivatedRoute,
    private positionsService: PositionsService,
    private order: OrderService
  ) {}

  ngOnInit() {
    this.positions$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.positionsService.fetch(params["id"]);
      }),
      map((positions: Position[]) => {
        return positions.map(position => {
          position.quantity = 1;
          return position;
        });
      })
    );
  }

  addToOrder(position: Position) {
    MaterialService.toast(`Добавлено x${position.quantity}`)
    this.order.add(position)
  }
}