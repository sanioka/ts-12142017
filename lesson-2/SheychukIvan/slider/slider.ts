type SliderOpt = {
    sliderElem: HTMLElement
};

type Coords = {
    top: number,
    left: number
}

class Slider {
    public sliderElem: HTMLElement;

    public constructor(
        opt: SliderOpt
    ) {
        const thumbElem = opt.sliderElem.children[0];
        this.sliderElem = opt.sliderElem;
        console.log(thumbElem);
        thumbElem.addEventListener("mousedown", this.mouseDown.bind(this));
        // thumbElem.addEventListener("dragstart", () => this.dragStart);
    }
    
    protected mouseDown(ev: MouseEvent) {
        console.log("mouse down", this);
        const thumbElem: HTMLDivElement = ev.currentTarget as HTMLDivElement;
        const thumbCoords: Coords = this.getCoords(thumbElem);
        const sliderCoords: Coords = this.getCoords(this.sliderElem);
        const shiftX = ev.pageX - thumbCoords.left;

        document.onmousemove = function (e) {
            let newLeft = e.pageX - shiftX - sliderCoords.left;
    
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;

            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
    
            thumbElem.style.left = newLeft + 'px';
        }
        
        document.addEventListener("mouseup", this.mouseUp);

        return false;
    };

    protected mouseUp() {
        document.onmousemove = document.onmouseup = null;
    };

    protected dragStart() {
        return false;
    };

    public getCoords(elem: HTMLElement): Coords { 
        var box = elem.getBoundingClientRect();
    
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    
    }
}

const sliderElem: HTMLElement = document.getElementById('slider') as HTMLElement;
const slider: Slider = new Slider({
    sliderElem
});