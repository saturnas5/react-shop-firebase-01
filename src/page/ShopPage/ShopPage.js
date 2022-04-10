import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

const ShopPage = () => {

    return (
        <div className='shop-page'>
            {SHOP_DATA.map(collection => {
                return <PreviewCollection key={collection.id} title={collection.title} items={collection.items} />
            })}
        </div>
    )
}

export default ShopPage;