import "../servicesCards/servicesCards.css"

function ServicesCards (props){
return <div className="cardfather">
    <img className="img" src={props.img} alt="" />
    <div className="cardname">{props.name}</div>
    <div className="cardtext">fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</div>
    <div className="readmore">Read More</div>
</div>
}

export default ServicesCards;