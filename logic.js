// $(".newlist").text("I changed this!")
// var newDiv = $("<div>")
// newDiv.text("I am adding a new div under the new list")
// $(".newlist").append(newDiv)

$(document).ready(function(){
    $(".newcard").on("click", function(){
        var title = prompt("What do we want to name our new card?");
        var newCard = $("<p>");
        newCard.text(title);
        newCard.addClass("card-text");
        $(this).prev().append(newCard)
    })
    $(".newlist").on("click", function(){
        var title = prompt("What do you want to name your new list?");
        if(title){
            var newDiv = $("<div class='col-sm-4'>");
            newDiv.addClass("card col-sm-4");
            var bodyDiv = $("<div>").addClass("card-body");
            bodyDiv.append("<h1 class='card-title'>" + title + "</h2>");
            var addCard = $("<div>").addClass("card-body newcard");
            var addLink = $("<a>").addClass("card-link").text("+ Add another card").attr("href",'#')
            addCard.append(addLink);
            newDiv.append(bodyDiv).append(addCard);
            newDiv.insertBefore($(this));
        }
    });
})