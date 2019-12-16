import React, { useState} from "react";
import axios from "axios";
import SingleQuestionnaire from './desc';
import {
  ManagementWrapper,
  ManagementWrap,
  QueryDeleteWrap,
  QueryQuestion,
  DeleteQuestion,
  SubmitBtn
} from "./style";

function QuestionManagement(props) {
  const [query, setQuery] = useState('');
  const [cansel, setCansel] = useState('');
  const [toggle, setToggle] = useState(true);
  const [finishedData, setFinishedData] = useState('')
  function handleQuery(){
    console.log(query);
    axios.post("http://localhost:8080/ques/selectOne", query)
      .then(function(response) {
        const data = response.data;
        console.log(data);
        setToggle(false);
        setFinishedData(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  function handleDelete(){
    axios.post("http://localhost:8080/ques/delete", cansel)
      .then(function(response) {
        console.log(response);
      });
  }
  return (
    <ManagementWrapper>
      <ManagementWrap>
        { toggle ? <><QueryDeleteWrap>
          <QueryQuestion value={query} onChange={(e) => setQuery(e.target.value)}></QueryQuestion>
          <SubmitBtn onClick={handleQuery}>问卷查询</SubmitBtn>
        </QueryDeleteWrap>
        <QueryDeleteWrap>
          <DeleteQuestion value={cansel} onChange={(e) => setCansel(e.target.value)}></DeleteQuestion>
          <SubmitBtn onClick={handleDelete}>问卷删除</SubmitBtn>
        </QueryDeleteWrap></> : <SingleQuestionnaire ques={finishedData.quesInfo} title={finishedData.title}/> }
        
      </ManagementWrap>
    </ManagementWrapper>
  )
}


export default QuestionManagement;
