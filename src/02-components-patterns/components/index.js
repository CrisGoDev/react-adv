import { ProductCard as ProductCardHOC} from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductoTitle } from "./ProductTitle";



export { ProductoTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";
// export { ProductCard } from "./ProductCard";
export { ProductImage } from "./ProductImage";


export const ProductCard = Object.assign(ProductCardHOC,{
    Title:ProductoTitle,
    Image :ProductImage,
    Buttons:ProductButtons
})

