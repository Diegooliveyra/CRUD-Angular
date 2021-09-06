import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appFor]',
})
export class ForDirective implements OnInit {
  @Input('appForEm') numbers: number[] | undefined;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>,
  ) {}

  ngOnInit(): void {
    console.log(this.numbers);
  }
}
