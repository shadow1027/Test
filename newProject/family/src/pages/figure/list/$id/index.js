/**
 * title: 人物详情
 */
import React from 'react'
import {connect} from 'dva';
import {Row, Col} from 'antd';
import {FIGURE_DETAIL as namespace} from 'utils/namespace';
import {figureKeys} from './config';
import style from './style.less';

function Detail({figureData}) {
  console.log(figureData)
  return (
    <Row>
      {
        
        !!Object.keys(figureData)&&figureKeys.map(item => {
          let value = figureData[item.key]
          let id = figureData[id]
          if(item.render){
            value=item.render(value, figureData)
          }else if(value && typeof (value) == 'object'){
           value =  Object.values(value).map(ele=>ele+' ')
          }else{
            value = value + ''
          }
          return (
            <Col className={style['detail-item']} key={item.key} span={8}>
              <span>{item.text}</span>：
              <span>{value}</span>
            </Col>
          )
        })
      }
    </Row>
  )
}
export default connect(store => store[namespace])(Detail);