var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function() {
        return ( 
            <div>
                <h2> Hello world! </h2> 
            </div>
        );
    }
});

ReactDOM.render( < App / > , document.getElementById('app'));