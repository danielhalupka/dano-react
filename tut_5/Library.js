var React = require('react');
var ReactDOM = require('react-dom');
var Book = require('./Book');
var request = require('request');

var Library = React.createClass({
    getInitialState: function() {
       var state = {
                        books: [],
                        filteredBooks: [],
                        searchString:""
                    };
       this.initializeBooks();
       return state;
    },
    render: function(){
        var { filteredBooks } = this.state;
        var booksHtmlMap = filteredBooks.map(function(book){
            return (
                <Book key={book.name} name={book.name} author={book.author}/>
            );
        });
        return (
            <div>
                <h3>Books in Library:</h3>
                <div>{booksHtmlMap}</div>
                <div>
                    <h1>Search:</h1>
                    <input onChange={this.searchBooks} value={this.state.searchString} />
                </div>  
            </div>   

        );
    },
    searchBooks:function(event){
        this.setState({
            searchString: event.target.value,
            filteredBooks:this.state.books.filter(
                    function(book){
                        return book.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 || book.author.toLowerCase().indexOf(event.target.value.toLowerCase())  > -1;
                    })
        });
    },
    initializeBooks:function(){
        var self = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                self.setState({
                        books: response,
                        filteredBooks: response,
                        searchString:""
                    });
            }
        };
        xhttp.open("GET", "/books", true);
        xhttp.send();
    }


});



module.exports = Library;