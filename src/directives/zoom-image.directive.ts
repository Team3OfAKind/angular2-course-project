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
        // this.zoom();
    }

    private zoom(){
        console.log(this.el.nativeElement);
        if(this.el.nativeElement.style.width==="100%"){
            this.el.nativeElement.style.height = "200px";
        }else{
            this.el.nativeElement.style.width="100%";
            this.el.nativeElement.style.position="fixed";
            this.el.nativeElement.style.top="25%";
            this.el.nativeElement.style.left="0";
            this.el.nativeElement.style.zIndex="200";
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