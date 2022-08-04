import React from "react";
import styled from "styled-components";
const Stat = (props) => {
  return (
    <StatWrapper>
      <SpanWrapper>참여자 수</SpanWrapper>
      <NumWrapper>1,234,567</NumWrapper>
    </StatWrapper>
  );
};

export default Stat;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`;
const NumWrapper = styled.span`
  font-size: 2rem;
  text-align: center;
`;
const SpanWrapper = styled.span`
  text-align: center;
`;
