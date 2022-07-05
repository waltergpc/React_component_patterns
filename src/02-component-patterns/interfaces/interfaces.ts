import { ReactElement, CSSProperties } from 'react'
import { ButtonProps } from '../components/ProductButtons'
import { ImageProps } from '../components/ProductImage'
import { TitleProps } from '../components/ProductTitle'

export interface ProductCardProps {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  title: string
  img?: string
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element
  Title: ({ title, className }: TitleProps) => JSX.Element
  Image: ({ img, className }: ImageProps) => JSX.Element
  Buttons: ({ className }: ButtonProps) => JSX.Element
}

// interface ProductButtonProps {
//   increaseBy: (value: number) => void
//   counter: number
// }

export interface onChangeArgs {
  product: Product
  count: number
}

export interface ProductInCart extends Product {
  count: number
}
