import React from "react";
import styled from "styled-components";
import Title from "../../Component/Title";
import Jobcomponent from "../../Component/Jobcomponent";

function Job() {
  return (
    <JobWrapper>
      <Title
        title="Recent Job"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Jobcomponent />
    </JobWrapper>
  );
}

export default Job;

const JobWrapper = styled.section``;
