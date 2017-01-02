import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[zoom-out-image]'
})
export class ZoomOutImageDirective {
    constructor(private el: ElementRef) {
    }

    @HostListener('click') onClick() {
        const div = this.el.nativeElement;
        const img = this.el.nativeElement.firstElementChild;

        img.src = '';
        div.style.display = 'none';

        let gallery = div.previousElementSibling;
        gallery.className = 'container gallery text-center';
    }
}
