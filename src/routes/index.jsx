import React , {lazy} from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

const HomeLayout = lazy(() => import('../layouts/HomeLayout'))
const Tesla = lazy(() => import('../pages/Tesla'))
const Find = lazy(() => import('../pages/Find'))


// 路由懒加载报错：react-dom.development.js:19055 Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
// 懒加载的模式需要我们给他加上一层 Loading的提示加载组件
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
        element: withLoadingComponent(<Tesla/>)
      },
      
    ]
  }
]

const Routes = () => useRoutes(routes)
export default Routes