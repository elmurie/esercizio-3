export default class Like {
    get MODIFIERS() {
        return {
            clicked : 'heart--liked' // no css written for this class yet
        }
    }

    constructor(heart) {
        heart.addEventListener("click", (btn) => {
            heart.classList.toggle(this.MODIFIERS.clicked);
        })
    }
}