import React from "react";
import './Style.css';

import { useState } from "react";


const Test = () => <div className="Test">Hi There</div>;

const ShowHideRadio = () => {

	const [active, setactive] = useState(false);
	
	const handleactive = (event) =>{
		setactive(current => !current);
		event.currentTarget.classList.toggle('bgbg-salmon');
	}

	const [isshow, setIsShow] = useState(true);
	
	const handleClick = () => {
		setIsShow(false);
		//alert('Yes');		
	}

	// function alertGenerate() {
	// 	this.setValue
	// }
	
	
	return(
		<>
			<ul class="parentClass">
				<li>
					<label>
						<input type="radio" value="" name="anything" class="radioCls" id="yes" checked />Yes
					</label>
					<label>
						<input type="radio" value="" name="anything" class="radioCls" id="no" />No
					</label>
				</li>
			</ul>
			<div class="someData" id="first">
				<p>This is first data would be visible on landing</p>
			</div>
			<div class="someData " id="second">
				<h3>This is second data after no is checked</h3>
			</div>

					{/* {isshow ? <Test /> : null} */}
					{isshow && <div>Hi there</div>}
					<button className="{active ? 'bg-blue' : ''}" onClick={handleactive}>Toogle</button>
																
		</>
	)
	
}

export default ShowHideRadio;
