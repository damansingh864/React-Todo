var React = require('react');
var ReactDOM = require('react-dom');

require('./css/todoItem.css');

class TodoItems extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);     
    }
    render() {
        return(
            <li>
                <div className="todo-item">
						<span className="item-name">{this.props.item}</span>
                        <span className="item-delete" onClick={this.handleDelete} > x</span>
                </div>
            </li>
            
        );
    }

    //Custom Functions
    
    handleDelete() {
        this.props.onDelete(this.props.item);
    }
}


module.exports = TodoItems;