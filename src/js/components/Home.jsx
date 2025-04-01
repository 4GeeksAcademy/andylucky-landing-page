import React from "react";
import { NavBar } from "./navbar";
import { Jumbotron } from "../Jumbotron";
import { Card } from "./card";
import { LandingFooter } from "./footer"; 
import  img2 from "../../img/2.jpg"
import  img3 from "../../img/3.jpg"
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
		<NavBar/>
		<Jumbotron/>
		<div className="container-fluid mx-3"></div>
		<div className="row g-3 mx-3">
			<Card imageUrl={img2} />
			<Card imageUrl={img3} />
			<Card imageUrl={img2} />
			<Card imageUrl={img3} />
		
		</div>
		<LandingFooter/>
	
		</>
	);
};

export default Home;