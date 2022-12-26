const cities = [
    {id: 1, name: "Chicago"},
    {id: 2, name: "Los Angeles"},
    {id: 3, name: "New York"},
    {id: 4, name: "Las Vegas"}
]
function Option(props) {
    return <option id={props.id.id}>{props.name.name}</option>;
}

function Select() {
    return <select>
        <Option id={cities[0]} name={cities[0]}/>
        <Option id={cities[1]} name={cities[1]}/>
        <Option id={cities[2]} name={cities[2]}/>
        <Option id={cities[3]} name={cities[3]}/>
    </select>
}

ReactDOM.render((
    <Select/>
), document.getElementById('root'));