import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[zoom-in-image]'
})
export class ZoomInImageDirective {
    constructor(private el: ElementRef) {
    }

    @HostListener('click') onClick() {
        const div = this.el.nativeElement;
        const img = this.el.nativeElement.firstElementChild;

        let zoomedImageDiv = div.parentNode.nextElementSibling;

        zoomedImageDiv.style.display = "block";
        zoomedImageDiv.firstElementChild.src = img.src;

        let gallery = div.parentNode;
        gallery.className += ' blurred disabled-background';
    }
}

