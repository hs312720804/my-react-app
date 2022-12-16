import React, {useEffect} from 'react'
import {Main} from './index.style'
import Scroll from '../../baseUI/scroll'
import RotationChart from '../../components/main/rotationChart/RotationChart'



export default function Tesla(props) {

  const { tesladata } = props
  const { rotationImg = [] } = tesladata

  // 检测redux中状态的变化，只要变化，就更新页面
  useEffect(() => {
    if (!tesladata.length) {
      // 函数内容为下面的 dispatch(actionCreators.getMainData())
      // getMainDataDispatch()
    }
  }, [])

  return (
    <Main>      
      <div className="title">特斯拉Tesla</div>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
      >
        <div>
          <RotationChart rotationImg={rotationImg}></RotationChart>
        </div>
      </Scroll>
    </Main>
  )
}
