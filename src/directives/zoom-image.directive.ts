import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[zoom-image]'
})
export class ZoomImageDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.color = 'yellow';
    }

    @HostListener('click') onClick() {
        console.log('HERE!')
        this.zoom();
    }

    private zoom() {
        const gallery = this.el.nativeElement.parentNode;
        const div = this.el.nativeElement.parentNode.nextElementSibling;
        const img = this.el.nativeElement.parentNode.nextElementSibling.firstElementChild;
        console.log(this.el.nativeElement);
        console.log(this.el.nativeElement.parentNode);
        console.log(this.el.nativeElement.parentNode.nextElementSibling);
        console.log(this.el.nativeElement.parentNode.nextElementSibling.firstElementChild);
        if (img.src && img.src.indexOf("localhost") < 0) {
            // this.el.nativeElement.style.width="";
            // this.el.nativeElement.style.position="";
            // this.el.nativeElement.style.top="";
            // this.el.nativeElement.style.left="";
            // this.el.nativeElement.style.zIndex="";
            console.log("src");
            console.log(img.src);
            img.src = "";
            div.style.display = "none";

            console.log(gallery);
            gallery.className = "container gallery text-center";

        } else {
            // this.el.nativeElement.style.width="90%";
            // this.el.nativeElement.style.position="fixed";
            // this.el.nativeElement.style.top="25%";
            // this.el.nativeElement.style.left="30%";
            // this.el.nativeElement.style.zIndex="200";
            console.log("no src");
            
            div.style.display = "block";

            img.src = this.el.nativeElement.firstElementChild.src;

            gallery.className += " blurred";
            gallery.className += " disabled-background";
        }
    }
}

// .gallery .selected {
//     width: 100%;
//     position: fixed;
//     top: 25%;
//     left: 0;
//     z-index: 200;
// }

// .gallery .selected img {
//     float: left;
//     border: 1px solid black;
//     border-radius: 25px;
//     width: 75%;
//     position: absolute;
//     margin: 0 auto;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
// }