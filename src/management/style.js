import styled from "styled-components";

export const ManagementWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  height: 100%;
  a{
    text-decoration: none;
  }
`;
export const ManagementWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f6f6f6;
  width: 60rem;
  height: 30rem;
`;

export const QueryDeleteWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  width:100%;
  height: 4rem;
  padding:0 2rem;
  margin: 1rem 0;
`
export const QueryQuestion = styled.input`
  width: 40rem;
  height: 3rem;
  background: none;
  outline: none;
  /* border: none; */
  border: 1px solid #0084ff;
  font-size: 1.2rem;
`
export const DeleteQuestion = styled.input`
  width: 40rem;
  height: 3rem;
  background: none;
  outline: none;
  /* border: none; */
  border: 1px solid #0084ff;
  font-size: 1.2rem;
`
export const SubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  background-color: #0084ff;
  color: #fff;
  margin-left: 3rem;
  font-size: 1.2rem;
  border-radius: .3rem;
  cursor:pointer;
`
