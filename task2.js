function Func(props) {
    return <div>
            <a href={props.link}>{props.desc}</a>
        </div>;
}

function Func2() {
    return <Func link="https://learn.ztu.edu.ua/course/view.php?id=4872" desc="Фронтенд: React"/>
}

ReactDOM.render((
    <Func2/>
), document.getElementById('root'));