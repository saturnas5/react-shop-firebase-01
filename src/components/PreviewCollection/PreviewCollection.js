import React from "react";
import './PreviewCollection.scss'
import CollectionItem from "../CollectionItem/CollectionItem";

const PreviewCollection = ({ title, items }) => {

    return (
        <div className='preview-collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, idx) => idx < 4).map(({name, price, imageUrl, id}) => {
                    return (
                        <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} />
                    )
                })}
            </div>
        </div>
    )
}

export default PreviewCollection;