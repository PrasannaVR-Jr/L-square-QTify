import {useEffect,useState} from 'react';
import Card from "./Card";
import "./Section.css";
import axios from "axios";
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import CorouselView from './Corousel';
import "./CarouselNavigation.css";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import GenreTabs from './GenreTabs';

function Section({sectionName="Top Albums",APIlink="https://qtify-backend-labs.crio.do/albums/top"})
{
    const [albums,setAlbums]=useState([]);
    const [isCollapsed,setCollapsedView]=useState(true);


    useEffect(()=>{
        axios.get(APIlink).then((res)=>{
            setAlbums(res.data)
        })
    },[]);

    const GridView=({isSongSection=false})=>{
       const items= albums.map(
            (album)=>(
                <div><Card imgURL={album.image} noFollows={album.follows} name={album.title}/></div>
            )
        );

        return (<div className='GridSection'>{items}</div>);
    }


    let content;

    if(sectionName==="Songs")
    {

        content=(<div className='Section'>
        <div class="Top">
        <h3>{sectionName}</h3>
        
    </div>
    {/* Tab part */}
    <GenreTabs songs={albums}/>
    

    
    </div>)

    }
    else
    {
        content=(<div className='Section'>
        <div class="Top">
        <h3>{sectionName}</h3>

        <button class="TopBtn" onClick={()=>setCollapsedView(!isCollapsed)}>{isCollapsed?'Expand':'Collapse'}</button>
        
    </div>
        {isCollapsed?<CorouselView objects={albums}/>:<GridView/>}
    </div>
    )
    }

    return (
        <>
            {content}
        </>    
        
    );
}

export default Section;