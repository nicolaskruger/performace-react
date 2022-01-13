import { FC, useMemo } from "react"
import { ProductItem } from "./ProductItem"
import { List, ListRowRenderer } from "react-virtualized";

type SearchResultProps = {
    result: {
        id: number,
        price: number,
        title: string,
        priceFormatted: string,
    }[],
    totalPrice: number,
    onAddToWishList: (id: number) => Promise<void>
}

export const SearchResult: FC<SearchResultProps> = ({ result, onAddToWishList, totalPrice }) => {

    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div
                key={key}
                style={style}
            >
                <ProductItem
                    product={result[index]}
                    onAddToWishList={onAddToWishList}
                />
            </div>
        )
    }

    return (
        <div>
            <h2>{totalPrice}</h2>
            <List
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={result.length}
                rowRenderer={rowRenderer}
            />
        </div>
    )
}