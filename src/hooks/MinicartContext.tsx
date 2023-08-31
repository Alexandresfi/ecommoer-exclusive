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
  quantity?: number;
}

interface MinicartData {
  addProduct: (item: ProductData) => void;
  deleteProduct: (id: string) => void;
  updateQuantity: (quantity: QuantityProps) => void;
  products: ProductData[];
}

interface QuantityProps {
  id: string;
  quantity: number;
}

const MinicartContext = createContext<MinicartData>({} as MinicartData);

export function MinicartProvider({ children }: ChildrenProps) {
  const [products, setProducts] = useState<ProductData[]>([]);

  function addProduct(product: ProductData) {
    setProducts([...products, product]);
  }

  function deleteProduct(id: string) {
    const productsFiltered = products.filter((item) => item.id !== id);
    setProducts(productsFiltered);
  }

  function updateQuantity({ id, quantity }: QuantityProps) {
    if (quantity >= 1) {
      const productUpdateQuantity = products.map((product) =>
        product.id === id ? { ...product, quantity: quantity } : product
      );

      setProducts(productUpdateQuantity);
    } else {
      deleteProduct(id);
    }
  }

  const copyLocal = useCallback(() => {
    function savedLocal() {
      localStorage.setItem(
        '@ecommerExclisive:minicartData-v0.1',
        JSON.stringify(products)
      );
    }

    savedLocal();
  }, [products]);

  function getProductLocal() {
    const existProduct = localStorage.getItem(
      '@ecommerExclisive:minicartData-v0.1'
    );

    if (existProduct) {
      existProduct !== '[]' && setProducts(JSON.parse(existProduct));
    }
  }

  useEffect(() => {
    getProductLocal();
  }, []);

  useEffect(() => {
    copyLocal();
  }, [copyLocal]);

  return (
    <MinicartContext.Provider
      value={{ addProduct, deleteProduct, updateQuantity, products }}
    >
      {children}
    </MinicartContext.Provider>
  );
}

export function UseMinicart() {
  const context = useContext(MinicartContext);

  return context;
}
