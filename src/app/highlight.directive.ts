import { Directive,ElementRef,HostListener,Input  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input() highlightColor:string;
  @Input() defaultColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(public el:ElementRef ) 
  {
     el.nativeElement.style.backgroundColor='yellow';

   }
  }
