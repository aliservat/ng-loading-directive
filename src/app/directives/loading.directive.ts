import {Directive, Inject, Input, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';
import {LoadingDirectiveConfig} from "../app.module";

@Directive({
  selector: '[appLoading]',
  standalone:true
})
export class LoadingDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2,
    @Inject(LoadingDirectiveConfig) private LoadingDirectiveConfig: any


  ) {}
  loadingEle : any

  @Input('appLoading') set appLoading(value: boolean) {

    if (value) {
      this.viewContainer.clear();
      this.loadingEle = this.viewContainer.createComponent(this.LoadingDirectiveConfig.Component);
    } else {
      const loadingComponentElement = this.loadingEle.location.nativeElement;
      this.renderer.addClass(loadingComponentElement,  this.LoadingDirectiveConfig.FadeClass);
      setTimeout(()=>{
        this.loadingEle.destroy();
      },1000)
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
