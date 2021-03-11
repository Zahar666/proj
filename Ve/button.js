class Buttons {
    constructor (listName, countButton) {
        this.listName = listName;
        this.countButton = countButton;

        this.elements = {
            leftbutton: document.querySelector('.leftbutton'),
        } 
    }

    create () {
        let block = document.createElement('div');
        block.classList.add('button__wrapper');
        for (let i = 0; i < this.countButton; i++) {
            let button = document.createElement('div');
            button.classList.add('button');
            button.innerHTML = this.listName[i];
            if (i === 0) {
                button.classList.add('buttonactiv');
            }
            block.appendChild(button);
        }
        return block;
    }

    init () {
        this.elements.leftbutton.appendChild(this.create());
    }
}

const table = document.querySelector('.casesbycontry__list')

console.log(table.children);

for (let i = 0; i < table.children.length; i++) {
    console.log(table.children[i].children);
}