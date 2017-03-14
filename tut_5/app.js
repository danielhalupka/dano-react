var React = require('react');
var ReactDOM = require('react-dom');
var Library = require('./Library');

var App = React.createClass({
    render: function() {
        return ( 
            <div>
                <h1>Main app:</h1>
                <Library />
            </div>
        );
    }
});

ReactDOM.render( < App / > , document.getElementById('app'));