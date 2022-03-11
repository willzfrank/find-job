import React from "react";
import styled from "styled-components";

function Title(props) {
  return (
    <TitleWrapper>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </TitleWrapper>
  );
}

export default Title;

const TitleWrapper = styled.div`
  text-align: center;
  h3 {
    color: var(--color-dark);
    font-size: 2.2rem;
  }
  p {
    padding: 1.5rem 0;
  }
`;
