import React, { useEffect } from 'react';
import { Rotation } from './RotationChart.style.js'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { useNavigate  } from 'react-router-dom'
// import CarInfo from '../../carInfo/CarInfo.jsx';

const RotationChart = (props) => {

  const { rotationImg } = props

  console.log('rotationImgProps--->', props)
  
  //v5的useHistory=》v6useNavigate
  const navigate  = useNavigate();
    

  useEffect(() => {
    setTimeout(() => {
      console.dir(Swiper)
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 1500
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      })
    }, 100);
  }, [])

  const goToDetail = (item) => {
    console.log(item);
    navigate(`/tesla/car/${item.id}`, {state: item })
  }

  return (
    <div>
      <Rotation>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              rotationImg.map((item, index) => {
                return (
                  <div
                    className="swiper-slide"
                    key={index}
                  >
                    <a className='carName'>{item.name}</a>
                    {/* <CarInfo res={item} /> */}
                    <div>
                      <img className='rotationChart-img' src={item.picUrl} alt="" />
                    </div>
                    <button onClick={() => goToDetail(item)} className='carBuy'>立即订购</button>
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pagination">
          </div>
        </div>
      </Rotation>
    </div>
    
  );
}

export default RotationChart;