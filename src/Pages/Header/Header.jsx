import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import hero from "../../img/hero.jpg";

function Header() {
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [selectedJob, setselectedJob] = React.useState(null);
  const changeCountry = (newCountry) => {
    setSelectedCountry(newCountry);
  };

  const changeJob = (newJob) => {
    setselectedJob(newJob);
  };
  return (
    <HeaderWrapper>
      <Navbar />
      <div className="header__container--box">
        <div className="header__container--innerbox">
          <h1>
            Over <span>10 000</span> jobs available <br />
            You can choose your dream job
          </h1>
          <p>
            Find great job to build your right career. Have many jobs in this
            platform
          </p>
          <form>
            <div className="header__form--jobtitle">
              <input type="text" placeholder="Job Title or Keywords" />
            </div>
            <div className="header__form--changecountry">
              <select
                onChange={(event) => changeCountry(event.target.value)}
                value={selectedCountry}
              >
                <option value="Canada">Canada</option>
                <option value="Unitedstates">United States</option>
                <option value="Unitedkingdom">United Kingdom</option>
                <option value="Nigeria">Nigeria</option>
              </select>
            </div>
            <div className="header__form--changecountry">
              <select
                onChange={(event) => changeJob(event.target.value)}
                value={selectedJob}
              >
                <option value="UI/UX">UI/UX</option>
                <option value="WebDevelopment">Web Development</option>
                <option value="Cloud">Cloud</option>
                <option value="CyberSecurity">CyberSecurity</option>
              </select>
            </div>
            <div className="header__form--button">
              <BsSearch />
            </div>
          </form>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${hero}) no-repeat;
  min-height: 90vh;

  .header__container--box {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* height: 80vh; */
    .header__container--innerbox {
      max-width: 60%;

      text-align: center;
      h1 {
        font-size: 3rem;
        span {
          font-size: 4rem;
          color: var(--color-primary);
        }
      }
      p {
        padding: 2rem;
        color: var(--color-white);
      }
      form {
        display: flex;
        justify-content: space-around;
        .header__form--jobtitle {
          input {
            background-color: var(--color-white);
            padding: 0.7rem;
            outline: none;
            border: none;
            margin-right: 10px;
            border-radius: 7px;
            font-size: inherit;
            color: #a1a1a1;
            font-weight: 500;
            input[type="text"]::placeholder {
              color: #a1a1a1;
            }
          }
        }
        .header__form--changecountry {
          select {
            background-color: var(--color-white);
            padding: 0.7rem;
            outline: none;
            border: none;
            margin-right: 10px;
            border-radius: 7px;
            font-size: inherit;
            color: #a1a1a1;
            font-weight: 500;
          }
        }
      }
      .header__form--button {
        background-color: var(--color-primary);
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 80px;
        cursor: pointer;
      }
    }
  }
`;
