import React from "react";
import styled from "styled-components";
import avatarImage from "../images/img1.1.png";
import avatarImage1 from "../images/mili.png";
import avatarImage2 from "../images/Rahul.png";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          Once again, many thanks for making such a trip possible. 
          The organisation, the effectiveness, the planning and on top the driver were 
          just perfect. 
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Asish kumar</h4>
              <span>Web Developer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Best Trip Awesome Experience nice service and Support  enjoyed every Movements.
          </p>
          <div className="info">
            <img src={avatarImage1} alt="" />
            <div className="details">
              <h4>Mili Jackson</h4>
              <span>Traveller</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          It was a wonderful experience for us. All your arrangements were up to the mark.
All hotels and transportation arrangements were excellent.
          </p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Rahul Shina</h4>
              <span>Entrepreneur</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 2rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;