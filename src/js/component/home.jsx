import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Container from "./container.jsx";
import FormToDo from "./formToDo.jsx";
import TaskList from "./taskList.jsx";

//create your first component
const Home = () => {


	return (
		<div className="container">
			<h1 className="text-center">To Do List</h1>
			<Container />

		</div>
	);
};

export default Home;
