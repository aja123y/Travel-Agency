import React, { useEffect } from "react";
import "./Footer.css";
import video2 from "../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contacDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn tlex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div data-aos="fade-up" className="footerIntro   flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" />
                Travel.
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae eius libero ad nulla voluptate ab, vitae optio culpa
              quis, ipsum soluta, quo autem modi impedit non. Aut, officiis
              iusto dicta at quas ad ut vero ab itaque tempore ipsa reiciendis?
            </div>

            <div data-aos="fade-up" className="footerSocial flex">
              <AiOutlineTwitter className="icon" />
              <FaInstagram className="icon" />
              <FaWhatsapp className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div data-aos="fade-up" className="footerLinks grid">
            {/* Group one */}
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Payment
              </li>
            </div>
            {/* Group two */}
            <div className="linkGroup">
              <span className="groupTitle">PARTNER</span>
              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Rantcars
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                TripAdvisor
              </li>
            </div>
            {/* Group three */}
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FaAngleRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Indoesia
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Oceania
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVED - 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
