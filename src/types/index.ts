type OrderInfo = {
  icon: string;
  title: string;
  number: number;
};
type CursorPosition = {
  x: number;
  y: number;
};
type Testimonials = {
  name: string;
  title: string;
  comment: string;
  image: string;
};
type Stats = {
  num: string;
  des: string;
};
type CustomerNav = {
  icon: string;
  title: string;
  route: string;
};
type OwnerNav = {
  icon: string;
  title: string;
  route: string;
};
type NavBarNav = {
  title: string;
  route: string;
};

type SignupInputs = {
  first_name: string;
  email: string;
  password: string;
  policy?: boolean;
};

export type {
  SignupInputs,
  CursorPosition,
  CustomerNav,
  NavBarNav,
  OrderInfo,
  OwnerNav,
  Stats,
  Testimonials,
};
