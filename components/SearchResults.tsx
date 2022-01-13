import { FC, useMemo } from "react"
import { ProductItem } from "./ProductItem"

type SearchResultProps = {
    result: {
        id: number,
        price: number,
        title: string,
    }[]
}

export const SearchResult: FC<SearchResultProps> = ({ result }) => {

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
                        product={product} />
                )
            })}
        </div>
    )
}