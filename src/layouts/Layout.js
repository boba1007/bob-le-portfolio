import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PanelContent from "../components/PanelContent";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { aTagClick, customCursor, dataImage, sticky } from "../utilits";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Nav from "./Nav";
import Triggger from "./Triggger";

const Layout = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
      if (checked) {
        document.querySelector("body").classList.add("light");
        window.localStorage.setItem('isDarkMode', false);
      } else {
        document.querySelector("body").classList.remove("light");
        window.localStorage.setItem('isDarkMode', true);
      }
      setDarkMode(checked)
  };

  useEffect(() => {
    let savedDarkMode = window.localStorage.getItem('isDarkMode') || false;
    if (savedDarkMode && savedDarkMode === 'true') {
			document.querySelector("body").classList.remove("light");
      setDarkMode(false)
		} else {
			document.querySelector("body").classList.add("light");
      setDarkMode(true)
		}
    dataImage();
    customCursor();
    aTagClick();
    window.addEventListener("scroll", sticky);
  }, []);
  const triggerMenu = () => {
    setTrigger(!trigger);
    document.querySelector(".resumo_fn_wrapper").classList.toggle("nav-opened");
  };
  return (
		<Fragment>
			<Head>
				<title>Bob Le - Software Engineer Portfolio</title>
			</Head>
			<div className='resumo_fn_wrapper'>
				{/* MODALBOX */}
				{/* <Modalbox /> */}
				{/* /MODALBOX */}
				<div className='resumo_fn_content'>
					{/* Main Left Part */}
					<div className='resumo_fn_left'>
						{/* Page */}
						<div className='resumo_fn_page'>
              {children}
            </div>
						{/* /Page */}
						<Footer />
					</div>
					{/* /Main Left Part */}
					{/* Main Right Part */}
					<div className='resumo_fn_right'>
						{/* Menu Triggger */}
            <DarkModeSwitch
							className="dark-mode-toggle"
							checked={isDarkMode}
							onChange={toggleDarkMode}
              sunColor='#f3f9f8'
							moonColor='#FE0300'
							size={25}
						/>
						<Triggger open={() => triggerMenu()} />
						{/* /Menu Triggger */}
						{/* Panel Content */}
						<PanelContent />
						{/* /Panel Content */}
					</div>
					{/* /Main Right Part */}
				</div>
				{/* Right Hidden Navigation */}
				<Nav close={() => triggerMenu()} trigger={trigger} />
				{/* /Right Hidden Navigation */}
				<Cursor />
			</div>
			{/* /Wrapper All */}
			{/* Scripts */}
			{/*[if lt IE 10]>  <![endif]*/}
			{/* /Scripts */}
		</Fragment>
	);
};

export default Layout;
