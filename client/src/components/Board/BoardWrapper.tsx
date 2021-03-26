import styled from "styled-components";

const BoardWrapper = styled.div`
  background: #99999999;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 6px;
`;

export default BoardWrapper;
