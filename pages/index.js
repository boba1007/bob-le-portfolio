import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Portfolio from "../src/components/Portfolio";
import Services from "../src/components/Services";
import Layout from "../src/layouts/Layout";
import VideoIntro from "../src/components/VideoIntro";

const Index = () => {
  return (
    <Layout>
      <Home />
      {/* /Home Section */}
      {/* About Section */}
      <About />
      {/* /About Section */}
      {/* Portfolio Section */}
      <Portfolio />
      {/* /Portfolio Section */}
      {/* Services Section */}
      <Services />
      {/* /Services Section */}
      {/* Contact Section */}
      <VideoIntro/>
      <Contact />
      {/* /Contact Section */}
    </Layout>
  );
};

export default Index;
