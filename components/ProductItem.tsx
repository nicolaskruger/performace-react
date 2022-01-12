import { FC } from "react";

type ProductItemProps = {
    product: {
        id: number,
        price: number,
        title: string,
    }
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}