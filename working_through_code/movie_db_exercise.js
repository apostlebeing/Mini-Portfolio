var movies = [
    {title: "Dances with wolves", rating: 9, hasWatched: true},
    {title: "Tron", rating: 10, hasWatched: true},
    {title: "Bladerunner", rating: 9, hasWatched: false},
    {title: "Little Miss Sunshine", rating: 9, hasWatched: false},
    {title: "Batman", rating: 10, hasWatched: true}
]

function printSummary(someArray){
    someArray.forEach(function(elInArray){
        console.log(buildString(elInArray));
    })
}
function buildString(item){
    var result = "You have ";
    if(item.hasWatched){
        result += "watched "
    }else{
        result += "not seen "
    }
    result += "\"" + item.title + "\" - ";
    result += item.rating + " stars";
    return result;
}

printSummary(movies);

movies.push({
    title: "Smallville", rating: 9, hasWatched: true
})

printSummary(movies);
