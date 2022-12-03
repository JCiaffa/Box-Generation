import styled from "styled-components";

const StyledBox = styled.div`
  border: 3px solid black;
  background: ${(props) => props.bgColor};
  width: 300px};
  height: 300px;
  margin: 20px;
  display: inline-block;
`;

export default StyledBox;
