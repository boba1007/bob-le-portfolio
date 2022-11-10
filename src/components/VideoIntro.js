const VideoIntro = () => {
	return (
		<section id='video-intro'>
			<div className='container'>
				<div className='roww'>
					{/* Main Title */}
					<div className='resumo_fn_main_title'>
						<h3 className='subtitle'>Video Intro</h3>
                        <h3 className='title'>About Me</h3>
                        <div className='video-embed-container'>
							<iframe
								className='intro-video'
								src='https://www.youtube.com/embed/DbEpaiI1Qls?cc_load_policy=1&cc_lang_pref=en&autoplay=0&rel=0'
								frameBorder='0'
								allow='encrypted-media'
								allowFullScreen
								title='The 60 Second CV'
							/>
						</div>
					</div>
					<div className='resumo_fn_service_list'>

					</div>
				</div>
			</div>
		</section>
	);
};

export default VideoIntro;
