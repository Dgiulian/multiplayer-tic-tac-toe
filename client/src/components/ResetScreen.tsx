import React, { FC } from "react";
import styled from "styled-components";
import { Winner } from "./Board";
import { Button } from "./Button";
interface resetProps {
  winner: Winner;
  onReset(): void;
}
const WinnerHeading = styled.h2`
  color: #333;
  text-align: center;
  margin-top: 0;
  font-size: 4rem;
  font-family: "Varela Round";
`;
const ResetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResetScreen: FC<resetProps> = ({ winner, onReset }: resetProps) => (
  <ResetWrapper>
    <WinnerHeading>
      {winner === "tie" ? "It's a tie" : `${winner} won`}
    </WinnerHeading>
    <Button onClick={onReset}>Start again</Button>
  </ResetWrapper>
);

export default ResetScreen;
