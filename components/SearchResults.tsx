import { FC, useMemo } from "react"
import { ProductItem } from "./ProductItem"

type SearchResultProps = {
    result: {
        id: number,
        price: number,
        title: string,
    }[],
    onAddToWishList: (id: number) => Promise<void>
}

export const SearchResult: FC<SearchResultProps> = ({ result, onAddToWishList }) => {

    const totalPrice = useMemo(
        () => result.reduce((total, product) => {
            return total + product.price;
        }, 0), [result]);

    return (
        <div>
            <h2>{totalPrice}</h2>
            {result.map((product, index) => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToWishList={onAddToWishList}
                    />
                )
            })}
        </div>
    )
}