//INITIALIZE EMPTY LIST
var todos = ["shower"];
//PROMPT USER WHHAT THEY WOULD LIKE TO DO? - NEW, LIST, OR QUIT
var input = prompt("What would you like to do?");
//CAPTURE RESPONSE AND.. 
while (input !== "quit") {
    if (input === "list") {
       listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}
console.log("Ok, You quit the App")
alert("Ok, You quit the App")

function listTodos(){
    console.log("**********")
    todos.forEach(function (todo, index) {
        console.log(index + " : " + todo);
    });
    console.log("**********");
}

function addTodo(){
    //..ASK FOR NEW TO-DO THEN PUSH NEW TO-DO TO LIST AND CONSOLE LOG IT
    var newTodo = prompt("What would you like to add ?");
    todos.push(newTodo);
    console.log(todos + " added to list")
}

function deleteTodo(){
    //ask for index of todo to delete
    var index = prompt("Enter index of to-do to delete")
    //delet item by inex
    todos.splice(index, 1);
    alert("item " + index + " deleted")
}