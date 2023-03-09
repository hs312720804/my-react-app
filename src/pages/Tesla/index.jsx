import React, { memo, useState, useEffect } from 'react'
import {Main} from './index.style'
import Scroll from '../../baseUI/scroll'
import RotationChart from '../../components/main/rotationChart/RotationChart'

import { reqmain } from '@/api/index.js'
import { Outlet } from 'react-router-dom'

function apifun() {
  return reqmain().then((res) => {
   console.log(res);
   return res
 })
 .catch((e) => {
   console.log('出错了')
 })
}
const Tesla = (props) => {

  // let tesladata = []
  // let rotationImg = []

  
  console.log('props=---->', props)
  // 检测redux中状态的变化，只要变化，就更新页面
  // useEffect(() => {
  //   console.log('组件挂载时、count修改时就会执行执行');
  // }, [rotationImg])
  const [rotationImg, setData] = useState([])

  // useEffect(async () => {
  //   const result = await apifun()
  //   setData(result.data);
  // }, [])
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await apifun()
      console.log('result.data.data.rotationImg-------->', result.data.data.rotationImg)
      setData(result.data.data.rotationImg);
    };

    fetchData()
  }, [])

  const goToOrder = (rotationImg) => {
    // console.log(item);
    // history.push({ pathname: '/tesla/order', state: rotationImg})
  }

  return (
    <div>
      <Main>      
        <div className="title">特斯拉Tesla</div>
        <Scroll
          direction="vertical" // 垂直滚动
          refresh={false} // 下拉更新为false
        >
          <div>
            <RotationChart rotationImg={rotationImg}></RotationChart>
            {/* {rotationImg.map(item => (
              <li>{item.name}</li>
            ))} */}
            <div className="teslaDrive">
              <h1>未来驾驶体验</h1>
              <h2>车辆自动召唤，跑车级百公里加速，在车里打游戏，免费到店体验特斯拉驾驶方式</h2>
              <img src="https://china-community-app.tesla.cn/wechatmini/img01.png" />
              <button onClick={() => goToOrder(rotationImg)} className='testDrive'>预约试驾</button>
            </div>
            <div className="teslaGuideBook">
              <h1>新手使用指南</h1>
              <img src="https://china-community-app.tesla.cn/wechatmini/card_bg.png" />
            </div>

          </div>
        </Scroll>
      </Main>
      <Outlet></Outlet>
    </div>
  )
}


export default memo(Tesla) 

