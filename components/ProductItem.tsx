
import { FC, memo } from "react";
import { compareEqual } from "../utils/equal.util";

type ProductItemProps = {
    product: {
        id: number,
        price: number,
        title: string,
    }
}

export const ProductItemComponent: FC<ProductItemProps> = ({ product }) => {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, ({ product: a }, { product: b }) => Object.is(a, b))