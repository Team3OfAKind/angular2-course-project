import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[zoom-image]'
})
export class ZoomImageDirective {
    constructor(private el: ElementRef) {
    }

    @HostListener('click') onClick() {
        this.zoom();
    }

    private zoom() {
        const div = this.el.nativeElement;
        const img = this.el.nativeElement.firstElementChild;

        if (div.className.indexOf('zoomed-image') >= 0) {
            img.src = '';
            div.style.display = 'none';

            // comment for no blur on the background
            let gallery = div.previousElementSibling;
            gallery.className = 'container gallery text-center';
        } else {
            let zoomedImageDiv = div.parentNode.nextElementSibling;

            zoomedImageDiv.style.display = "block";
            zoomedImageDiv.firstElementChild.src = img.src;

            // comment for no blur on the background
            let gallery = div.parentNode;          
            gallery.className += ' blurred disabled-background';          
        }
    }
}
