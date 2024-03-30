import { UseMinicart } from './MinicartContext';

interface ProductDataBuyButton {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  originalPrice: number;
  quantity: number;
  reputation: number;
}

export function UseAddMinicart(
  product: ProductDataBuyButton,
  quantity?: number
) {
  const { addProduct, updateQuantity, products } = UseMinicart();

  const productAdded = products?.findIndex((item) =>
    item.id === product?.id ? true : false
  );

  if (productAdded) {
    const productQuantity = {
      id: product.id,
      quantity: (product.quantity += 1)
    };

    updateQuantity(productQuantity);
  } else {
    product.quantity = quantity ? quantity : 1;
    addProduct(product);
  }
}
