/*
jQWidgets v5.2.0 (2017-Sep)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxResponsivePanel',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxResponsivePanelComponent implements OnChanges
{
   @Input('animationDirection') attrAnimationDirection: any;
   @Input('animationHideDelay') attrAnimationHideDelay: any;
   @Input('animationShowDelay') attrAnimationShowDelay: any;
   @Input('animationType') attrAnimationType: any;
   @Input('autoClose') attrAutoClose: any;
   @Input('collapseBreakpoint') attrCollapseBreakpoint: any;
   @Input('collapseWidth') attrCollapseWidth: any;
   @Input('initContent') attrInitContent: any;
   @Input('theme') attrTheme: any;
   @Input('toggleButton') attrToggleButton: any;
   @Input('toggleButtonSize') attrToggleButtonSize: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['animationDirection','animationHideDelay','animationShowDelay','animationType','autoClose','collapseBreakpoint','collapseWidth','height','initContent','theme','toggleButton','toggleButtonSize','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxResponsivePanel;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxResponsivePanel(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxResponsivePanel(this.properties[i])) {
                  this.host.jqxResponsivePanel(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if (attrValue.length != hostValue.length) {
         return false;
      }
      for (let i = 0; i < attrValue.length; i++) {
         if (attrValue[i] !== hostValue[i]) {
            return false;
         }
      }
      return true;
   }

   manageAttributes(): any {
      let options = {};
      for (let i = 0; i < this.properties.length; i++) {
         let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
         if (this[attrName] !== undefined) {
            options[this.properties[i]] = this[attrName];
         }
      }
      return options;
   }

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      childEl.classList.add(...classes);
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);

      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponsivePanel', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxResponsivePanel('setOptions', options);
   }

   // jqxResponsivePanelComponent properties
   animationDirection(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('animationDirection', arg);
      } else {
          return this.host.jqxResponsivePanel('animationDirection');
      }
   }

   animationHideDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('animationHideDelay', arg);
      } else {
          return this.host.jqxResponsivePanel('animationHideDelay');
      }
   }

   animationShowDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('animationShowDelay', arg);
      } else {
          return this.host.jqxResponsivePanel('animationShowDelay');
      }
   }

   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('animationType', arg);
      } else {
          return this.host.jqxResponsivePanel('animationType');
      }
   }

   autoClose(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('autoClose', arg);
      } else {
          return this.host.jqxResponsivePanel('autoClose');
      }
   }

   collapseBreakpoint(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('collapseBreakpoint', arg);
      } else {
          return this.host.jqxResponsivePanel('collapseBreakpoint');
      }
   }

   collapseWidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('collapseWidth', arg);
      } else {
          return this.host.jqxResponsivePanel('collapseWidth');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('height', arg);
      } else {
          return this.host.jqxResponsivePanel('height');
      }
   }

   initContent(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('initContent', arg);
      } else {
          return this.host.jqxResponsivePanel('initContent');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('theme', arg);
      } else {
          return this.host.jqxResponsivePanel('theme');
      }
   }

   toggleButton(arg?: String | any) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('toggleButton', arg);
      } else {
          return this.host.jqxResponsivePanel('toggleButton');
      }
   }

   toggleButtonSize(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('toggleButtonSize', arg);
      } else {
          return this.host.jqxResponsivePanel('toggleButtonSize');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxResponsivePanel('width', arg);
      } else {
          return this.host.jqxResponsivePanel('width');
      }
   }


   // jqxResponsivePanelComponent functions
   close(): void {
      this.host.jqxResponsivePanel('close');
   }

   destroy(): void {
      this.host.jqxResponsivePanel('destroy');
   }

   isCollapsed(): boolean {
      return this.host.jqxResponsivePanel('isCollapsed');
   }

   isOpened(): boolean {
      return this.host.jqxResponsivePanel('isOpened');
   }

   open(): void {
      this.host.jqxResponsivePanel('open');
   }

   refresh(): void {
      this.host.jqxResponsivePanel('refresh');
   }

   render(): void {
      this.host.jqxResponsivePanel('render');
   }


   // jqxResponsivePanelComponent events
   @Output() onClose = new EventEmitter();
   @Output() onCollapse = new EventEmitter();
   @Output() onExpand = new EventEmitter();
   @Output() onOpen = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData: any) => { this.onClose.emit(eventData); });
      this.host.on('collapse', (eventData: any) => { this.onCollapse.emit(eventData); });
      this.host.on('expand', (eventData: any) => { this.onExpand.emit(eventData); });
      this.host.on('open', (eventData: any) => { this.onOpen.emit(eventData); });
   }

} //jqxResponsivePanelComponent


