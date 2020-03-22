const addButton = document.querySelector('.addBtn');
let inputVal = document.querySelector('.input');
const container = document.querySelector('.container');

// const check = 'fa-check-circle';
// const uncheck = 'fa-circle';
// const line_through = 'lineThrough';

class item{
    constructor(itemName){
        //create the item div
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="far fa-circle pr-2"></i>';
        // checkButton.innerHTML = '<i class="far fa-check-circle pr-2"></i>';
        checkButton.classList.add('checkBtn');

        let editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.classList.add('editBtn');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        removeButton.classList.add('removeBtn');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(checkButton);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton );

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }
    edit(input){
        input.disabled = !input.disabled;
    }

    remove(item){
        container.removeChild(item);
    }
}

// new item ("Sport");

function check(){
    if(inputVal.value != ""){
        new item(inputVal.value);
        inputVal.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})

// function switch_check(element){
//     element.classList.toggle(check);
//     element.classList.toggle(uncheck);
//     element.parentNode.querySelector('.text').classList.toggle(line_through);
// }

// $('#change_icon').click(function () {
//     var present = $('.change-icon_class');
//     if (present.hasClass('fa-circle')) {
//         present.removeClass('fa-circle')
//             .addClass('fa-check-circle')
//     }
//     else {
//         present.addClass('fa-circle')
//             .removeClass('fa-check-circle')
//     }
// })

// function fav() {
//     var icon = document.getElementById("change_icon");
//     if (icon.classList.contains("fa-circle")) {
//         icon.classList.remove("fa-circle");
//         icon.classList.add("fa-check-circle");
//     } else {
//         icon.classList.remove("fa-check-circle");
//         icon.classList.add("fa-circle");
//     }
// }

// function fav(element) {
//     element.classList.toggle("fa-check-circle");
// }

function fav() {
    var icon = document.getElementById("change_icon");
    if (icon.classList.contains("fa-circle")) {
        icon.classList.remove("fa-circle");
        icon.classList.add("fa-check-circle");
    } else {
        icon.classList.remove("fa-check-circle");
        icon.classList.add("fa-circle");
    }
}