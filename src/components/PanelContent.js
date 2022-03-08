import { useEffect } from "react";

const PanelContent = () => {
	useEffect(() => {
		const Typed = require("typed.js");
		new Typed(".animated_title", {
			strings: [
				"Bob Le.",
				"a Software Engineer.",
				"Made in Vietnam.",
				"Assembled in Texas.",
				"Operating Worldwide.",
			],
			loop: true,
			smartBackspace: false,
			typeSpeed: 40,
			startDelay: 700,
			backDelay: 3e3,
		});
	}, []);
	return (
		<div className='right_in'>
			<div className='right_top'>
				<div className='border1' />
				<div className='border2' />
				<div className='img_holder'>
					<img src='img/thumb/square.jpg' alt='image' />
					<div className='abs_img' data-bg-img='img/boble.png' />
				</div>
				<div className='title_holder'>
					<h5>Hello world! I AM</h5>
					<p className='h3'>
						<span className='animated_title' />
					</p>
				</div>
			</div>
			<div className='right_bottom'>
				<a href='#contact'>
					<span className='circle' />
					<span className='text'>I’m available for a new project. Hire me</span>
				</a>
			</div>
			<div style={{ textAlign: "center", marginTop: "30px" }}>
				<p style={{fontFamily:"serif", fontWeight:"bold", padding:"7px"}}>("Hello World!")</p>
				You do not know me,
				<br />
				but I see you got a query.
				<br />
				Is it false? Could it be faulty?
				<br />
				The answer is true, it is only.
        <br/>
				<a href='#contact' style={{ color: "#44993b" }}>
					Contact me.
				</a>
			</div>
		</div>
	);
};

export default PanelContent;
