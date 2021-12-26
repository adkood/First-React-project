import './card.css';
function card(props)
{
    let Classes = 'card ' + props.className;
    return <div className={Classes}>{props.children}</div>   //this children prop is the value between 
}

export default card;