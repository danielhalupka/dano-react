var React = require('react');
var ReactDOM = require('react-dom');
var Book = require('./Book');

var Library = React.createClass({
    render: function(){
        var books = [
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
            ];
        var booksHtmlMap = books.map(function(book){
            return (
                <Book name={book.name} author={book.author}/>
            );
        });
        return (
            <div>
                <h3>Books in Library:</h3>
                <div>{booksHtmlMap}</div>  
            </div>   
        );
    }
});

module.exports = Library;