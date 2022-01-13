import { FC } from "react";

export type AddProductToWishListProps = {
    onAddToWishlist: () => void;
    onRequestClose: () => void;
}

export const AddProductToWishList: FC<AddProductToWishListProps> = ({
    onAddToWishlist,
    onRequestClose
}) => {
    return (
        <span>
            Deseja adicionar aos favoritos
            <button onClick={onAddToWishlist}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </span>
    )
}
