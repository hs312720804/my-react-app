import React from 'react'
import DefineRoutes from './routes';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <DefineRoutes></DefineRoutes>
    </RecoilRoot>
  )
}
