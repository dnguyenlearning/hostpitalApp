import { Directive, Input } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appImageUrl]',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src'
   }

})
export class ImageUrlDirective {

  constructor() { }
  @Input() src:string;
  @Input() default:string;

  updateUrl() {
    this.src = this.default;
    
  }

}
