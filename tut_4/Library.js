var React = require('react');
var ReactDOM = require('react-dom');
var Book = require('./Book');

var Library = React.createClass({
      getInitialState: function() {
        var state = {
            books: [
                {
                    name:"Book 1",
                    author:"Author 1"
                },
                {
                    name:"Book 2",
                    author:"Author 2"
                },
                {
                    name:"Book 3",
                    author:"Author 3"
                }
            ],
            searchString:""
        };

        state.filteredBooks = state.books;

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
    }


});

module.exports = Library;