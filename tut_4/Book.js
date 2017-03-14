var React = require('react');
var ReactDOM = require('react-dom');

var Book = React.createClass({

    getInitialState: function() {
        return {
            likes: 0
        };
    },
    render:function(){
        var {name, author} = this.props;
        var {likes} = this.state;
        return (
            <div>
                <h3>Name: {name}</h3>
                <h5>Author: {author}</h5>
                <div> 
                    <h5>Likes:{likes}</h5>
                    <button onClick={this.like}>+</button>
                    <button onClick={this.dislike}>-</button>
                </div>
            </div>
        );
    },
    like:function(){
        this.setState({likes:this.state.likes+1});
    },
    dislike:function(){
        this.setState({likes:this.state.likes-1});
    }
});

module.exports = Book;