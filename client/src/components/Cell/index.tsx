import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { CellValue } from "../Board";
import CellContainer from "./Cell";
import Circle from "../Circle";
import Close from "../Close";

interface CellProps {
  value: CellValue;
  index: number;
  onClick(index: number): void;
}
const variants = {
  hidden: {
    opacity: 0.5,
    transform: "scale(0.1)"
  },
  visible: {
    opacity: 1,
    transform: "scale(1.5)",
    transition: { type: "spring" }
  }
};
const Shape = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants
}))`
  height: 60px;
  width: 60px;
`;

const Cell = ({ onClick, value, index }: CellProps) => {
  return (
    <CellContainer onClick={() => onClick(index)}>
      {value && (
        <Shape animate={"visible"}>
          {value === "x" ? <Close /> : <Circle />}
        </Shape>
      )}
    </CellContainer>
  );
};

export default Cell;
