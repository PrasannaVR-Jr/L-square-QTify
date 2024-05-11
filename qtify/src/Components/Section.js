import {useEffect,useState} from 'react';
import Card from "./Card";
import "./Section.css";
import axios from "axios";

function Section({sectionName="Top Albums",APIlink="https://qtify-backend-labs.crio.do/albums/top"})
{
    const [albums,setAlbums]=useState([]);

    useEffect(()=>{
        axios.get(APIlink).then((res)=>{
            setAlbums(res.data)
        })
    },[]);

    return (
        <div class="Section">
            <div class="Top">
                <h3>{sectionName}</h3>
                <button class="TopBtn">Collapse</button>
            </div>
            <div className='CardSection'>
                {
                    albums.map(
                        (album)=>(
                            <div><Card imgURL={album.image} noFollows={album.follows} name={album.title}/></div>
                        )
                    )
                }
            </div>
            
        </div>
    );
}

export default Section;