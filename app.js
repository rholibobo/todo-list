var todo_text = document.querySelector('.text-input');
var add_button = document.querySelector(".add-button");
var cancel_button1 = document.querySelector('.button1');
var cancel_button2 = document.querySelector('.button2');
var cancel_button3 = document.querySelector('.button3');
var visible_text = document.querySelector('.center2');
var for_text1 = document.querySelector('.text1');
var for_text2 = document.querySelector('.text2');
var for_text3 = document.querySelector('.text3');

var error_message = document.querySelector('.error-message');


add_button.addEventListener('click', function () {
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "remove-button");
    deleteButton.addEventListener('click', function () {
        text_field.remove()
        this.remove();
        
        

    });
    
    
    deleteButton.appendChild(document.createTextNode("x"));

    var text_field = document.createElement("Input");
    text_field.setAttribute("class", "text");
    text_field.setAttribute("value", todo_text.value);

    // todo_text.value = todo_text.value.slice(0);

    visible_text.setAttribute("type", "text");
    visible_text.appendChild(text_field);
    visible_text.appendChild(deleteButton);
    

    // visible_text.setAttribute("type", "text");
    visible_text.appendChild(text_field);
    visible_text.appendChild(deleteButton);

    



    if (todo_text.value === "") {
        error_message.textContent = "Error, no text input!!";
        text_field.remove();
        deleteButton.remove();

       
        
    }
    else {
        error_message.textContent = "";
        todo_text.value = "";
    
    }

    
   

})


cancel_button1.addEventListener('click', function () {
    for_text1.remove();
    this.remove();
})
cancel_button2.addEventListener('click', function () {
    for_text2.remove();
    this.remove();
})
cancel_button3.addEventListener('click', function () {
    for_text3.remove();
    this.remove();
})

document.addEventListener('keydown', function (event) {
    let enter_button = event.key;
    action(enter_button);
    // console.log(event);
})
function action(key) {
    switch (key) {
        case "Enter":
            var deleteButton = document.createElement("button");
            deleteButton.setAttribute("class", "remove-button");
            deleteButton.addEventListener('click', function () {
                text_field.remove()
                this.remove();

            });
            deleteButton.appendChild(document.createTextNode("x"));

            var text_field = document.createElement("Input");
            text_field.setAttribute("class", "text");
            text_field.setAttribute("value", todo_text.value);


            visible_text.setAttribute("type", "text");

            visible_text.appendChild(text_field);
            visible_text.appendChild(deleteButton);

            if (todo_text.value == "") {
                error_message.textContent = "Error, no text input!!";
                text_field.remove();
                deleteButton.remove();
            }
            else {
                error_message.textContent = "";
                todo_text.value = "";

            }
            break;
        default:
            break;
    }
}










