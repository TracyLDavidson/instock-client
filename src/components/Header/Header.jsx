import "./Header.scss";


import logo from "./InStock-Logo_1x.png";


export default function Header() {
    return(
        <div className="header__allcontainer">
            <div className="header__container">
                <div className="header__logocontainer">
                    <img src={logo}></img>
                </div>

                <div className="header__twobuttonscontainer">
                    <div className="header__buttoncontainer">
                        <button type='button' className="header__buttoncontainer-warehouses" >Warehouses</button>
                    </div>
                    
                    <div className="header__buttoncontainer">
                        <button type='button' className="header__buttoncontainer-invebtory" >Inventory</button>
                    </div>
                

                </div>
            </div>
    
        </div>


    ) 
    
}