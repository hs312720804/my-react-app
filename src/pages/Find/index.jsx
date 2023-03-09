import React, { useState, useEffect } from 'react'
import loading2 from '@/assets/Images/loading.gif'

// import Lazyload, { forceCheck } from 'react-lazyload'

import { Main } from "./index.style";
import Scroll from '../../baseUI/scroll'


// store
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { state, action } from './store'

// -----------------------------------------------
// 默认值
const finddata = atom({
  key: 'finddata', // unique ID (with respect to other atoms/selectors)
  default: selector({   // <-------- 默认值来自 selector
    key: 'data selector',
    get: async () => {
      const result = await action.apifun(1)
      console.log('result---->', result)
      return result.data.data.newsList || []
      // return action.apifun(1)
    }
  }) // default value (aka initial value)
})

const findDataDispatch = async (page, newsList, callBack) => {
  const result = await action.apifun(page)
  // const data = [...newsList, ...result.data.data.newsList]
  let list = [
    ...newsList, 
    ...result.data.data.newsList
  ]
  callBack(list)
}
// -----------------------------------------------


export default function useFind(Props) {
  let [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const [newsList, setNewsList] = useRecoilState(finddata)
  console.log('newsList----->', newsList)
  

  // // 上拉加载更多
  const handlePullUp = () => {
    if (isLoading) return;
    setPage(++page)
    setIsLoading(true)
    
    // 请求接口
    findDataDispatch(page, newsList, (list) => {
      setNewsList(list)
      setIsLoading(false)
    })
  }
  // console.log('Props---->', Props)

  // 下拉刷新
  const handlePullDown = () => {

  }
  
  
  const gotoNews = (item) => {
    // history.push({ pathname: `/find/${item.id}`, state: item })
  }
  

  // const { newsList } = useRecoilValue(state.finddata)
  // console.log('newsList---->', newsList)
  // console.log('state ------->', state)

  // useEffect(() => {
  //   console.log('useEffect-------')
  //   if (!newsList.length) {
  //     findDataDispatch(page)
  //     setTimeout(() => {
  //       setIsLoading(false)
  //     }, 500)
  //   }
  // }, [page]);

  return (
    <Main>
      <div className="title">推荐</div>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
        pullUp={handlePullUp}
        pullDown={handlePullDown}
      >
        <div className="container">
          <div className="teslaFind">
            <img src='https://china-community-app.tesla.cn/community-media/de6f422a-4c62-4a90-a5b0-c7460783bf4b.png' />
          </div>

          <div className="teslaNews">
            {
              newsList.map((item, index) => {
                return (
                  <div className="news" key={index} onClick={() => gotoNews(item)}>
                    <div className="newsLeft">
                      <h1>{item.title}</h1>
                      <p>{item.date}</p>
                    </div>
                    <div className="newsRight">
                      {/* <Lazyload
                        height={100}
                        placeholder={
                          <img width="100%" height="100%" src={loading} />
                        }
                      > */}
                        <img src={item.picUrl} />
                      {/* </Lazyload> */}
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </Scroll>
      <div className={isLoading ? 'pullUpLoading' : ''}>
        <img src={loading2} />
      </div>
    </Main>
  )
}



