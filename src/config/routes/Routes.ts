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
  myOrders: "my-orders",
  orderPage: (id: string) => `my-orders/${id}`,
  shoppingCart: "shopping-cart",
  myWishlist: "my-wishlist",

  guestWishlist: "wishlist",
} as const;