import styled from 'styled-components'

export const HomeWrapper = styled.div`
  margin-top: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f6f6f6;
`
export const HomeWrap = styled.div`
  width: 60rem;
  height: auto;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
`
/**************************************List***************************************** */
export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  font-size: 1.25rem;
  border-bottom: 1px solid #eee;
  span{
    margin: 2rem;
    font-size: 1rem;
    color: #0084ff;
    cursor: pointer;
  }
  span.gray{
    color: #8590a6;
    cursor: not-allowed;
  }
  .iconchenggong-copy{
    color: #0084ff;
  }
  .iconchenggong-copy span{
    margin: 0
  }
  /* span:hover{
    font-size: 1.1rem;
  } */

`
export const ListWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 17rem;
  height: auto;
  border-bottom: 1px solid #eee;
`
export const ListItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2rem;
  width: 100%;
  margin-bottom: 1rem;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 100%;
    i{
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
`
/*************************************问题主体*************************************** */
export const ListItemQues = styled.div`
  box-sizing: border-box;
  padding: 0 2rem;
  height: 11rem;
  height: auto;
  width: 100%;
  span{
    margin-right: 1rem;
  }
`
/*******************************************问题题目************************ */
export const MyTittle = styled.div`
  height: 2rem;
  box-sizing: border-box;
  line-height: 2rem;
  i{
    color: #8590a6;
    cursor: pointer;
  }
  i:hover{
    color: #444;
  }
`
export const QuesInput = styled.input`
  background: none;
  outline: none;
  border: none;
  width: 24.5rem;
  font-size: 1.25rem;
`
/////////////////////////////////////////////////////////////////问题选项
export const MyContent = styled.div`
  box-sizing: border-box;
  height: 8rem;
  height: auto;
  width: 100%;
`
////////////////////////////////////////////////////////////////单个选项
export const MyContentItem = styled.div`
  width: 30rem;
  margin: .5rem 0;
  span{
    margin-left: 1rem;
  }
`
export const AnswerInput = styled.input`
  display: inline-block;
  background: none;
  outline: none;
  border: none;
  width: 25rem;
  height: 1.5rem;
`
/////////////////////////////////////////////////////////////问题footer 确定取消
export const ListItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 100%;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    width: 3rem;
    margin: 0 1rem;
    background-color: #0084ff;
    color: #fff;
    border-radius: 5%;
    font-size: .875rem;
    cursor: pointer;
  }
`
/*******************************完成的问题***************************************** */
export const FinishedWrapper = styled.div`
  /* display: flex;
  align-items: center; */
`
export const FinishedQuesItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 2rem;
`
export const FinishedTitle = styled.div`
  width: 100%;
  font-size: 1.125rem;
  line-height: 2rem;
  font-weight: 600;
  color: #8590a6;
  span{
    width: 100%;
    font-size: 1.125rem;
    line-height: 2rem;
    font-weight: 600;
    color: #444;
  }
`
export const FinishedContent = styled.div`
  width: 100%;
  font-size: .9375rem;
  height: 1.5rem;
  line-height: 1.5rem;
  color: #0084ff;
  span{
    margin-left: 1rem;
    color: #444;
  }
`
export const OrderWrapper = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  font-size: .9375rem;
  font-weight: 700;
  position: absolute;
  left: 0%;
  top: 0%;
  width: 5rem;
  height: 2rem;
  color: #0084ff;
`
export const FinishedTittle = styled.div`
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
`