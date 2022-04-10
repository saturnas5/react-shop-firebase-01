import React, {useState} from "react";
import './Directory.scss';
import MenuItem from "../MenuItem/MenuItem";


const Directory = () => {
    const [images, setImages] = useState({
        sections: [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'sneakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'womens'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'mens'

            }
        ]
    });

    return (
        <div className="directory-menu">
            {images.sections.map(({title, imageUrl, id, size, linkUrl}) => {
                return <MenuItem key={id} title={title.toUpperCase()} img={imageUrl} size={size} linkUrl={linkUrl} />
            })}
        </div>
    )
}

export default Directory;