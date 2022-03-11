import React from "react";
import Categoriesdata from "../data/Categoriesdata";
import styled from "styled-components";

function CategoriesJob() {
  return (
    <CategoriesJobWrapper>
      <div className="categoriesjob__container--flex">
        {Categoriesdata.slice(0, 3).map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.title} ({item.total})
              </p>
            </div>
          );
        })}
      </div>

      <div className="categoriesjob__container--flex">
        {Categoriesdata.slice(3, 6).map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.title} ({item.total})
              </p>
            </div>
          );
        })}
      </div>

      <div className="categoriesjob__container--flex">
        {Categoriesdata.slice(6, 9).map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.title} ({item.total})
              </p>
            </div>
          );
        })}
      </div>
      <div className="categoriesjob__container--flex">
        {Categoriesdata.slice(9, 12).map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.title} ({item.total})
              </p>
            </div>
          );
        })}
      </div>
    </CategoriesJobWrapper>
  );
}

export default CategoriesJob;

const CategoriesJobWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .categoriesjob__container--flex {
    div {
      background-color: rgba(0, 0, 0, 0.06);
      padding: 2rem 1rem;
      cursor: pointer;
      border-radius: 7px;
      transition: all 0.4s ease-in-out;
      margin: 1.2rem;

      &:hover {
        background-color: var(--color-primary);
        p {
          color: var(--color-white);
        }
      }
      p {
        text-align: center;
      }
    }
  }
`;
