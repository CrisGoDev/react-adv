import { ProductButtons, ProductCard, ProductImage, ProductoTitle } from "../components"



const product = {
    id: '1',
    title: 'awsome product',
    img: './coffee-mug.png'
}
export const ShoppingPages = () => {
    return (
        <div>
            <h1>Shopping Pages</h1>
            <hr />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                <ProductCard product={product} >
                    <ProductImage />
                    <ProductoTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
