// First we prepare our variables
// We call the id of the contents from our html file and give them names here
// Not compulsory, but easier to reuse multiple times
const addBtn = document.getElementById("add");
const plusSign = document.createElement("span"); // (not used yet, but can be for future features)
const item = document.getElementById("myInput");
let lst = []; // our STATE array to track tasks


// Logic: if the add button is clicked
addBtn.addEventListener("click", function() {
    if(item.value != "") { // only proceed if the textbox is not empty

        lst.push(item.value); // add the item to our STATE array
        console.log(lst); // check the array in console (optional)

        const li = document.createElement("li"); // create a new list item
        li.textContent = item.value.trim() + " "; // set its text to the user input

        document.getElementById("myList").appendChild(li); // add this li to our ul in HTML

        const button = document.createElement("button"); // create a remove button
        button.textContent = "Remove"; // give it a label
        li.appendChild(button); // attach the button to this specific li

        // Remove logic: runs when this button is clicked
        button.addEventListener("click", function() {
            // Update STATE: remove the matching item from the array
            lst = lst.filter(x => x !== li.textContent.replace("Remove", "").trim());

            // Update DOM: remove the li from the ul
            li.remove();
        });

        item.value = ""; // clear the input box after adding
    }
});
