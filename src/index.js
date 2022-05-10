import React from 'react';
import ReactDOM from 'react-dom';

const app = document.querySelector('#app');
console.log(app);

// so we can seperate out more componenemts 
const Item = ({ item, removeItem, idx })=> {
    return (
        <li>
            { item }
            <button onClick = { ()=> removeItem(idx) }>x</button>
        </li>
    );
}

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            items,
            message: ''
        };
        // putting in a function
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    addItem(){
        this.setState({ items: [...this.state.items, Math.random()] });
    }

    removeItem(idx){
        const items = this.state.items.filter((_, _idx)=> _idx != idx);
        this.setState({ items });
    }

    
    render() {
        const { items, message } = this.state
        // that seems crazy 
        const { addItem, removeItem } = this; 
        // with JSX, for webpack to read this we brung in babel win the webpack.config.js 
        return (
            <div>
                <h2> Count is {items.length} </h2>     
                <h3> { message } </h3>
                <button onClick={ addItem }>Add an Item</button>
                <ul>
                    {
                        items.map( (item, idx)=> <Item idx = { idx } removeItem = { removeItem } key={ idx } item={ item } />)
                    }
                </ul>
                </div>
        )

        // without JSX
        // return React.createElement(
        //     'div',
        //     null,
        //     React.createElement(
        //         'h2',
        //         null,
        //         `Count is ${items.length}`
        //     ),
        //     React.createElement(
        //         'h3',
        //         null,
        //         message
        //     ),
        //     React.createElement(
        //         'ul',
        //         null,
        //         items.map((item, idx) => React.createElement('li', { key: idx }, item))
        //     )
        // );
    }
}

const items = [1, 2];

// so this is the magic that gabs our one html root 
// // component and attached the react components to it
ReactDOM.render(<App/>, app);
