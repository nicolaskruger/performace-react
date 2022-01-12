import { FC } from "react"
import { ProductItem } from "./ProductItem"

type SearchResultProps = {
    result: {
        id: number,
        price: number,
        title: string,
    }[]
}

export const SearchResult: FC<SearchResultProps> = ({ result }) => {
    return (
        <div>
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