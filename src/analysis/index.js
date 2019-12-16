import React, {useEffect} from 'react';
import axios from "axios";

function QuestionAnalysis(){
  useEffect(() => {
    axios
      .post("http://localhost:8080/user/insertNum", {
        firstName: "Fred",
        lastName: "Flintstone"
      })
      .then(function(response) {
        console.log(response);
      });
  }, []);
  return <div>hello woqu</div>
}

export default QuestionAnalysis;