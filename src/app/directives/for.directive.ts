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
    for (let umbers of this.numbers) {
      this.container.createEmbeddedView(this.template);
    }
    console.log(this.numbers);
  }
}
