import "./Card.css"

function Card({ imgURL="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
, noFollows=100, 
noLikes=0,
name="Shoddy Excuse" ,
isSongCard=false})
{

    return(
        <div class="CardParent">
            <div class="Card">
                <img src={imgURL} alt={name}/>
                <div class="container">
                <button>{isSongCard?`${noLikes} Likes`:`${noFollows} Follows`}</button>
                </div>
                
            </div>
            <p>{name}</p>
        </div>
            
        
    )
}

export default Card;