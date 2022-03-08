import { useState } from "react";

const About = () => {
	const [toggleList, setToggleList] = useState("tab1");
	const activeList = (value) => (value === toggleList ? "active" : "");
	return (
		<section id='about'>
			<div className='container'>
				<div className='roww'>
					{/* Main Title */}
					<div className='resumo_fn_main_title'>
						<h3 className='subtitle'>About Me</h3>
						<h3 className='title'>Biography</h3>
						<p className='desc'>
							{`I'm a lead software engineer with over 5+ years
                        of experience. Bilingual and well-spoken with
                        ability to work with a variety of team members and clients, with
                        an emphasis on startup culture and values.`}
						</p>
					</div>
					{/* /Main Title */}
					{/* About Information */}
					<div className='resumo_fn_about_info'>
						<div className='about_left'>
							<table>
								<tbody>
									<tr>
										<th>Name</th>
										<th>Bob Le</th>
									</tr>
									<tr>
										<th>Full Name</th>
										<th>Lê Minh Hoàng</th>
									</tr>
									<tr>
										<th>LinkedIn</th>
										<th>
											<a
												href='https://www.linkedin.com/in/bob-le/'
												target='_blank'>
												Profile
											</a>
										</th>
									</tr>
									<tr>
										<th>Alma Mater</th>
										<th>San Antonio, Texas</th>
									</tr>
									<tr>
										<th>Location</th>
										<th>Hanoi, Vietnam</th>
									</tr>
									<tr>
										<th>Phone</th>
										<th>
											<a href='tel:+2107252706'>(+1) 210 725 2706</a>
											<br />
											<a href='tel:+84917683158'>(+84) 91 768 3158</a>
										</th>
									</tr>
									<tr>
										<th>Whatsapp</th>
										<th>
											<a href='https://api.whatsapp.com/send?phone=2107252706'>
												Send Message
											</a>
										</th>
									</tr>
									<tr>
										<th>Email</th>
										<th>
											<a href='mailto:bob.hoangle@gmail.com'>
												bob.hoangle@gmail.com
											</a>
										</th>
									</tr>
								</tbody>
							</table>
						</div>
						<div className='about_right'>
							{/* Download CV Button */}
							<div className='resumo_fn_cv_btn'>
								<a href='img/Bob_Le_Resume22.pdf' download>
									<span className='icon'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											xmlnsXlink='http://www.w3.org/1999/xlink'
											version='1.1'
											x='0px'
											y='0px'
											viewBox='0 0 449.306 449.306'
											style={{ enableBackground: "new 0 0 449.306 449.306" }}
											xmlSpace='preserve'
											className='fn__svg replaced-svg'>
											<path d='M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z' />
										</svg>

										<svg
											xmlns='http://www.w3.org/2000/svg'
											xmlnsXlink='http://www.w3.org/1999/xlink'
											version='1.1'
											x='0px'
											y='0px'
											viewBox='0 0 449.306 449.306'
											style={{ enableBackground: "new 0 0 449.306 449.306" }}
											xmlSpace='preserve'
											className='fn__svg arrow replaced-svg'>
											<path d='M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z' />
										</svg>
									</span>
									<span>Download CV</span>
								</a>
							</div>
							{/* /Download CV Button */}
						</div>
					</div>
					{/* /About Information */}
					{/* Tabs Shortcode */}
					<div className='resumo_fn_tabs'>
						{/* Tab: Header */}
						<div className='tab_header'>
							<ul>
								<li className={activeList("tab1")}>
									<a href='#' onClick={() => setToggleList("tab1")}>
										Experience
									</a>
								</li>
								<li className={activeList("tab2")}>
									<a href='#' onClick={() => setToggleList("tab2")}>
										Education
									</a>
								</li>
								<li className={activeList("tab3")}>
									<a href='#' onClick={() => setToggleList("tab3")}>
										Skills
									</a>
								</li>
							</ul>
						</div>
						{/* /Tab: Header */}
						{/* Tab: Content */}
						<div className='tab_content'>
							{/* #1 tab content */}
							<div id='tab1' className={`tab_item ${activeList("tab1")}`}>
								{/* Boxed List */}
								<div className='resumo_fn_boxed_list'>
									<ul>
										<li>
											<div className='item'>
												<div className='item_top'>
													<h5>Stellar Capture, LLC, San Antonio, TX</h5>
													<span>( 2017 — Today )</span>
												</div>
												<h3>Lead Software Engineer</h3>
												<p>
													&bull; Translated customer and system requirements
													into robust software design with test-driven approach.
													<br />
													&bull; Reviewed project specifications and designed
													technology solutions that met or exceeded performance
													expectations.
													<br />
													&bull; Orchestrated efficient large-scale software
													deployments, including testing features and correcting
													code.
													<br />
												</p>
											</div>
										</li>
										<li>
											<div className='item'>
												<div className='item_top'>
													<h5>Complete Chess, LLC, San Antonio, TX</h5>
													<span>( 2017 — Today )</span>
												</div>
												<h3>Co-Founder & Webmaster</h3>
												<p>
													&bull; Established, initiated, and optimized business
													model strategies based on company targets, service
													details, and market research.
													<br />
													&bull; Designed, implemented and monitored web pages
													and sites for an e-commerce and learning management
													platform.
													<br />
												</p>
											</div>
										</li>
										<li>
											<div className='item'>
												<div className='item_top'>
													<h5>World's Greatest Videos, San Antonio, TX</h5>
													<span>( 2019 — 2020 )</span>
												</div>
												<h3>Lead Front-End Developer</h3>
												<p>
													&bull; Took concept mockups to develop web pages and
													enhance user experiences.
													<br />
													&bull; Represented web team at meetings with
													executives and discussed goals and milestones.
													<br />
												</p>
											</div>
										</li>
										<li>
											<div className='item'>
												<div className='item_top'>
													<h5>World's Greatest Videos, San Antonio, TX</h5>
													<span>( 2018 — 2019 )</span>
												</div>
												<h3>Front-End Developer</h3>
												<p>
													&bull; Developed high-volume, high-scale web
													application for a global, cash-awarded, continually
													running, short video social platform.
													<br />
													&bull; Managed CICD pipeline deployment to Amazon Web
													Services using tools like CircleCI, Jenkins.
													<br />
												</p>
											</div>
										</li>
									</ul>
								</div>
								{/* /Boxed List */}
							</div>
							{/* /#1 tab content */}
							{/* #2 tab content */}
							<div id='tab2' className={`tab_item ${activeList("tab2")}`}>
								{/* Boxed List */}
								<div className='resumo_fn_boxed_list'>
									<ul>
										<li>
											<div className='item'>
												<div className='item_top'>
													<h5>Trinity University - San Antonio</h5>
													<span>( 2014 — 2018 )</span>
												</div>
												<h3>Computer Science</h3>
												<p>
													Bachelor of Science majoring in Computer Science with
													a minor in Business Administration.{" "}
												</p>
											</div>
										</li>
									</ul>
								</div>
								{/* /Boxed List */}
							</div>
							{/* /#2 tab content */}
							{/* #3 tab content */}
							<div id='tab3' className={`tab_item ${activeList("tab3")}`}>
								{/* Progress Bar */}
								<div className='resumo_fn_progress_bar'>
									<div className='progress_item open' data-value={92}>
										<div className='item_in'>
											<h3 className='progress_title'>Front-End Development</h3>
											<span
												className='progress_percent'
												style={{ right: "8%" }}>
												92%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "92%" }} />
											</div>
										</div>
									</div>
									<div className='progress_item open' data-value={95}>
										<div className='item_in'>
											<h3 className='progress_title'>React.JS</h3>
											<span
												className='progress_percent'
												style={{ right: "5%" }}>
												95%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "95%" }} />
											</div>
										</div>
									</div>
									<div className='progress_item open' data-value={91}>
										<div className='item_in'>
											<h3 className='progress_title'>Gatsby.JS</h3>
											<span
												className='progress_percent'
												style={{ right: "9%" }}>
												91%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "91%" }} />
											</div>
										</div>
									</div>
									<div className='progress_item open' data-value={85}>
										<div className='item_in'>
											<h3 className='progress_title'>Amazon Web Services</h3>
											<span
												className='progress_percent'
												style={{ right: "15%" }}>
												85%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "85%" }} />
											</div>
										</div>
									</div>
									<div className='progress_item open' data-value={91}>
										<div className='item_in'>
											<h3 className='progress_title'>Wordpress</h3>
											<span
												className='progress_percent'
												style={{ right: "9%" }}>
												91%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "91%" }} />
											</div>
										</div>
									</div>
									<div className='progress_item open' data-value={87}>
										<div className='item_in'>
											<h3 className='progress_title'>Node.JS</h3>
											<span
												className='progress_percent'
												style={{ right: "13%" }}>
												87%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "87%" }} />
											</div>
										</div>
									</div>
									<div className='progress_item open' data-value={88}>
										<div className='item_in'>
											<h3 className='progress_title'>Next.JS</h3>
											<span
												className='progress_percent'
												style={{ right: "12%" }}>
												88%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "88%" }} />
											</div>
										</div>
									</div>
                  <div className='progress_item open' data-value={84}>
										<div className='item_in'>
											<h3 className='progress_title'>Python - Django</h3>
											<span
												className='progress_percent'
												style={{ right: "16%" }}>
												84%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "87%" }} />
											</div>
										</div>
									</div>
									<div className='progress_item open' data-value={87}>
										<div className='item_in'>
											<h3 className='progress_title'>Performance Tuning</h3>
											<span
												className='progress_percent'
												style={{ right: "13%" }}>
												87%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "87%" }} />
											</div>
										</div>
									</div>
									<div className='progress_item open' data-value={85}>
										<div className='item_in'>
											<h3 className='progress_title'>CI-CD Pipeline</h3>
											<span
												className='progress_percent'
												style={{ right: "15%" }}>
												85%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "85%" }} />
											</div>
										</div>
									</div>
									<div className='progress_item open' data-value={90}>
										<div className='item_in'>
											<h3 className='progress_title'>Agile Workflow</h3>
											<span
												className='progress_percent'
												style={{ right: "10%" }}>
												90%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "90%" }} />
											</div>
										</div>
									</div>
									<div className='progress_item open' data-value={88}>
										<div className='item_in'>
											<h3 className='progress_title'>Scrum Methodology</h3>
											<span
												className='progress_percent'
												style={{ right: "12%" }}>
												88%
											</span>
											<div className='bg_wrap'>
												<div className='progress_bg' style={{ width: "88%" }} />
											</div>
										</div>
									</div>
								</div>

								{/* /Progress Bar */}
								{/* Description */}
								<div className='resumo_fn_desc'>
									<p>
										Proactive Lead Software Developer offering 5+ years of
										experience specializes in Front-End Development. Experienced
										in working in different teams with various sizes, deploying
										robust and cutting-edge products for demanding clients.
										Skilled in project management, team leadership and
										independent problem-solving.
									</p>
								</div>
							</div>
							{/* /#2 tab content */}
						</div>
						{/* /Tab: Content */}
					</div>
					{/* /Tabs Shortcode */}
				</div>
			</div>
		</section>
	);
};

export default About;
