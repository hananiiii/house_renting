import Profile from "../Assets/profilepic.jpg";
import Profiletwo from "../Assets/profiletwo.jpg";
import Profilethree from "../Assets/profilethree.jpg";
import Footer from "../components/footer";
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import Header from '../components/header'
import { useParams } from 'react-router-dom'
import Home_2 from '../assets/hotel2.jpg'; // Import the image
import Home_3 from '../assets/home3.jpg';
import Home_4 from '../assets/home4.jpg';
import Home_5 from '../assets/home8.jpg';
import Home_6 from '../assets/home6.jpg';
import Home_7 from '../assets/home7.jpg';
import Home_8 from '../assets/home5.jpg';
import Home_1 from '../assets/hotel1.jpg';
import Bed_3 from '../assets/bed3.jpg'
import Bed_4 from '../assets/bed4.jpg'
import Bed_5 from '../assets/bed5.jpg'
import Bed_6 from '../assets/bed6.jpg'
import Bed_7 from '../assets/bed7.jpg'
import Bed_8 from '../assets/bed8.jpg'
import Bath_1 from '../assets/bath1.jpg'
import Bath_2 from '../assets/bath2.jpg'
import Bath_3 from '../assets/bath3.jpg'
import Bath_4 from '../assets/bath4.jpg'
import Bath_5 from '../assets/bath5.jpg'
import Bath_6 from '../assets/bath6.jpg'
import Kit_1 from '../assets/kit1.jpg'
import Kit_2 from '../assets/kit2.jpg'
import Kit_4 from '../assets/kit4.jpg'
import Kit_5 from '../assets/kit5.jpg'
import Kit_6 from '../assets/kit6.jpg'
import Kit_7 from '../assets/kit7.jpg'
import Kit_8 from '../assets/kit8.jpg'
import Set_1 from '../assets/set1.jpg'
import Set_2 from '../assets/set2.jpg'
import Set_3 from '../assets/set3.jpg'
import Set_4 from '../assets/set4.jpg'
import Set_5 from '../assets/set5.jpg'
import Set_6 from '../assets/set6.jpg'
import Set_7 from '../assets/set7.jpg'
import Set_8 from '../assets/set8.jpg'
const single_home = () => {
        const { id } = useParams();
        const hm=[
            {
                img:Home_2,
                img2:Set_2,
                img3:Kit_2,
                img4:Bath_2,
                img5:Bed_3,
                type:'House',
                bed:'3',
                place:'London',
                title:'123 Maple Street,London',
               price:'150$',
               star:'5'
    
    
            },
            {
                img:Home_3,
                img2:Set_3,
                img4:Kit_8,
                img5:Bath_3,
                img3:Bed_4,
                type:'Apartement',
                bed:'4',
                place:'USA',
                title:'321 Cedar Drive,USA',
               price:'79$',
               star:'4.7'
    
            },
            
            {
                img:Home_4,
                img2:Set_4,
                img3:Kit_4,
                img4:Bath_4,
                img5:Bed_5,
               
                type:'solo',
                bed:'1',
                place:'Seoul',
                title:'567 Elm Street,Seoul',
               price:'88$',
               star:'5'
    
            },
            {
                img:Home_5,
               
                img2:Set_5,
                img3:Kit_5,
                img4:Bath_5,
                img5:Bed_6,
                type:'house',
                bed:'3',
                place:'Turque',
                title:'234 Birch Road,Turque',
               price:'120$',
               star:'4.5'
    
            },
            {
                img:Home_6,
               
                img2:Set_6,
                img3:Kit_6,
                img4:Bath_6,
                img5:Bed_7,
                type:'house',
                bed:'3',
                place:'Gress',
                title:'678 Maple Court,Gress',
               price:'70$',
               star:'4.6'
    
            },
            {
                img:Home_7,
               
                img2:Set_7,
                img3:Kit_7,
                img4:Bath_6,
                img5:Bed_8,
                type:'house',
                bed:'4',
                place:'Japan',
                title:'789 Birch Avenue,Japan',
               price:'100$',
               star:'5'
    
    
            },
            {
                img:Home_1,
               
                img2:Set_8,
                img3:Kit_8,
                img4:Bath_3,
                img5:Bed_3,
                type:'House',
                bed:'3',
                place:'UAE',
                title:'456 Oak Lane,UAE',
               price:'110',
               star:'5'
    
            },
            {
                img:Home_8,
               
                img2:Set_1,
                img3:Kit_1,
                img4:Bath_1,
                img5:Bed_5,
                type:'house',
                bed:'2',
                place:'China',
                title:'321 Cedar Drive,China',
               price:'90$',
               star:'4.2'
    
    
            },
        ]
        const selectedHome = hm[id];
        if (!selectedHome) {
            return <div>Home not found</div>;
          }
    

         
          const [smallImages, setSmallImages] = useState([...Array(4)].map((_, i) => selectedHome[`img${i+2}`]));
          const [activeImage, setActiveImage] = useState(selectedHome.img);
        
          const handleSmallImageClick = (clickedImage, index) => {
            setSmallImages(prev => {
              const newSmallImages = [...prev];
              newSmallImages[index] = activeImage;
              return newSmallImages;
            });
            setActiveImage(clickedImage);
          };
    // const [images, setImages] = useState({
    //     img1:Home_2,
    //     img2:Home_2,
    //     img3:Home_2,
    //     img4:Home_2,
    //     img5:Home_2,
    // })

    // const [activeImg, setActiveImage] = useState(images.img1)

    // const [amount, setAmount] = useState(1);

    const feedbackData = [
        {
          id: 1,
          name: 'John Doe',
          rating: 5,
          comment: 'Un endroit merveilleux avec une vue spectaculaire, nous avons passé un moment totalement calme et paisible… il ny a pas de pollution lumineuse ou sonore donc si vous allez avec le plan Nous avons passé un super séjour ! Le logement dispose de tout le nécessaire : chauffage, eau chaude, cuisine équipée, vélos et une superbe vue !',
          profileImg :Profile
        },
        {
          id: 2,
          name: 'Jane Smith',
          rating: 4,
          comment: 'Visiting Rome was an absolute dream come true The city s rich history and stunning architecture left me in awe at every turn. The Colosseum, with its grandeur and incredible history, was a sight to behold Walking through the ancient ruins of the Roman Forum made me feel like I had stepped back in time..',
          profileImg :Profiletwo
        },
        {
          id: 3,
          name: 'Mike Johnson',
          rating: 3,
          comment: 'Nous avons passé un super séjour ! Le logement dispose de tout le nécessaire : chauffage, eau chaude, cuisine équipée, vélos et une superbe vue !Nous avons passé un super séjour ! Le logement dispose de tout le nécessaire : chauffage, eau chaude, cuisine équipée, vélos et une superbe vue !',
          profileImg :Profilethree
        },
      ];
      
     
        const [currentFeedback, setCurrentFeedback] = useState(feedbackData[0]);
      
        const handleImageClick = (feedback) => {
          setCurrentFeedback(feedback);
        };
  return (
    <section>
    <Header/>
    <div className="container flex flex-wrap  items-center justify-center mx-auto mt-10 lg:px-24 px-8  md:flex-row mb-8">
    <div className="mb-14 lg:mb-0 lg:w-1/2 sm:w-full   flex flex-col gap-8 ">
                <img  src={activeImage} alt="" className='w-full h-[400px] aspect-square object-cover rounded-xl'/>
             
                    <div className='grid lg:grid-cols-4 grid-cols-2 w-full  gap-12 lg:justify-between'>
                    {smallImages.map((smallImage, index) => (
                      <img
                        key={index}
                        src={smallImage}
                        alt=""
                        className=' w-64 lg:w-32 h-32 rounded-md cursor-pointer'
                        onClick={() => handleSmallImageClick(smallImage, index)}
                      />
                    ))}
                  </div>
             
             
            </div>
            {/* ABOUT */}
            <div className='flex flex-col text-text_color gap-4 lg:w-2/4 w-full lg:pl-24'>

    <div className="w-full mx-auto  p-6 bg-white rounded shadow-xl border border-text_color ">
      <h2 className="text-2xl mb-6 font-semibold  flex justify-center ">Reserve now</h2>
      <form>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">Departure Time</label>
          <input
            type="time"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">Arrival Date</label>
          <input
            type="date"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">Number of People</label>
          <input
            type="number"
            min="1"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-title_color mb-8 w-full hover:opacity-40 text-white font-bold py-2 px-4 rounded-md"
        >
          Reserve
        </button>
       
        <div className='flex justify-between'>
            <h1 className='text-text_color font-semibold text-2xl  '>{selectedHome.price}$</h1>
            <span className='flex items-center font-semibold gap-2 text-yellow-300 text-2xl '>
              {selectedHome.star} <ion-icon name="star-outline"></ion-icon>
            </span>
        </div>
      </form>
    </div>
 




                  
            </div>
        </div>

        <div className="container flex flex-wrap  items-center justify-center mx-auto    md:flex-row mb-8">
             <div className="mb-14 lg:mb-0 lg:w-1/2 sm:w-full   flex flex-col gap-8 ">
             <div className="lg:w-[590px] sm:w-[590px] w-[400px]  lg:pt-32 sm:pt-20 pt-20 lg:pl-32 sm:pl-12 pl-6 font-abc">
      <h3 className="font-semibold text-text_color text-2xl">Client Feedback</h3>
      <div className="border-t-2 mt-2 pt-2">
      <p className="font-semibold  text-title_color mt-2 underline"> {currentFeedback.name}</p>
        <p className="font-light  text-text_color mt-4">{currentFeedback.comment}</p>
        
        <div className="flex items-center mb-2 mt-4">
         
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-2xl ${
                star <= currentFeedback.rating ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <div className='flex lg:gap-32 sm:gap-32 gap-20'>
      <div className="flex gap-4 mt-4">
        {feedbackData.map((feedback) => (
          <img
            key={feedback.id}
            src={feedback.profileImg}
            alt={feedback.name}
            className={`lg:w-12 lg:h-12 h-10 w-10 rounded-full cursor-pointer  ${
              currentFeedback.id === feedback.id ? 'border-2 border-title_color' : 'border'
            }`}
            onClick={() => handleImageClick(feedback)}
          />
        ))}
      </div>
      </div>
    </div>
            </div>
            <div className='flex flex-col text-text_color gap-4 lg:w-2/4 w-full '>
            <div className=" sm:w-full w-[85%]  lg:w-[75%] lg:h-[350px]  h-[400px] bg-gray-300 rounded-lg overflow-hidden   lg:mt-24 p-10 lg:ml-12  flex justify-center mx-auto lg:items-end  relative">
      <iframe width="100%" height="100%" class="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
></iframe>
      </div>
            </div>

        </div>
        <Footer/>
    </section>
  )
}

export default single_home