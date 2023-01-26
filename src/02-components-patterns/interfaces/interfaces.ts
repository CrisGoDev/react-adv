import { ReactElement } from 'react';
export interface Product {
    id: string,
    title: string,
    img?: string
}


export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[]
}

export interface ProductContextProps {
    product: Product;
    counter: number;
    increasBy: (counter: number) => void;
}