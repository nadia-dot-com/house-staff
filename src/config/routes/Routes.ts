export const ROUTES = {
  basePath: '/',
  mainLayout: "",
  home: "",
  contact: "contacts",

  products: "products",
  productCategory: (category: string) => `products/${category}`,

  googleCallback: "auth/google-callback",
  userAccount: "user-account",
  profile: "profile",
  orders: "orders",
  orderPage: (id: string) => `orders/${id}`,
  shoppingCart: "shopping-cart",
  wishlist: "wishlist",

  guestWishlist: "wishlist",
} as const;