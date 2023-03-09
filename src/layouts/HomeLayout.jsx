import React from 'react'

// import RouterBeforeEach from '../routes/RouterBeforeEach'
import { Outlet, NavLink, useLocation, useParams } from 'react-router-dom'
import { Tab, TabItem } from './HomeLayout.style';

import find from '../assets/Icon-font/find.png'
import findActive from '../assets/Icon-font/findActive.png'
import tesla from '../assets/Icon-font/tesla.png'
import teslaActive from '../assets/Icon-font/teslaActive.png'
// import map from '../assets/Icon-font/map.png'
// import mapActive from '../assets/Icon-font/mapActive.png'
// import shop from '../assets/Icon-font/shop.png'
// import shopActive from '../assets/Icon-font/shopActive.png'

function HomeLayout(props) {

  // const { route, changeIndexDispatch } = props;


  // let { route, index } = props
  // console.log('index--->', index)

  // // 拿到当前路径
  const { pathname } = useLocation()
  let params = useParams()
  console.log('parmas---->', params)
  // // 根据用户路由直接访问的处理，非首页
  // index = route.routes.findIndex(item => item.path == pathname)

  // console.log('index--->', index)

  // let navigate = useNavigate();
  // console.log('useNavigate--->', navigate)

  return (
    <div>
      <Tab>
        <NavLink to="/find" className={({ isActive }) => isActive ? 'selected' : ''}>
          <TabItem>
            {
              pathname === '/find'
                ? <img src={findActive} />
                : <img src={find} />
            }
            <span>发现</span>
          </TabItem>
        </NavLink>
        <NavLink to="/tesla" className={({ isActive }) => isActive ? 'selected' : ''}>
          <TabItem >
            {
              pathname === '/tesla'
                ? <img src={teslaActive} />
                : <img src={tesla} />
            }
            <span>发现</span>
          </TabItem>
        </NavLink>
        <NavLink to="/tesMap" className={({ isActive }) => isActive ? 'selected' : ''}>
          <TabItem >
            {
              pathname === '/tesMap'
                ? <img src={teslaActive} />
                : <img src={tesla} />
            }
            <span>地图</span>
          </TabItem>
        </NavLink>
        
      </Tab>


      <Outlet />
    </div>
  )
}



export default HomeLayout


