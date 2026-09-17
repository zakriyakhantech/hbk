import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PageType, 
  Product, 
  CartItem, 
  BlanketCategory, 
  BlanketSize, 
  ProductVariant, 
  CurrencyCode,
  Review 
} from '../types';
import { PRODUCTS, CURRENCIES, REVIEWS } from '../data/products';

interface ShopContextType {
  page: PageType;
  setPage: (page: PageType) => void;
  selectedProduct: Product | null;
  navigateToProduct: (product: Product) => void;
  cart: CartItem[];
  addToCart: (product: Product, variant?: ProductVariant, size?: BlanketSize, quantity?: number) => void;
  removeFromCart: (productId: string, variantId: string, size: BlanketSize) => void;
  updateCartQuantity: (productId: string, variantId: string, size: BlanketSize, qty: number) => void;
  clearCart: () => void;
  cartTotalPKR: number;
  cartItemCount: number;
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  formatPrice: (pricePKR: number) => string;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isWarmthQuizOpen: boolean;
  setIsWarmthQuizOpen: (open: boolean) => void;
  isTextureViewerOpen: boolean;
  setIsTextureViewerOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: BlanketCategory;
  setActiveCategory: (cat: BlanketCategory) => void;
  discountCode: string;
  discountPercent: number;
  applyDiscount: (code: string) => { success: boolean; message: string };
  toastMessage: string | null;
  showToast: (msg: string) => void;
  reviews: Review[];
  addReview: (data: { productId: string; author: string; city: string; rating: number; title: string; comment: string }) => Review;
  getReviewsForProduct: (productId: string) => Review[];
  exportReviewsJSON: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [page, setPage] = useState<PageType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(() => PRODUCTS[0]);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hbk_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('hbk_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currency, setCurrency] = useState<CurrencyCode>('PKR');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWarmthQuizOpen, setIsWarmthQuizOpen] = useState(false);
  const [isTextureViewerOpen, setIsTextureViewerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<BlanketCategory>('all');
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Reviews loaded from public/reviews.json with local user submissions merged
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('hbk_reviews_cache');
      return saved ? JSON.parse(saved) : REVIEWS;
    } catch {
      return REVIEWS;
    }
  });

  // Fetch reviews from public/reviews.json on app mount
  useEffect(() => {
    fetch('./reviews.json')
      .then(res => {
        if (!res.ok) throw new Error('Could not load reviews.json');
        return res.json();
      })
      .then((publicReviews: Review[]) => {
        if (Array.isArray(publicReviews) && publicReviews.length > 0) {
          setReviews(prev => {
            // Preserve user-submitted reviews (id starting with rev-user-)
            const userReviews = prev.filter(r => r.id.startsWith('rev-user-'));
            const publicIds = new Set(publicReviews.map(r => r.id));
            const merged = [...userReviews.filter(r => !publicIds.has(r.id)), ...publicReviews];
            try {
              localStorage.setItem('hbk_reviews_cache', JSON.stringify(merged));
            } catch {}
            return merged;
          });
        }
      })
      .catch(() => {
        // Fallback to initial local cache / REVIEWS
      });
  }, []);

  const addReview = (data: {
    productId: string;
    author: string;
    city: string;
    rating: number;
    title: string;
    comment: string;
  }) => {
    const newRev: Review = {
      id: `rev-user-${Date.now()}`,
      productId: data.productId,
      author: data.author.trim() || 'Verified Customer',
      city: data.city.trim() || 'Pakistan',
      rating: Math.max(1, Math.min(5, data.rating)),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      title: data.title.trim() || 'Verified HBK Blanket Review',
      comment: data.comment.trim(),
      verifiedPurchase: true
    };

    setReviews(prev => {
      const updated = [newRev, ...prev];
      try {
        localStorage.setItem('hbk_reviews_cache', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    showToast('🌟 Review posted successfully and added to store reviews!');
    return newRev;
  };

  const getReviewsForProduct = (productId: string) => {
    return reviews.filter(r => r.productId === productId);
  };

  const exportReviewsJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(reviews, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'reviews.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('💾 Downloaded public/reviews.json with latest submissions!');
  };

  // Sync with local storage
  useEffect(() => {
    try {
      localStorage.setItem('hbk_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('hbk_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 3200);
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setPage('product');
  };

  const addToCart = (
    product: Product, 
    variant?: ProductVariant, 
    size?: BlanketSize, 
    quantity = 1
  ) => {
    const chosenVariant = variant || product.variants[0];
    const defaultSize: BlanketSize = product.category === 'baby-kids' 
      ? 'Baby / Crib (100 x 120 cm)' 
      : 'Double / Queen (200 x 240 cm)';
    const chosenSize = size || defaultSize;

    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => 
          item.product.id === product.id && 
          item.selectedVariant.id === chosenVariant.id && 
          item.selectedSize === chosenSize
      );

      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex] = {
          ...copy[existingIndex],
          quantity: copy[existingIndex].quantity + quantity
        };
        return copy;
      } else {
        return [
          ...prev, 
          { 
            product, 
            selectedVariant: chosenVariant, 
            selectedSize: chosenSize, 
            quantity 
          }
        ];
      }
    });

    showToast(`Added ${quantity}x "${product.name}" to cart`);
  };

  const removeFromCart = (productId: string, variantId: string, size: BlanketSize) => {
    setCart(prev => 
      prev.filter(
        item => !(item.product.id === productId && item.selectedVariant.id === variantId && item.selectedSize === size)
      )
    );
  };

  const updateCartQuantity = (productId: string, variantId: string, size: BlanketSize, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId, variantId, size);
      return;
    }
    setCart(prev => 
      prev.map(item => {
        if (item.product.id === productId && item.selectedVariant.id === variantId && item.selectedSize === size) {
          return { ...item, quantity: qty };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to your wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const applyDiscount = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'HBK10') {
      setDiscountCode(clean);
      setDiscountPercent(10);
      showToast('🎉 10% factory discount applied!');
      return { success: true, message: '10% factory discount applied!' };
    }
    if (clean === 'WINTERWARMTH' || clean === 'WINTER15') {
      setDiscountCode(clean);
      setDiscountPercent(15);
      showToast('🎉 15% Winter warmth special applied!');
      return { success: true, message: '15% Winter warmth special applied!' };
    }
    if (clean === 'FREESHIP') {
      setDiscountCode(clean);
      setDiscountPercent(5);
      showToast('🎉 Extra shipping bonus applied!');
      return { success: true, message: 'Bonus discount applied!' };
    }
    return { success: false, message: 'Invalid promo code. Try HBK10 or WINTER15' };
  };

  const cartTotalPKR = cart.reduce((sum, item) => {
    return sum + (item.product.pricePKR * item.quantity);
  }, 0);

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const formatPrice = (pricePKR: number) => {
    const config = CURRENCIES[currency];
    const converted = pricePKR * config.rateFromPKR;

    if (currency === 'PKR') {
      return `${config.symbol} ${Math.round(converted).toLocaleString('en-PK')}`;
    } else {
      return `${config.symbol}${converted.toFixed(2)}`;
    }
  };

  return (
    <ShopContext.Provider
      value={{
        page,
        setPage,
        selectedProduct,
        navigateToProduct,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotalPKR,
        cartItemCount,
        currency,
        setCurrency,
        formatPrice,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isWarmthQuizOpen,
        setIsWarmthQuizOpen,
        isTextureViewerOpen,
        setIsTextureViewerOpen,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        discountCode,
        discountPercent,
        applyDiscount,
        toastMessage,
        showToast,
        reviews,
        addReview,
        getReviewsForProduct,
        exportReviewsJSON
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
