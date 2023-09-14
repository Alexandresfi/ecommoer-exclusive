'use client';

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

interface ChildrenProps {
  children: ReactNode;
}

interface ProductData {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  originalPrice: number;
  reputation: number;
}

interface WishlistData {
  addProduct: (item: ProductData) => void;
  deleteProduct: (id: string) => void;
  products: ProductData[];
}

const WishlistContext = createContext<WishlistData>({} as WishlistData);

export function WishlistProvider({ children }: ChildrenProps) {
  const [products, setProducts] = useState<ProductData[]>([]);

  function addProduct(product: ProductData) {
    setProducts([...products, product]);
  }

  function deleteProduct(id: string) {
    const productsFiltered = products.filter((item) => item.id !== id);
    setProducts(productsFiltered);
  }

  const copyLocal = useCallback(() => {
    function savedLocal() {
      localStorage.setItem(
        '@ecommerExclisive:WishlistData-v0.1',
        JSON.stringify(products)
      );
    }

    savedLocal();
  }, [products]);

  function getProductLocal() {
    const existWishlist = localStorage.getItem(
      '@ecommerExclisive:WishlistData-v0.1'
    );

    if (existWishlist) {
      existWishlist !== '[]' && setProducts(JSON.parse(existWishlist));
    }
  }

  useEffect(() => {
    getProductLocal();
  }, []);

  useEffect(() => {
    copyLocal();
  }, [copyLocal]);

  return (
    <WishlistContext.Provider value={{ addProduct, deleteProduct, products }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function UseWishlist() {
  const context = useContext(WishlistContext);

  return context;
}
