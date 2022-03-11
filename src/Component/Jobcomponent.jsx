import React from "react";
import Jobdata from "../data/Jobdata";
import styled from "styled-components";

function Jobcomponent() {
  return (
    <JobcomponentWrapper>
      <div className="Jobcomponent__companydetails--flexbox">
        {Jobdata.slice(0, 3).map((item) => {
          return (
            <div
              key={item.id}
              className="Jobcomponent__companydetails--Containerbox"
            >
              <div className="Jobcomponent__companydetails--box">
                <div>
                  <img src={item.logo} alt="logo" />
                </div>
                <div className="Jobcomponent__companydetails--text">
                  <p>
                    {item.name}
                    <br />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
              <div className="Jobcomponent__companydetails--skillsbox">
                <p className="Jobcomponent__companydetails--texttitle">
                  {item.JobTitle}
                </p>
                <p className="Jobcomponent__companydetails--texthours">
                  {item.hours}
                </p>
                <p className="Jobcomponent__companydetails--textskills">
                  {item.skills}
                </p>
                <div className="Jobcomponent__companydetails--textpricebox">
                  <p>
                    {item.price} <span>/ Yearly</span>
                  </p>
                  <div className="btn">Apply</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="Jobcomponent__companydetails--flexbox">
        {Jobdata.slice(3, 6).map((item) => {
          return (
            <div
              key={item.id}
              className="Jobcomponent__companydetails--Containerbox"
            >
              <div className="Jobcomponent__companydetails--box">
                <div>
                  <img src={item.logo} alt="logo" />
                </div>
                <div className="Jobcomponent__companydetails--text">
                  <p>
                    {item.name}
                    <br />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
              <div className="Jobcomponent__companydetails--skillsbox">
                <p className="Jobcomponent__companydetails--texttitle">
                  {item.JobTitle}
                </p>
                <p className="Jobcomponent__companydetails--texthours">
                  {item.hours}
                </p>
                <p className="Jobcomponent__companydetails--textskills">
                  {item.skills}
                </p>
                <div className="Jobcomponent__companydetails--textpricebox">
                  <p>
                    {item.price} <span>/ Yearly</span>
                  </p>
                  <div className="btn">Apply</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="Jobcomponent__companydetails--flexbox">
        {Jobdata.slice(6, 9).map((item) => {
          return (
            <div
              key={item.id}
              className="Jobcomponent__companydetails--Containerbox"
            >
              <div className="Jobcomponent__companydetails--box">
                <div>
                  <img src={item.logo} alt="logo" />
                </div>
                <div className="Jobcomponent__companydetails--text">
                  <p>
                    {item.name}
                    <br />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
              <div className="Jobcomponent__companydetails--skillsbox">
                <p className="Jobcomponent__companydetails--texttitle">
                  {item.JobTitle}
                </p>
                <p className="Jobcomponent__companydetails--texthours">
                  {item.hours}
                </p>
                <p className="Jobcomponent__companydetails--textskills">
                  {item.skills}
                </p>
                <div className="Jobcomponent__companydetails--textpricebox">
                  <p>
                    {item.price} <span>/ Yearly</span>
                  </p>
                  <div className="btn">Apply</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </JobcomponentWrapper>
  );
}

export default Jobcomponent;

const JobcomponentWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  padding: 0rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .Jobcomponent__companydetails--flexbox {
    width: 100%;
    .Jobcomponent__companydetails--Containerbox {
      margin: 1rem;
      .Jobcomponent__companydetails--box {
        display: flex;
        div {
          img {
            padding: 1rem;
            background-color: var(--color-neutral-3);
            border-radius: 7px;
            width: 80px;
            height: 80px;
            justify-content: flex-start;
          }
        }
        .Jobcomponent__companydetails--text {
          justify-content: flex-end;
          width: 100%;
          padding-left: 2rem;
          p {
            padding-top: 1rem;
            color: var(--color-dark);
            transition: all 0.4s ease-in-out;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: 700;
            /* &:hover {
              color: var(--color-primary);
            } */
            span {
              font-size: 1rem;
              padding-top: 0.3rem;
              font-weight: 200;
              /* &:hover {
                color: var(--color-dark);
              } */
            }
          }
        }
      }
      background-color: var(--color-white);

      border-radius: 7px;
      transition: all 0.4s ease-in-out;
      box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.01);
      padding: 2.3rem;
      &:hover {
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
      }
      .Jobcomponent__companydetails--skillsbox {
        .Jobcomponent__companydetails--texttitle {
          font-size: 1.6rem;
          color: var(--color-dark);
          cursor: pointer;
          transition: all 0.4s ease-in-out;
          padding: 1rem 0rem;
          font-weight: 700;
        }
        .Jobcomponent__companydetails--texthours {
          font-size: 1rem;
          padding-bottom: 1rem;
          font-weight: 600;
        }
        .Jobcomponent__companydetails--textskills {
          padding-bottom: 1.2rem;
          line-height: 2.2rem;
          font-size: 1rem;
        }
        .Jobcomponent__companydetails--textpricebox {
          display: flex;
          justify-content: space-between;
          p {
            color: var(--color-primary);
            font-size: 0.9rem;
            padding-top: 0.8rem;
            span {
              color: #656565;
              font-size: 1rem;
            }
          }
          .btn {
            background-color: var(--color-primary);
            font-weight: 500;
            padding: 0.4rem 0.9rem;
            cursor: pointer;
            border-radius: 7px;
            text-align: center;
            font-sizze: 15px;
          }
        }
      }
    }
  }
`;
