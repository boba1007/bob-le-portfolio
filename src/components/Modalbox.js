import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "Forever Essential",
      tag: "web, responsive",
      desc: [
        { p: "Forever Essential is both a digital and a physical memorial honoring California healthcare workers who we’ve lost to COVID-19. Through this memorial, we hope to transform our private pain into public dignity and to carry forward the legacies of those we’ve lost. The physical memorial will make stops in cities across California, offering a space for our community to remember and grieve." }
      ]

    },
    {
      name: "The Georgia Voter Guide",
      tag: "web, responsive, campaign", 
      desc: [
        { p: "A personalized voter guide with intelligent ballot determination based on address input. The Georgia Voter Guide provided Georgian voters with the information they needed to cast their votes with confidence in the 2020 General Election and Georgia special runoff election. Helped over 500,000 unique visitors get informed about their election choices, with over 50,000 unique visitors on election days."}
      ]

    },
    {
      name: "Healthcare Rising Arizona",
      tag: "web, responsive",
      desc: [
        { p: "The leading voice for strengthening Arizona’s healthcare system. We fight for the rights and protections of healthcare workers and patients across the state. We bring together the voices of everyone who is impacted by our healthcare system and use our collective power to push for real policy change to make our healthcare system better." },
      ]

    },
    {
      name: "Our Central Oregon",
      tag: "web, responsive, campaign",
      desc: [
        { p: "A simple and clear side-by-side comparison of the State Senate and House candidates running to represent Central Oregon in Salem." },
      ]

    },
    {
      name: "The Oregon Voter Guide",
      tag: "web, responsive, campaign",
      desc: [
        { p: "Simple and clear information about Oregon’s 2020 ballot presented by a coalition of organizations dedicated to promoting economic fairness, public education, healthcare access, and environmental justice."},
      ]

    },
    {
      name: "Stellar Capture",
      tag: "web, responsive",
      desc: [
        { p: "A team led by career veterans of digital product design and development to create meaningful solutions. Equipped with the knowledge and hands-on experience of today’s modern tools and technologies, we strive to innovate and create the highest quality products possible." }
      ]

    },
    {
      name: "World's Greatest Videos",
      tag: "web, mobile app, api",
      desc: [
        { p: "World's Greatest Videos™ is the first global, cash-awarded, continually running, short video competition. Having given away over $300,000 in cash prizes with our Regional Weekly Contests and Global Challenge Contests, World’s Greatest Videos™ brings the world together through video to provide positive, daily entertainment to the largest possible audience. " }
      ]

    },
    {
      name: "Complete Chess Education",
      tag: "web, responsive",
      desc: [
        { p: "Complete Chess is proud to be the first and only full-time chess facility in San Antonio, Texas. Located on the North West side of the Alamo City, Complete Chess is packed with chess sets, chess clocks, and educational materials to create the optimal environment to study, practice, and play the mind game we all love." }
      ]

    },
    {
      name: "Rodrigo Pinheiro Brazilian Jiu Jitsu",
      tag: "web, responsive",
      desc: [
        { p: "Learn from Black Belt World Champion, Rodrigo Pinheiro from Gracie Humaita. Trained under Royler Gracie, Rodrigo has been practicing Brazilian Jiu-Jitsu for over 25 years and received his black belt over 15 years ago." }
      ]

    },
    {
      name: "Rio City Real Estate Inspections, PLLC",
      tag: "web, responsive",
      desc: [
        { p: "Rio City Real Estate Inspections, PLLC was founded on the premise of “Absolute Commitment to Exceptional Service”. With combined team experience of more than eighty years of corporate management, customer service, technology and real estate experience, our work ethic is second to none." }
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
                setIndex(index == 1 ? 10 : index - 1);
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
                setIndex(index == 10 ? 1 : index + 1);
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