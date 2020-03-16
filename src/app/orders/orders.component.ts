import { OrderService } from './../services/order.service';
import { MaterialService } from './../services/material.service';
import { MaterialInstance } from './../interfaces/material-instance/material-instance.inteface';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'], 
  providers: [OrderService]
})
export class OrdersComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('modal', {static: false}) modalRef: ElementRef
  modal: MaterialInstance
  isRoot: boolean

  constructor(private router: Router,
              private order: OrderService) {
  }

  ngOnInit() {
    this.isRoot = this.router.url === '/order'
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isRoot = this.router.url === '/order'
      }
    })
  }

  ngOnDestroy() {
    this.modal.destroy()
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)
  }

  open() {
    this.modal.open()
  }

  cancel() {
    this.modal.close()
  }

  submit() {
    this.modal.close()
  }

}
