import HeaderRightContent from "./headerrightcontent/HeaderRightContent.jsx";
import "../Header/Header.css";

function Header (){
    return <header>
        <div className="headerchild">
            <div className="childleft">
                <span className="logospan">Finexo</span>
            </div>
            <div className="childright">
            <HeaderRightContent title={"HOME"} />
            <HeaderRightContent title={"ABOUT"} />
            <HeaderRightContent title={"SERVICES"} />
            <HeaderRightContent title={"WHY US"} />
            <HeaderRightContent title={"TEAM"} />
            </div>
        </div>
    </header>
}

export default Header;