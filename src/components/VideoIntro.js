import YouTube from "react-youtube";

const VideoIntro = () => {
	const opts = {
		width: "100%",
		height: "100%"
	};
	return (
		<section id='video-intro'>
			<div className='container'>
				<div className='roww'>
					{/* Main Title */}
					<div className='resumo_fn_main_title'>
						<h3 className='subtitle'>Video Intro</h3>
						<h3 className='title'>About Me</h3>
						<div className='video-embed-container'>
							{/* <iframe
								className='intro-video'
								src='https://www.youtube.com/embed/DbEpaiI1Qls?autoplay=0&rel=0'
								frameBorder='0'
								allow='encrypted-media'
								allowFullScreen
								title='The 60 Second CV'
							/> */}
							<YouTube
								videoId='DbEpaiI1Qls'
								className='intro-video'
								opts={opts}
							/>
						</div>
					</div>
					<div className='resumo_fn_service_list'></div>
				</div>
			</div>
		</section>
	);
};

export default VideoIntro;
