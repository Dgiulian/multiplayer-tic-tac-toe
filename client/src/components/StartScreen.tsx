import React, { FC } from "react";
import { Button } from "./Button";

interface startProps {
  onStart(): void;
}
const StartScreen: FC<startProps> = ({ onStart }: startProps) => (
  <Button onClick={() => onStart()}>Start</Button>
);
export default StartScreen;
