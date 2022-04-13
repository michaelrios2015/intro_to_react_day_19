const app = document.querySelector('#app');
console.log(app);

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            items,
            message: ''
        };
    // const interval = setInterval(() => {
    //     items.push(Math.random());
    //     this.setState({ items });
    //     if (items.length === 11) {
    //         clearInterval(interval);
    //         this.setState({ message: 'DONE' });
    //     }
// }, 500)


    }
    render() {
        const { items, message } = this.state
        // with JSX, for webpack to read this we brung in babel win the webpack.config.js 
        return (
            <div>
                <h2> Count is {items.length} </h2>     
                <h3> { message } </h3>
                <button onClick={()=> { console.log ('hello')}}>Add an Item</button>
                <ul>
                    {
                        items.map( (item, idx)=><li key = { idx }>{ item }</li>)
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
