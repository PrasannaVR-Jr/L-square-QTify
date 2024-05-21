import {useEffect,useState} from 'react';
import Card from "./Card";
import "./Section.css";
import axios from "axios";
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import "./CarouselNavigation.css";

function Section({sectionName="Top Albums",APIlink="https://qtify-backend-labs.crio.do/albums/top"})
{
    const [albums,setAlbums]=useState([]);
    const [isCollapsed,setCollapsedView]=useState(false);


    useEffect(()=>{
        axios.get(APIlink).then((res)=>{
            setAlbums(res.data)
        })
    },[]);

    const GridView=()=>{
       const items= albums.map(
            (album)=>(
                <div><Card imgURL={album.image} noFollows={album.follows} name={album.title}/></div>
            )
        );

        return (<div className='GridSection'>{items}</div>);
    }

    const CorouselView=()=>{
        const items = albums.map((album)=>(
            <SwiperSlide><Card imgURL={album.image} noFollows={album.follows} name={album.title}/></SwiperSlide>
        )
        );

        return (
        <Swiper 
        slidesPerView={8}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className='CarouselSection'>
            {items}
        </Swiper>
        );
    };

    return (
        <div class="Section">
            <div class="Top">
                <h3>{sectionName}</h3>
                <button class="TopBtn" onClick={()=>setCollapsedView(!isCollapsed)}>{isCollapsed?'Expand':'Collapse'}</button>
            </div>
            
            {isCollapsed?<CorouselView/>:<GridView objects={albums}/>}
            
                        
        </div>
    );
}

export default Section;