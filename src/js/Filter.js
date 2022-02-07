export default class Filter {
    get SELECTORS () {
        return {
            filterWrapper : '.filterbar',
            filterHead : '.filterbar__head',
            filterBody : '.filterbar__body'
        }
    }

    get MODIFIERS () {
        return {
            headOpen : 'filterbar__head--open',
            bodyOpen : 'filterbar__body--open'
        }
    }

    constructor(nodeElement) {
        this.wrapper = nodeElement;
        this.buttons = this.wrapper.querySelector(this.SELECTORS.filterHead);
        this.contents = this.wrapper.querySelector(this.SELECTORS.filterBody);
        this.buttons.addEventListener("click", (e) => {
                this.toggleFilter(e);
            })
    }

    toggleFilter(event) {
        this.buttons.classList.toggle(this.MODIFIERS.headOpen)
        this.contents.classList.toggle(this.MODIFIERS.bodyOpen)
    }
}

const labels = document.querySelectorAll(".filter_label");
const inputs = document.querySelectorAll(".filter_input")
labels.forEach( (label, i) => {
    label.setAttribute("for", i);
});
inputs.forEach( (input, i) => {
    input.id = i;
});