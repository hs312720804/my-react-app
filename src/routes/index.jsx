import React , {lazy} from 'react'
import { useRoutes, Navigate } from 'react-router-dom'


// import { useNavigate } from 'react-router-dom'

// 一级路由级别组件
const HomeLayout = lazy(() => import('../layouts/HomeLayout'))
const Tesla = lazy(() => import('../pages/Tesla'))
const Find = lazy(() => import('../pages/Find'))
const TesMap = lazy(() => import('../pages/TesMap'))

// 二级路由级别组件
const Model = lazy(() => import('../pages/TeslaInfo/Model'))

// 路由懒加载报错：react-dom.development.js:19055 Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
// 懒加载的模式需要我们给他加上一层 Loading的提示加载组件
// const withLoadingComponent = lement => props => {
//   return (
//     <React.Suspense fallback={<div>Loading...</div>}>
//       <element {...props}></element>
//     </React.Suspense>
//   );
// }

const withLoadingComponent = (comp) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {comp}
  </React.Suspense>
);

const routes = [
  {
    path: '/',
    element: <HomeLayout/>,
    children: [
      {
        path: '/',
        // exact: true,
        element: <Navigate to='/tesla'></Navigate>
      },
      {
        path: '/find',
        element: withLoadingComponent(<Find/>)
      },
      {
        path: '/tesla',
        element: withLoadingComponent(<Tesla/>),
        children: [
          {
            path: '/tesla/car/:id',
            element: withLoadingComponent(<Model/>)
          }
        ]
      },
      {
        path: '/tesMap',
        element: withLoadingComponent(<TesMap/>)
      },
    ]
  }
]

const Routes = () => useRoutes(routes)
export default Routes




