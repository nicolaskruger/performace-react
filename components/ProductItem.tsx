
import dynamic from "next/dynamic";
import { FC, memo, useState } from "react";
import { AddProductToWishListProps } from "./AddProductToWishList";
import lodash from "lodash";
const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
    return import("./AddProductToWishList").then(mod => mod.AddProductToWishList)
}, {
    loading: () => (
        <span>carregando...</span>
    )
})

type ProductItemProps = {
    product: {
        id: number,
        price: number,
        title: string,
    },
    onAddToWishList: (id: number) => Promise<void>
}

export const ProductItemComponent: FC<ProductItemProps> = ({ product, onAddToWishList }) => {

    const [isAddingToWishList, setIsAddingToWishList] = useState(false);

    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
            <button onClick={() => setIsAddingToWishList(true)} >Adicionar aos favoritos</button>
            {
                isAddingToWishList &&
                <AddProductToWishList
                    onAddToWishlist={() => onAddToWishList(product.id)}
                    onRequestClose={() => setIsAddingToWishList(false)}
                />
            }
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, ({ product: a }, { product: b }) => lodash.isEqual(a, b))