import { TaggedTemplateExpr } from '@angular/compiler';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers?: number[]

  constructor(private container: ViewContainerRef, private tamplate: TemplateRef<any>) { }

  ngOnInit(): void {
    for (let number of this.numbers!) {
      this.container.createEmbeddedView(this.tamplate, { $implicit: number })
    }
  }
}
