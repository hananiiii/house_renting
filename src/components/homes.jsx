import React from 'react'
import { Link } from 'react-router-dom'
import Home_2 from '../assets/hotel2.jpg'
import Home_3 from '../assets/home3.jpg'
import Home_4 from '../assets/home4.jpg'
import Home_5 from '../assets/home8.jpg'
import Home_6 from '../assets/home6.jpg'
import Home_7 from '../assets/home7.jpg'
import Home_8 from '../assets/home5.jpg'
import Home_1 from '../assets/hotel1.jpg'
const homes = () => {
    const hm=[
        {
            img:Home_2,
            type:'House',
            bed:'3',
            place:'London',
            title:'123 Maple Street,London',
           price:'150$',


        },
        {
            img:Home_3,
            type:'Apartement',
            bed:'4',
            place:'USA',
            title:'321 Cedar Drive,USA',
           price:'79$',


        },
        
        {
            img:Home_4,
            type:'solo',
            bed:'1',
            place:'Seoul',
            title:'567 Elm Street,Seoul',
           price:'88$',


        },
        {
            img:Home_5,
            type:'house',
            bed:'3',
            place:'Turque',
            title:'234 Birch Road,Turque',
           price:'120$',


        },
        {
            img:Home_6,
            type:'house',
            bed:'3',
            place:'Gress',
            title:'678 Maple Court,Gress',
           price:'70$',


        },
        {
            img:Home_7,
            type:'house',
            bed:'4',
            place:'Japan',
            title:'789 Birch Avenue,Japan',
           price:'100$',


        },
        {
            img:Home_1,
            type:'House',
            bed:'3',
            place:'UAE',
            title:'456 Oak Lane,UAE',
           price:'110',


        },
        {
            img:Home_8,
            type:'house',
            bed:'2',
            place:'China',
            title:'321 Cedar Drive,China',
           price:'90$',


        },
    ]
  return (
    <section className='pt-24'>
           <h1 className='text-text_color text-4xl font-semibold flex text-center mb-3 justify-center '>Houses</h1>
           <p className='text-text_color opacity-40 text-md font-medium flex text-center justify-center '>
           Discover a wide range of listings, each tailored to suit your unique preferences and needs.
           </p>
         <div className='grid lg:grid-cols-4 mt-16 sm:grid-cols-2 grid-cols-1 gap-8 lg:px-20 sm:px-20 px-8'>
            {hm.map((h,index)=>(

            
<Link to={`/single_home/${index}`} key={index}><div  className='relative flex flex-col gap-3 p-4 mb-8 rounded-md border cursor-pointer w-full h-auto'>
             <div className='absolute top-8 right-8 text-xl font-black   text-red-500'>
                      <span className='font-bold text-xl'><ion-icon name="heart-outline"></ion-icon></span>
             </div>
                 <img src={h.img} className='w-full  h-[200px]'/>
                 <div className='flex flex-row gap-2 justify-center mx-auto py-2 '>
                     <div className='text-body_color bg-title_color rounded-full px-4 p-2'>{h.type}</div>
                     <div className='text-body_color bg-text_color rounded-full px-4 p-2'>{h.place}</div>
                 </div>
                 <h1 className='text-text_color text-lg font-semibold  '>{h.title}</h1>

                 <div className='flex justify-between'>
                 <h1 className='text-text_color text-lg font-semibold '>{h.price} a day</h1>
                <span className='flex text-lg font-bold flex-row gap-2 items-center'>
                   {h.bed}
                <span className='text-3xl text-text_color '>
                    <ion-icon name="bed-outline"></ion-icon>
                    
                    </span>
                </span>
                    
                 </div>
                
              </div></Link>
              ))}
         </div>
    </section>
  )
}

export default homes