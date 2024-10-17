import "../Body/Body1.css"
import ServicesCards from "../Body/servicesCards/ServicesCards.jsx"

function Body1(){
return <div className="servicesbody">
    <div className="bodyTitle">Our Services</div>
    <div className="bodyText">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</div>
    <div className="servicesdiv">
        <ServicesCards name={"Currency Wallet"} img={"./src/images/1.png"} />
        <ServicesCards name={"Security Storage"} img={"./src/images/2.png"} />
        <ServicesCards name={"Expert Support"} img={"./src/images/3.png"} />
    </div>
</div>
}

export default Body1;