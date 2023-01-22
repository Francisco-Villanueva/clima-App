import React from 'react'
import { Simulate } from 'react-dom/test-utils'
import './daysCard.css'
export default function DaysCard({data}) {

  console.log('DATA = ', data)

  const dd= new Date(data.date)


  const getWeekDay=(num)=>{
    switch (num){
      case '0':{return 'Dom'}
      case '1':{return 'Lun'}
      case '2':{return 'Mar'}
      case '4':{return 'Jue'}
      case '3':{return 'Mie'}
      case '5':{return 'Vie'}
      case '6':{return 'Sab'}

      default:break;
    }
  }

  const dia =  getWeekDay( dd.getDay().toString())
  
  console.log('DIA: ', dia)
  return (
    <div className='dayCard-container'>
      <b>{dia}</b>
      <img src={data.day.condition.icon} alt="" />
      <b> {data.day.maxtemp_c}°</b>
      <p> {data.day.mintemp_c}°</p>
    </div>
  )
}
