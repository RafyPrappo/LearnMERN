const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

//let's add task whent the button is clicked

addBtn.addEventListener("click", function() {

    const task = input.value.trim(); //'input' is nothing built in, it's actually the var from line 1.
                                     // Basically it points toward the input line at the html file where the user will put the task name
                                     // 'trim()' removes spaces at the start and end
                                     // value is built in. It extracts the value, the actual input from the variable 'input'
    if (task!="") {
        const li = document.createElement("li"); //the first 'li' after 'const' is a variable, we could also name it 'dog'
                                                 //the second one is the main thing, it tells the html to create <li>
        li.textContent = task; //it basically means---> <li>the value of the variable task</li>
                               // or --> <li>Get Bread</li>

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function() {
            
            list.removeChild(li);

        });

        li.appendChild(removeBtn); //it basically means---> <li>Get Bread<button>Remove</button></li>
        list.appendChild(li);
        input.value = ""; //clears input

    }
});