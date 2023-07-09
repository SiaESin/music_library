import { useState } from 'react'

function GalleryItem(props) {
    let [view, setView] = useState(false)
    const simpleStyle = {
        'width': '25vw',
        'height': '30vh',
        'border': '2px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '60vw',
        'height': '20vh',
        'border': '2px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': '#087F8C'
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
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline'}}> 
        {/* changed to inline instead of inline-block */}
        
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}

        </div>
    )

}
export default GalleryItem
