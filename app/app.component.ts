// #docregion
import { Component }        from '@angular/core';
import { NumberFormatPipe } from './shared/number.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [NumberFormatPipe]
})
export class AppComponent {
  num1: number = 12.6384678;
  num2: number = 0.5;
  num3: number = 123456789;

  userNum: number;

  constructor(private formatPipe: NumberFormatPipe) {}

  /**
   * formatUserNumber is an example by injecting our pipe and using its transform method
   */
  formatUserNumber() {
    this.userNum = this.formatPipe.transform(this.userNum);
  }

}