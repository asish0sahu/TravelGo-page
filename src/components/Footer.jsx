import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

export default function Footer() {
  return (
    <FooterContainer>
      <section className="footer-subscribe">
        <p className="heading1">Book your Tickets Now Happy Journey!!</p>

      </section>

      <div className="input-areas">
        <form>
          <input
              className="footer-input"
              name='email'
              type='email'
              placeholder='Your Email'
          />
          <button className="footer-btn">Subscribe</button>
        </form>
      </div>
      
      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h2>Features</h2>
          <ul>
            <li>Gallery</li>
            <li>Ambassador</li>
            <li>Plans</li>
            <li>Destinations</li>
          </ul>
          
        </div>
        <div className="footer-link-items">
          <h2>Social Media</h2>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className="footer-link-items">
              <h2>Contact Us</h2>
              <ul>
              <li>
                travelgo@gmail.com
              </li>
              
              <li className="nu">
                <BiPhoneCall /> +91-9348696095
              </li>
              <li className="nu">
                <ImLocation /> Mumbai,India
              </li>

              </ul>         
        </div>
      </div>

      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
          
        </li>
      </ul>
      <span>Copyright &copy; 2022 TravelGo. All rights reserved</span>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  background-color: #242424;
  border-radius: 0.5rem;
  padding: 4rem 0 2rem 0;
  opacity:0.9;
  color:white;
  &:hover{
    background-color:#16171d;
  }

  .footer-subscribe{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;

    margin-bottom:24px;
    padding:24px;
    
  }
  .footer-subscribe> p{
    font-family:'Trebuchet MS' , 'Lucida Sans Unicode','Lucida Grande', 'Lucida Sans',Arial, sans-serif;
  }
  .heading1{
    margin-bottom:24px;
    font-size:21px;
    
  }
  &:hover{
    color:#4279d6;
  }

  .footer-input{
    padding:8px 20px;
    border-radius:2px;
    margin-right:10px;
    outline:none;
    border:none;
    font-size:18px;
    margin-bottom:16px;
    border:1px solid #fff;
  }
  .footer-input:hover{
    border:1px solid #4279d6;
  }

  .footer-links{
    width:100%;
    max-width:1000px;
    display:flex;
    justify-content:center;
  }
  .footer-link-wrapper{
    display:flex;
  }

  .footer-btn{
    color:#fff;
    width:100px;
    height:40px;
    background-color:var(--primary);
    background-color:transparent;
    border:1px solid white;
    border-radius:12px;
    transition: all 0.3s ease-out;
    font-family:"Roboto";
    font-size:20px;
    text-decoration:none;

  }
  .footer-btn:hover{
    color:#4279d6;
    border-color:#4279d6;
  }

  .footer-link-items{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:16px;
    text-align:left;
    width:160px;
    box-sizing:border-box;
  }

  .footer-link-items h2{
    margin-bottom:16px;
  }

  .footer-link-items >h2{
    color:#fff;
  }
  .footer-link-items a{
    color:#fff;
    text-decoration:none;
    margin-bottom:0.5rem;
  }

  .footer-link-items a:hover{
      color:#4279d6;
      transition:0.3s ease-out;
  }
  .footer-email-form h2{
    margin-botttom:2rem;
  }
  .footer-input::placeholder{
    color:#b1b1b1;
  }

  ul{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    text-align:center;
    width:160px;

  }
  ul li{
    list-style-type:none;
    font-size:18px;

  }

  .social__links {
    flex-direction: row;
    justify-content:space-between;
    margin:10px;
  }
  .social__links a:hover{
    transition:0.3s ease-out;
  }
  .nu{
    margin-top:10px;
  }














 
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .input-areas{
      flex-wrap:wrap;
    }
    .footer-link-items{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      margin:10px;
      text-align:center;
      width:120px;
      box-sizing:border-box;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
