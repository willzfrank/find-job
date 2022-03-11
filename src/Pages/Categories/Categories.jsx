import React from "react";
import styled from "styled-components";
import CategoriesJob from "../../Component/CategoriesJob";
import Title from "../../Component/Title";

function Categories() {
  return (
    <CategoriesWrapper>
      <Title
        title="All Categories"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CategoriesJob />
    </CategoriesWrapper>
  );
}

export default Categories;

const CategoriesWrapper = styled.section`
  margin: 5rem 0;
`;
