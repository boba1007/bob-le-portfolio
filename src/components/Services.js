const Services = () => {
	return (
		<section id='services'>
			<div className='container'>
				<div className='roww'>
					{/* Main Title */}
					<div className='resumo_fn_main_title'>
						<h3 className='subtitle'>Services</h3>
						<h3 className='title'>What I Do</h3>
						<p className='desc'>
							I help ambitious businesses and organizations building robust
							application from scratch; developing ideas & solutions; and
							growing scalable projects, driving web traffic.
						</p>
					</div>
					{/* /Main Title */}
					{/* Services List */}
					<div className='resumo_fn_service_list'>
						<ul>
							<li>
								<div className='item'>
									<div className='item_left'>
										<h3>Build applications from scratch.</h3>
										<p>
											Review project specifications to provide resourceful
											recommendations and solutions to solve business problems.
											Create detailed breakdown plans, milestones, and
											deliverables in order to fulfill project goals and
											requirements.
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='item'>
									<div className='item_left'>
										<h3>Develop robust solutions.</h3>
										<p>
											High understanding of products and technologies involved
											to develop robust, responsive, and cutting-edge solutions
											that are unique and stand out from competitions.
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='item'>
									<div className='item_left'>
										<h3>Grow scalable projects.</h3>
										<p>
											Performance tuning, improving UX-UI experience, driving
											traffic so as to extend product's reach, better user's
											experience, and take product to the next level.
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					{/* /Services List */}
				</div>
			</div>
		</section>
	);
};

export default Services;
