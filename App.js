import React from "react";
import ReactDOM from "react-dom/client";
import resData from "./utils/mockData";
const Header = () => {
    return(
    <div className="header">
        <div className="logo-container">
            <img 
            className="logo"
             src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
        </div>
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>about us</li>
                <li>contact us</li>
                <li> card </li>
            </ul>

        </div>
    </div>)
};
const ResturentCard = (props)=>{
    const {resInfo, index} = props;
    const resURL = 'https://picsum.photos/300/200?food=';
    
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={resURL + index}></img>
            <h3>{resInfo.name}</h3>
            <h4>{resInfo.cusine}</h4>
            <h4>{resInfo.starRating}</h4>
            <h4>{resInfo.eta}</h4>
        </div>
    )
}
const Body = () =>{
    return(
        <div className="body">
            <div className="serach">search</div>
            <div className="res-container">
              {resData.map(resturant=> <ResturentCard key={resturant.id} index={resturant.id} resInfo={resturant}/>)}

               
                 

            </div>
        </div>
    )
}
const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
