import GalleryItem from './GalleryItem'

const Gallery = (props) => {


    console.log('PROPSSS in gallery', props)
    //const data = props.data.result.read()

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            <h1> testt gallery</h1>
            {display}
        </div>
    )
}


export default Gallery
