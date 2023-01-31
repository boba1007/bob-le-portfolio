import { useEffect } from "react";

const PanelContent = ({darkMode}) => {
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
	let imageUrl = !darkMode ? "img/profile/bob4.jpeg" : 'img/profile/bob2.png';
	return (
		<div className='right_in'>
			<div className='right_top'>
				<div className='border1' />
				<div className='border2' />
				<div className='img_holder'>
					<a href="/#video-intro">
						<img src='img/thumb/square.jpg' alt='image' />
						<div className='abs_img' style={{ backgroundImage: `url(${imageUrl})` }} />
					</a>
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
					<span className='text'>I’m available for a new project. Contact me</span>
				</a>
			</div>
			<div style={{ textAlign: "center", marginTop: "30px" }}>
				<p>"He who has a why to live by can bear almost any how." - Friedrich Nietzche</p>
			</div>
		</div>
	);
};

export default PanelContent;
