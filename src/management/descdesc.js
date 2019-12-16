import React from "react";
import { FinishedQuesItem, FinishedTitle, FinishedContent } from "../home/style";

function FinishedQueston(props) {
  const info = props.info;
  const pos = props.pos;
  const answers = [];
  for (let i = 0; i < info.answer.length; i++) {
    answers.push(
      <FinishedContent
        pos={i}
        className={
          info.select === i
            ? "iconfont iconfangxingdanxuanxuanzhong"
            : "iconfont iconfangxingdanxuanweixuanzhong"
        }
        onClick={() => {
          const ques = JSON.parse(JSON.stringify(props.ques.toJS()));
          ques[pos].select = i;
          props.selectTheAnswer(ques);
        }}
      >
        <span>{info.answer[i]}</span>
      </FinishedContent>
    );
  }
  return (
    <FinishedQuesItem>
      <FinishedTitle className="iconfont iconbizuo">
        <span>{props.info.title}</span>
      </FinishedTitle>
      {answers}
    </FinishedQuesItem>
  );
}

export default FinishedQueston;
