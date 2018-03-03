var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');
import {browserHistory } from 'react-router';
import { BrowserRouter, Route,Link } from 'react-router-dom';

//Modules require
var TodoItems = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

class App extends React.Component {
    render() {
        return(
            //<Router history={browserHistory}>
            <BrowserRouter history={browserHistory}>
                <div>
                    <Route exact path="/" component={TodoComponent} />
                    <Route path="/about" component={About} />                    
                </div>
            </BrowserRouter>
        ); 
    }
};
    

//Create Component using react way instead of es6
class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
          
        this.state = {
            todos: ['wash up','eat some cheese','take a nap'],
            age:30
        };
        this.onAdd = this.onAdd.bind(this);
    }
    render() {
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                //<li>{item}</li>                
                <TodoItems item={item} key={index} onDelete={this.onDelete.bind(this)} />
            );
        }.bind(this)); 
        return( 
            <div id="todo-list">
            <Link to="/about">About</Link>
            <p>The busiest people have the most leisure...</p>
            <ul>
                {todos}
            </ul>
            <AddItem onAdd={this.onAdd} />
            </div>
        );
    }/*
    render() {
        //this
        var ager =setTimeout(function(){
            this.setState({
                age:45
            });
        }.bind(this),5000);
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                //<li>{item}</li>                
                <TodoItems item={item} key={index} onDelete={this.onDelete.bind(this)} />
            );
        }.bind(this)); 
        return( 
            <div>
                <h1>MyNameisDamanvirSingh</h1>
                <p>My name is admanavir asingh</p>                
                <p>{this.state.age}</p>
                <p>{this.props.mssg}</p>
                <p><strong>Cheese name: </strong> {this.props.cheese.name}</p>
                <p><strong>Cheese Smelll Factor: </strong> {this.props.cheese.smellFactor}</p>
                <p><strong>Cheese Price: </strong> {this.props.cheese.price}</p>
                
                <div id="todo-list">
                    <p>The busiest people have the most leisure...</p>
                    <ul>
                        {todos}
                    </ul>
                     <ul>
                        <li>{this.state.todos[0]}</li>
                        <li>{this.state.todos[1]}</li>
                        <li>{this.state.todos[2]}</li>
                    </ul>
                </div>

            </div>
            //So react dom help to insert html code inside the index file 
        );//  return() this is JSx action because would not normally write  html code in javascript. So jsx allow us to this for example: <h1> helele</h1>
    }*/
    //Custom Function 
    /*clicked() {
        console.log("You clicked me");
    }*/
    onDelete(item) {
        var updatedTodos = this.state.todos.filter(function(val,index) {
            return item !== val;
        });
        this.setState({
            todos:updatedTodos
        })
    }
    onAdd(item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos:updatedTodos
        });
    }

    //Lifecycle Functions

    componentWillMount() { // this function calls when component mounts the DOM before the render method
        console.log('componentWillMount');
    }

    componentDidMount() { // this function calls after the render method call and components is mounted to the dom
        // this is food place for grabbing of  external data.
        console.log('componentDidMount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
};



var myCheese =  {name: "Camembert",smellFactor: 'Extreme pong', price :'3.50'};

//put compoenent into html page
ReactDOM.render(<App mssg="i like cheese" cheese={myCheese}/>,document.getElementById('todo-wrapper'));

//ReactDOM.render(<TodoComponent mssg="i like cheese" cheese={myCheese}/>,document.getElementById('todo-wrapper'));