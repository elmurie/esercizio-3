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
            bodyOpen : 'filterbar__body--open'
        }
    }

    constructor() {
        console.log("filter found");
        this.button = document.querySelectorAll(this.SELECTORS.filterHead);
        this.content = document.querySelectorAll(this.SELECTORS.filterBody);
        this.button.forEach((item) => {
            item.addEventListener("click", (e) => {
                this.toggleFilter(e)
            })
        })
    }

    toggleFilter(event) {
        const targetElement = event.target.nextElementSibling;
        targetElement.classList.toggle(this.MODIFIERS.bodyOpen)
    }
}