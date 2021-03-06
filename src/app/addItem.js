var React = require('react');

require('./css/addItem.css');

class AddItem extends React.Component {
    constructor(props) {
        super(props);        
        // This binding is necessary to make `this` work in the callback
        this.handleSubmit = this.handleSubmit.bind(this);        
      }

        render() {
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Hit Me"/>
            </form>
        );
    }

    //Custom Functions

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
};

module.exports= AddItem;