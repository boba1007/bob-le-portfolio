import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";
const Portfolio = () => {
	const [modal, setModal] = useState(false);
	const [modalValue, setModalValue] = useState(null);
	return (
		<section id='portfolio'>
			{modal && <Modalbox close={setModal} value={modalValue} />}
			<div className='container'>
				<div className='roww'>
					{/* Main Title */}
					<div className='resumo_fn_main_title'>
						<div className='my__nav'>
							<a href='#' className='prev'>
								<span />
							</a>
							<a href='#' className='next'>
								<span />
							</a>
						</div>
						<h3 className='subtitle'>Portfolio</h3>
						<h3 className='title'>Featured Projects</h3>
					</div>
					{/* /Main Title */}
				</div>
			</div>
			<div className='container noright'>
				<div className='roww'>
					<Swiper
						{...portfolioSliderProps}
						className='owl-carousel modal_items'
						data-from='portfolio'>
						<SwiperSlide
							className='item modal_item'
							onClick={() => {
								setModal(true);
								setModalValue(1);
							}}
							data-index={1}>
							<div className='img_holder'>
								<img src='img/thumb/square.jpg' alt='image' />
								<div className='abs_img' data-bg-img='img/portfolio/6.jpg' />
							</div>
							<div className='title_holder'>
								<p>web, responsive</p>
								<h3>
									<a href='#'>Forever Essential</a>
								</h3>
							</div>
							<div className='fn__hidden'>
								<p className='fn__cat'>web, responsive</p>
								<h3 className='fn__title'>Forever Essential</h3>
								<div className='img_holder'>
									<img src='img/thumb/square.jpg' alt='image' />
									<div className='abs_img' data-bg-img='img/portfolio/6.jpg' />
								</div>
								<p className='fn__desc'>
									Forever Essential is both a digital and a physical memorial
									honoring California healthcare workers who we’ve lost to
									COVID-19. Through this memorial, we hope to transform our
									private pain into public dignity and to carry forward the
									legacies of those we’ve lost. The physical memorial will make
									stops in cities across California, offering a space for our
									community to remember and grieve.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide
							className='item modal_item'
							onClick={() => {
								setModal(true);
								setModalValue(2);
							}}
							data-index={2}>
							<div className='img_holder'>
								<img src='img/thumb/square.jpg' alt='image' />
								<div className='abs_img' data-bg-img='img/portfolio/1.jpg' />
							</div>
							<div className='title_holder'>
								<p>web, responsive, campaign</p>
								<h3>
									<a href='#'>The Georgia Voter Guide</a>
								</h3>
							</div>
							<div className='fn__hidden'>
								<p className='fn__cat'>web, responsive, campaign</p>
								<h3 className='fn__title'>The Georgia Voter Guide</h3>
								<div className='img_holder'>
									<img src='img/thumb/square.jpg' alt='image' />
									<div className='abs_img' data-bg-img='img/portfolio/1.jpg' />
								</div>
								<p className='fn__desc'>
									A personalized voter guide with intelligent ballot
									determination based on address input. The Georgia Voter Guide
									provided Georgian voters with the information they needed to
									cast their votes with confidence in the 2020 General Election
									and Georgia special runoff election. Helped over 500,000
									unique visitors get informed about their election choices,
									with over 50,000 unique visitors on election days.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide
							className='item modal_item'
							onClick={() => {
								setModal(true);
								setModalValue(3);
							}}
							data-index={3}>
							<div className='img_holder'>
								<img src='img/thumb/square.jpg' alt='image' />
								<div className='abs_img' data-bg-img='img/portfolio/2.jpg' />
							</div>
							<div className='title_holder'>
								<p>web, responsive</p>
								<h3>
									<a href='#'>Healthcare Rising Arizona</a>
								</h3>
							</div>
							<div className='fn__hidden'>
								<p className='fn__cat'>web, responsive</p>
								<h3 className='fn__title'>Healthcare Rising Arizona</h3>
								<div className='img_holder'>
									<img src='img/thumb/square.jpg' alt='image' />
									<div className='abs_img' data-bg-img='img/portfolio/2.jpg' />
								</div>
								<p className='fn__desc'>
									The leading voice for strengthening Arizona’s healthcare
									system. We fight for the rights and protections of healthcare
									workers and patients across the state. We bring together the
									voices of everyone who is impacted by our healthcare system
									and use our collective power to push for real policy change to
									make our healthcare system better.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide
							className='item modal_item'
							onClick={() => {
								setModal(true);
								setModalValue(4);
							}}
							data-index={4}>
							<div className='img_holder'>
								<img src='img/thumb/square.jpg' alt='image' />
								<div className='abs_img' data-bg-img='img/portfolio/3.jpg' />
							</div>
							<div className='title_holder'>
								<p>web, responsive, campaign</p>
								<h3>
									<a href='#'>Our Choice Central Oregon</a>
								</h3>
							</div>
							<div className='fn__hidden'>
								<p className='fn__cat'>web, responsive, campaign</p>
								<h3 className='fn__title'>Our Choice Central Oregon</h3>
								<div className='img_holder'>
									<img src='img/thumb/square.jpg' alt='image' />
									<div className='abs_img' data-bg-img='img/portfolio/3.jpg' />
								</div>
								<p className='fn__desc'>
									A simple and clear side-by-side comparison of the State Senate
									and House candidates running to represent Central Oregon in
									Salem.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide
							className='item modal_item'
							onClick={() => {
								setModal(true);
								setModalValue(5);
							}}
							data-index={5}>
							<div className='img_holder'>
								<img src='img/thumb/square.jpg' alt='image' />
								<div className='abs_img' data-bg-img='img/portfolio/4.jpg' />
							</div>
							<div className='title_holder'>
								<p>web, responsive, campaign</p>
								<h3>
									<a href='#'>The Oregon Voter Guide</a>
								</h3>
							</div>
							<div className='fn__hidden'>
								<p className='fn__cat'>web, responsive, campaign</p>
								<h3 className='fn__title'>The Oregon Voter Guide</h3>
								<div className='img_holder'>
									<img src='img/thumb/square.jpg' alt='image' />
									<div className='abs_img' data-bg-img='img/portfolio/4.jpg' />
								</div>
								<p className='fn__desc'>
									Simple and clear information about Oregon’s 2020 ballot
									presented by a coalition of organizations dedicated to
									promoting economic fairness, public education, healthcare
									access, and environmental justice.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide
							className='item modal_item'
							onClick={() => {
								setModal(true);
								setModalValue(6);
							}}
							data-index={6}>
							<div className='img_holder'>
								<img src='img/thumb/square.jpg' alt='image' />
								<div className='abs_img' data-bg-img='img/portfolio/5.jpg' />
							</div>
							<div className='title_holder'>
								<p>web, responsive</p>
								<h3>
									<a href='#'>Stellar Capture</a>
								</h3>
							</div>
							<div className='fn__hidden'>
								<p className='fn__cat'>web, responsive</p>
								<h3 className='fn__title'>Stellar Capture</h3>
								<div className='img_holder'>
									<img src='img/thumb/square.jpg' alt='image' />
									<div className='abs_img' data-bg-img='img/portfolio/5.jpg' />
								</div>
								<p className='fn__desc'>
									A team led by career veterans of digital product design and
									development to create meaningful solutions. Equipped with the
									knowledge and hands-on experience of today’s modern tools and
									technologies, we strive to innovate and create the highest
									quality products possible.
								</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
