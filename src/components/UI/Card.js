import "./Card.css";
function Card(props) {
  console.log(props);
  const classes = props.className + " card";
  return <div className={classes}>{props.children}</div>;
}

export default Card;
