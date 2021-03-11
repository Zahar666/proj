class Head {
    constructor (title, subtitle) {
        this.title = title;
        this.subtitle = subtitle;

        this.elements = {
            globalCases: document.querySelector('.globalcases'),
        }
    }

    create () {
        let block = document.createElement('div');
        block.classList.add('globalcases__wrapper');
        let title = document.createElement('div');
        title.classList.add('globalcases__title');
        title.innerHTML = this.title;
        let subtitle = document.createElement('div');
        subtitle.classList.add('globalcases__subtitle');
        subtitle.innerHTML = this.subtitle;
        block.appendChild(title);
        block.appendChild(subtitle);
        return block;
    }

    init () {
        this.elements.globalCases.appendChild(this.create());
    }
}






