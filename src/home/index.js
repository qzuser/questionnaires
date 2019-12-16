import React, {useState} from 'react';
import axios from "axios";
import ListItem from './question';
import FinishedQueston from './finishedQuestion'
import {connect} from 'react-redux';
import {
  HomeWrapper,
  HomeWrap,
  ListHeader,
  FinishedWrapper,
  FinishedTittle
} from "./style";
import { fromJS } from 'immutable';

function HomePage(props){
  const ques = props.ques.toJS();
  const [finishedFlag, setFinishedFlag] = useState(true);
  function handleSubmit(ques){
    axios
      .post("http://localhost:8080/ques/edit", {
        ques:ques,
        title: props.title
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  return (
    <HomeWrapper>
      <HomeWrap>





        {finishedFlag ? <ListHeader>
          <p>我的标题</p>
          <span
            className={props.addStatus ? "iconfont iconxinzeng2": "iconfont iconxinzeng2 gray"}
            onClick={() => {
              props.addQuestions(false)
            }}
          >
            新增习题
          </span>
          <i className="iconfont iconchenggong-copy" onClick={() => {
            handleSubmit(ques);
            setFinishedFlag(false);
            props.addQuestions(true);
            props.handleQuestionInfo({
              quesInfo: [],
              addStatus: true
            });
            alert('提交成功');
          }}>
            <span>完成编辑</span>
          </i>
        </ListHeader> : ''}




        <FinishedWrapper>
          {
            ques.length > 0 && <FinishedTittle>调查主题:{props.title}</FinishedTittle>
          }
          {
            Array.isArray(ques) && ques.map((obj, ind) => <FinishedQueston info={obj} key={obj.title} pos={ind}/>)
          }
        </FinishedWrapper>



        {
          !props.addStatus ? <ListItem> </ListItem>: ''
        }
      </HomeWrap>
    </HomeWrapper>
  );
}

const mapState = state => ({
  title: state.getIn(['head', 'title']),
  ques: state.getIn(["home", "quesInfo"]),
  addStatus: state.getIn(['home', 'addStatus']),
});
const mapDispatch = dispatch => ({
  handleQuestionInfo(arr){  //index.js里用不到
    dispatch({
      type: "add_question",
      data: fromJS(arr)
    })
  },
  addQuestions(flag){
    dispatch(
      {
        type: 'create_questions',
        data: flag
      }
    )
  }
});

export default connect(mapState, mapDispatch)(HomePage);