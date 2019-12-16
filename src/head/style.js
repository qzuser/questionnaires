import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.25rem;
  box-shadow: 0 1px .1875rem rgba(26,26,26,.1);
  a{
    text-decoration: none;
  }
`;
export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 3rem;
  margin: 0 2rem;
  color: #8590a6;
  span {
    margin-left: 0.5rem;
    cursor: pointer;
  }
  &:hover {
    color: #455076;
  }
  &.iconchuangjian{
    position: relative;
  }
  &.iconadbddb {
    width: 7rem;
    margin-right: 40rem;
    color: #0084ff;
    font-size: 2rem;
    span {
      font-size: 0.9375rem;
    }
  }
  &.pos {
    border-bottom: 0.1875rem solid #0084ff;
    font-weight: 600;
    color: #444;
  }
`;
export const QuesInfo = styled.div`
  padding: 1rem 0;
  width: 15rem;
  height: 10rem;
  box-shadow: 0 1px .1875rem rgba(26,26,26,.3);
  position: absolute;
  top: 3.25rem;
  left: 0;
  z-index: 10;
  background-color: white;
`
export const Settings = styled.div`
  font-size: 1rem;     /*??不生效why*/
  color: #444;
  text-align: center;
`
export const InputWrap = styled.div`
  display:flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #eee;
  font-weight: 200;
  span{
    margin-right: 1rem;
  }
`
export const InputTittle = styled.input`
  background: none;
  outline: none;
  border: none;
  height: 3rem;
`;
export const IfSingle = styled.div`
  display:flex;
  font-size: 1rem;
  font-weight: 200;
  align-items: center;
  width: 100%;
  height: 3rem;
  span{
    margin-right: 1rem;
  }
   .iconguan{
    color: #0084ff;
  }
  border-bottom: 1px solid #eee;
`

export const InfoBottom = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 200;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #eee;
`;
export const BottomButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: .5rem;
  width: 4rem;
  height: 1.5rem;
  background-color: #0084ff;
  color: #fff;
  border-radius: 5%;
  font-size: .875rem;
  cursor: pointer;
`
export const HomeP = styled.div`
  width: 100%;
  height: 34rem;
  background-image: url(https://img.tukuppt.com/bg_grid/00/08/63/EHdZZbKeUf.jpg!/fh/350);
  background-size: cover;
`