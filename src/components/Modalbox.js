import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "FOREVER ESSENTIAL",
      tag: "web, responsive",
      desc: [
        { p: "Forever Essential is both a digital and a physical memorial honoring California healthcare workers who we’ve lost to COVID-19. Through this memorial, we hope to transform our private pain into public dignity and to carry forward the legacies of those we’ve lost. The physical memorial will make stops in cities across California, offering a space for our community to remember and grieve." }
      ]

    },
    {
      name: "THE GEORGIA VOTER GUIDE",
      tag: "web, responsive, campaign", 
      desc: [
        { p: "A personalized voter guide with intelligent ballot determination based on address input. The Georgia Voter Guide provided Georgian voters with the information they needed to cast their votes with confidence in the 2020 General Election and Georgia special runoff election. Helped over 500,000 unique visitors get informed about their election choices, with over 50,000 unique visitors on election days."}
      ]

    },
    {
      name: "HEALTHCARE RISING ARIZONA",
      tag: "web, responsive",
      desc: [
        { p: "The leading voice for strengthening Arizona’s healthcare system. We fight for the rights and protections of healthcare workers and patients across the state. We bring together the voices of everyone who is impacted by our healthcare system and use our collective power to push for real policy change to make our healthcare system better." },
      ]

    },
    {
      name: "OUR CHOICE CENTRAL OREGON",
      tag: "web, responsive, campaign",
      desc: [
        { p: "A simple and clear side-by-side comparison of the State Senate and House candidates running to represent Central Oregon in Salem." },
      ]

    },
    {
      name: "THE OREGON VOTER GUIDE",
      tag: "web, responsive, campaign",
      desc: [
        { p: "Simple and clear information about Oregon’s 2020 ballot presented by a coalition of organizations dedicated to promoting economic fairness, public education, healthcare access, and environmental justice."},
      ]

    },
    {
      name: "STELLAR CAPTURE",
      tag: "web, responsive",
      desc: [
        { p: "A team led by career veterans of digital product design and development to create meaningful solutions. Equipped with the knowledge and hands-on experience of today’s modern tools and technologies, we strive to innovate and create the highest quality products possible." }
      ]

    },
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title">{d.name}</h3>
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={`/img/portfolio/${index}.jpg`}
                      />
                    </div>
                    {d.desc.map((des,i) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}
                  </div>
                )
            )}
          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 5 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 5 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;