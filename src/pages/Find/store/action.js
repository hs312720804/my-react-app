import { useRecoilValue, useRecoilState } from 'recoil'
import { finddata } from './state'
import { reqfind } from '@/api/index.js'

function apifun(page) {
  return reqfind(page).then((res) => {
    console.log('res-->', res)
    return res
  })
  .catch((e) => {
    console.log('出错了')
  })
}

// console.log('useRecoilState--->', useRecoilState)
// const [{ newsList }, setNewsList] = useRecoilState(finddata)

// async function FindDataDispatch (page) {
//   const result = await apifun(page)
  

//   // const data = [...newsList, ...result.data.data.newsList]
//   let newData = {
//     newsList: [
//       ...newsList, 
//       ...result.data.data.newsList
//     ]
//   }
//   setNewsList(newData)
// }

export {apifun}

