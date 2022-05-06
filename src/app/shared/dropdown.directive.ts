import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  private isOpen = false;
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    const dropdown = this.eleRef.nativeElement.nextElementSibling;
    if (this.isOpen)
      this.renderer.removeClass(dropdown, 'show');
    else
      this.renderer.addClass(dropdown, 'show');
    this.isOpen = !this.isOpen;
  }
}
