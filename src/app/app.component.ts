import {Component, OnInit, ViewChild} from '@angular/core';
import { OverlayContainer } from "@angular/cdk/overlay";
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';


@Component({
  selector: 'amte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme = 'my-theme';

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  productInfo: any = {};

  constructor(
    private overlayContainer: OverlayContainer,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  // onThemeChange() {
  //   this.overlayContainer.getContainerElement().classList.add(this.theme);
  // }


}
