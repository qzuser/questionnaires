import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderItem,
  QuesInfo,
  Settings,
  InputWrap,
  InputTittle,
  IfSingle,
  InfoBottom,
  BottomButton
} from "./style";

function Header(props){
  const [inputValue, setInputValue] = useState({
    iValue: '',
    sValue: false
  });
  const pos = props.pos;
  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderItem className="iconfont iconadbddb">
          <span>起名儿真难问卷网</span>
        </HeaderItem>
      </Link>
      <Link to="/create">
        <HeaderItem
          className={
            pos === 0
              ? "iconfont iconchuangjian pos"
              : "iconfont iconchuangjian"
          }
          onClick={() => props.handlePos(0)}
        >
          <span>创建问卷</span>
          {pos === 0 ? (
            <QuesInfo>
              <Settings className="iconfont iconshezhi">问卷设置</Settings>
              <InputWrap>
                <span>主题</span>
                <InputTittle
                  placeholder="请输入问卷主题"
                  value={inputValue.iValue}
                  onChange={e => {
                    setInputValue({ ...inputValue, iValue: e.target.value });
                  }}
                />
              </InputWrap>
              <IfSingle>
                <span>单选</span>
                <i
                  className={
                    inputValue.sValue
                      ? "iconfont iconguan"
                      : "iconfont iconguan-copy"
                  }
                  onClick={() =>
                    setInputValue({ ...inputValue, sValue: !inputValue.sValue })
                  }
                ></i>
                <span>{inputValue.sValue ? "on" : "off"} </span>
              </IfSingle>
              <InfoBottom>
                <BottomButton
                  onClick={e => {
                    e.stopPropagation();
                    props.handlePos(-1);
                  }}
                >
                  取消
                </BottomButton>
                <Link to="/create/homepage">
                  <BottomButton
                    onClick={e => {
                      e.stopPropagation();
                      props.handlePos(-1);
                      props.handleTitle(inputValue.iValue);
                    }}
                  >
                    确定
                  </BottomButton>
                </Link>
              </InfoBottom>
            </QuesInfo>
          ) : (
            ""
          )}
        </HeaderItem>
      </Link>

      <Link to="/management">
        <HeaderItem
          className={
            pos === 1 ? "iconfont iconguanli pos" : "iconfont iconguanli"
          }
          onClick={() => props.handlePos(1)}
        >
          <span>问卷管理</span>
        </HeaderItem>
      </Link>
      <Link to="/analysis">
        <HeaderItem
          className={
            pos === 2 ? "iconfont iconfenxi pos" : "iconfont iconfenxi"
          }
          onClick={() => props.handlePos(2)}
        >
          <span>统计分析</span>
        </HeaderItem>
      </Link>
    </HeaderWrapper>
  );
}


const mapState = state => ({
  pos: state.getIn(['head', 'pos'])
})
const mapDispatch = dispatch => ({
  handlePos(num){
    dispatch({
      type: "change_pos",
      data: num
    })
  },
  handleTitle(title){
    dispatch({
      type: "change_tittle",
      data: title
    })
  }
})
export default connect(mapState, mapDispatch)(Header);
