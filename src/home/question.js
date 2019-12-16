import React, {useState} from 'react';
import {connect} from 'react-redux';
import { fromJS } from 'immutable'
import {
  ListWrapper,
  ListItemHeader,
  ListItemQues,
  ListItemFooter,
  QuesInput,
  MyTittle,
  MyContent,
  MyContentItem,
  AnswerInput,
  OrderWrapper
} from "./style";

function ListItem(props){
  const ques = props.ques.toJS();
  const [mainValue, setMainValue] = useState('');
  const [inputValue, setInputValue] = useState([]);
  let [quesIndex,setQuesIndex] = useState(ques.length);
  const answer = [];
  for(let i = 0; i < inputValue.length; i++){
    answer.push(
      <MyContentItem index={i}>
        <AnswerInput
          placeholder="请输入选项内容"
          value={inputValue[i]}
          onChange={(e) => {
            const newValue = JSON.parse(JSON.stringify(inputValue));
            newValue[i] = e.target.value;
            setInputValue(newValue)
          }}
        />
        <span
          className="iconfont iconshanchu"
          title="删除"
          onClick={() =>{
            const newValue = JSON.parse(JSON.stringify(inputValue));
            newValue.splice(i, 1)
            setInputValue(newValue)
          }}
        ></span>
      </MyContentItem>
    );
  }
  
  return (
    <ListWrapper>
      <OrderWrapper>题目位置{quesIndex} </OrderWrapper>
      <ListItemHeader>
        <div
          onClick={() => {
            if (quesIndex > 0) setQuesIndex(--quesIndex);
          }}
        >
          <i className="iconfont iconshangyi" title="上移"></i>
        </div>
        <div
          onClick={() => {
            if (quesIndex < ques.length) setQuesIndex(++quesIndex);
          }}
        >
          <i className="iconfont iconxiayi" title="下移"></i>
        </div>
        <div
          onClick={() => {
            setQuesIndex(0);
          }}
        >
          <i className="iconfont iconzhiding" title="置顶"></i>
        </div>
        <div
          onClick={() => {
            setQuesIndex(ques.length);
          }}
        >
          <i className="iconfont icondown" title="置底"></i>
        </div>
        <div>
          <i className="iconfont iconbianji" title="编辑"></i>
        </div>
        <div>
          <i className="iconfont iconshanchu" title="删除"></i>
        </div>
      </ListItemHeader>
      <ListItemQues>
        <MyTittle>
          <QuesInput
            placeholder="请输入你的问题"
            value={mainValue}
            onChange={e => setMainValue(e.target.value)}
          />
          <i
            className="iconfont iconxinzeng1"
            onClick={() => {
              const newValue = JSON.parse(JSON.stringify(inputValue));
              newValue.push("");
              setInputValue(newValue);
            }}
          >
            新增选项
          </i>
        </MyTittle>
        <MyContent>{answer}</MyContent>
      </ListItemQues>

      <ListItemFooter>
        <div onClick={() => props.addQuestions(true)}>取消</div>
        <div
          onClick={() => {
            if (mainValue === "" || inputValue[inputValue.length-1] === '') {
            } else {
              const newObj = {
                title: mainValue,
                answer: inputValue,
                select: -1
              };
              const newQues = JSON.parse(JSON.stringify(ques));
              newQues.splice(quesIndex, 0, newObj);
              props.handleQuestionInfo(newQues);
            }
          }}
        >
          确定
        </div>
      </ListItemFooter>
    </ListWrapper>
  );
}
const mapState = state => ({
  ques: state.getIn(['home', 'quesInfo']),
  addStatus: state.getIn(['home', 'addStatus'])
})
const mapDispatch = dispatch => ({
  SubmitQuestion(obj) {
    dispatch({
      type: "submit_question",
      data: obj
    });
  },
  handleQuestionInfo(obj) {
    dispatch({
      type: "add_question",
      data: fromJS(obj)
    });
  },
  addQuestions(flag) {
    dispatch({
      type: "create_questions",
      data: flag
    });
  }
});
export default connect(mapState, mapDispatch)(ListItem);