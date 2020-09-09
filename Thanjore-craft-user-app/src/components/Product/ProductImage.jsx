import React from 'react'

function ProductImage(props) {
    return (
        <div>
            <img src={props.src} className={props.className} alt={''} />
        </div>
    )
}

export default ProductImage
