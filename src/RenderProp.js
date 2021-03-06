import React from "react";
import LessText from "./LessText";

export default function RenderProp() {
  return (
    <LessText
      text={`Focused, hard work is the real key
  to success. Keep your eyes on the goal, 
  and just keep taking the next step 
  towards completing it.`}
      maxLength={35}
    />
  );
}
