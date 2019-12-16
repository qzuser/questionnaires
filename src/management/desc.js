import React from "react";
import FinishedQueston from '../home/finishedQuestion'
import { ManagementWrapper } from "./style";
import { FinishedTittle } from "../home/style";
function SingleQuestionnaire(props) {
  const ques = props.ques;
  return (
    <ManagementWrapper>
      {
        <FinishedTittle>调查主题:{props.title}</FinishedTittle>
      }
      { Array.isArray(ques) &&
        ques.map((obj, ind) => (
          <FinishedQueston info={obj} key={obj.title} pos={ind} />
        ))
      }
    </ManagementWrapper>
  );
}


export default SingleQuestionnaire;
