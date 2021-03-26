import { motion } from "framer-motion";
import styled from "styled-components";
const variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  start: {
    opacity: 1,
    scale: 1,
    width: "200px",
    height: "100px",
    transition: { type: "spring", duration: 0.8 }
  },
  game: {
    opacity: 1,
    scale: 1,
    width: "500px",
    height: "500px",
    transition: { type: "spring", duration: 0.8 }
  },
  reset: {
    opacity: 1,
    scale: 1,
    width: "350px",
    height: "300px",
    transition: { type: "spring", duration: 0.8 }
  }
};
const BoardContainer = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants
}))`
  background: white;
  border-radius: 4px;
  box-shadow: -6px 10px 30px 4px #00000033;
  border: 20px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BoardContainer;
