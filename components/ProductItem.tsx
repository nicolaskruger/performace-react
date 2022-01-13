
import { FC, memo } from "react";
import { compareEqual } from "../utils/equal.util";

type ProductItemProps = {
    product: {
        id: number,
        price: number,
        title: string,
    },
    onAddToWishList: (id: number) => Promise<void>
}

export const ProductItemComponent: FC<ProductItemProps> = ({ product, onAddToWishList }) => {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
            <button onClick={() => onAddToWishList(product.id)} >Add to wish List</button>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, ({ product: a }, { product: b }) => Object.is(a, b))