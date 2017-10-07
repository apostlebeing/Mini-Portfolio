//INITIALIZE EMPTY LIST
var todo = [];
//PROMPT USER WHHAT THEY WOULD LIKE TO DO? - NEW, LIST, OR QUIT
var input = prompt("What would you like to do?");
//CAPTURE RESPONSE AND.. 
while(input !== "quit") {
    if(input === "list"){
        //..LIST ALL TO-DO'S IN CONSOLE
            console.log(todo);
            }else if(input === "new"){
        //..ASK FOR NEW TO-DO THEN PUSH NEW TO-DO TO LIST AND CONSOLE LOG IT
            var newTodo = prompt("What would you like to add?");
            todo.push(newTodo);
            console.log(todo)
            }
    var input = prompt("What would you like to do?");
}
console.log("Ok, You quit the App")
alert("Ok, You quit the App")