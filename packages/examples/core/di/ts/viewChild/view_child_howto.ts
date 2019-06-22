/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// #docregion HowTo
import {AfterViewInit, Component, Directive, ViewChild} from '@angular/core';

@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Component({selector: 'someCmp', templateUrl: 'someCmp.html'})
class SomeCmp implements AfterViewInit {
  // TODO(issue/24571): remove '!'.
  @ViewChild(ChildDirective, {static: false}) child !: ChildDirective;

  ngAfterViewInit() {
    // child is set
  }
}
// #enddocregion