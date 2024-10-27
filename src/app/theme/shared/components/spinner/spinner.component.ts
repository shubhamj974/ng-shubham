// Angular import
import { Component, Input, OnDestroy, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { DOCUMENT } from '@angular/common';

// project import
import { Spinkit } from './spinkits';
import { SpinnerService } from 'src/app/demo/services/spinner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss', './spinkit-css/sk-line-material.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnInit {
  // public props
  isSpinnerVisible: boolean = false;
  Spinkit = Spinkit;
  @Input() backgroundColor = '#1890ff';
  @Input() spinner = Spinkit.skLine;

  // Constructor
  constructor(
    private router: Router,
    private spinnerService: SpinnerService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.spinnerService.spinnerState$.subscribe((res) => {
      this.isSpinnerVisible = res;
    });
  }
}
