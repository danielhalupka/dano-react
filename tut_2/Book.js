var React = require('react');
var ReactDOM = require('react-dom');

var Book = React.createClass({
    render:function(){
        var {name, author} = this.props;
        return (
            <div>
                <h3>Name: {name}</h3>
                <h5>Author: {author}</h5>
            </div>
        );
    }
});

module.exports = Book;