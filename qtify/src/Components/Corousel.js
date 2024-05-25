import {useEffect,useState} from 'react';
import Card from "./Card";
import "./Section.css";
import axios from "axios";
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import "./CarouselNavigation.css";

const CorouselView=({objects=null,isSongSection=false,filter=null})=>{
    let items;
    if(isSongSection && filter)
    {
        const songs = objects.filter((song)=>{
            return song.genre.key===filter;
        });

        items = songs.map((song)=>(
            <SwiperSlide> <Card imgURL={song.image} isSongCard={isSongSection} noLikes={song.likes} name={song.title}/> </SwiperSlide>
        )
        );
    }
    else if(isSongSection)
    {
        items = objects.map((song)=>(
            <SwiperSlide> <Card imgURL={song.image} isSongCard={isSongSection} noLikes={song.likes} name={song.title}/> </SwiperSlide>
        )
        );
    }
    else{
        items = objects.map((album)=>(
            <SwiperSlide> <Card imgURL={album.image} noFollows={album.follows} name={album.title}/> </SwiperSlide>
        )
        );
    }
    

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

export default CorouselView;
