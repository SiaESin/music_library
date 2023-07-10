import { useState } from 'react'
import { Link } from 'react-router-dom'

function GalleryItem(props) {
    let [view, setView] = useState(false)
    const simpleStyle = {
        'background-color': '#82A7A6',
        'width': '30vw',
        'height': '30vh',
        'border': '2px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '40vw',
        'height': '30vh',
        'border': '2px solid #287DA4',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': '#0A0A0A'
    }
    
    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
                <img src={props.item.artworkUrl100} alt={'test'}></img>
            </div>
        )
    }
    

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>
                    <Link to={`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </Link>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }
    
    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline'}}>
        
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}

        </div>
    )

}
export default GalleryItem
