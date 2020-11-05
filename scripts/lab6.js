//lab6 JavaScript file

    book1 = {
    author: "William Shakespeare",
    title : "The Tempest",
    genre : "Historical Fiction"
    };

    book2 = {
    author: "Stephen King",
    title : "The Shining",
    genre : "Horror"
    };

    book3 = {
    author: "Anne Frank",
    title : "The Diary of Anne Frank",
    genre : "Non-Fiction"
    };

var bookArray = new Array();

bookArray[0] = book1;
bookArray[1] = book2;
bookArray[2] = book3;

var title,author,genre;

function addBook(){
    for(var i=3;i<6;i++){
        book={};
        book.title= prompt("Enter the title of book "+(i+1) +" :");
        book.author= prompt("Enter the author of book "+(i+1) +" :");
        book.genre= prompt("Enter the genere of book "+(i+1)+" :");
        bookArray[i] = book;
    }
}

function displayRecommendations(){
    console.log(bookArray.length);
    for(var i=0;i<bookArray.length;i++){
        var h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode("Book "+(i+1)));
        document.getElementById('bookList').appendChild(h2);
        var list = document.createElement('ul');
        var item = document.createElement('li');

        var text = bookArray[i]['title'] + ", Written By: " + bookArray[i]['author'] + ", Genre: " + bookArray[i]['genre'];

        item.appendChild(document.createTextNode(text));
        list.appendChild(item);
        document.getElementById('bookList').appendChild(list)
    }
}

addBook();
displayRecommendations();
