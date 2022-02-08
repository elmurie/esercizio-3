export default class Like {
    get MODIFIERS() {
        return {
            clicked : 'heart--liked'
        }
    }

    constructor(heart) {
        heart.addEventListener("click", (btn) => {
            // btn.preventDefault();
            heart.classList.toggle(this.MODIFIERS.clicked);
        })
    }
}