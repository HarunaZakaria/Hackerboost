import React, { useState } from "react";
import { IOption } from "../types";


type OptionProps = {
    key: number,
    option: IOption,
    pollId: number,
    onVote: (pollId: number, optionId: number) => void
}
function Option({key, option, pollId, onVote}: OptionProps) {
   
  return <li key={key} className="option">
    <span className="option-label">{option.label}</span>
    <button onClick={()=> onVote(pollId, option.id)}>Vote</button>
  </li>
}

export default Option;
