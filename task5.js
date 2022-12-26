function Product(props) {
    const {textColor, text} = props;
    const [color] = useState('red');

    const style = {
        backgroundColor: color,
        color: textColor
    }
    return (<div style={style}>i'm {color} and content {text}</div>);
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Product textColor="yellow" text="sdfsdfsdf"/>
            </header>
        </div>
    );
}

ReactDOM.render((
    <App/>
), document.getElementById('root'));