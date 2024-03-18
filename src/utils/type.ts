import { NextPage } from "next";
import { AppProps } from "next/app";
import { StaticImageData } from "next/image";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};
export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
export type commonSideBarProps = {
    viewCart: boolean;
    actionCb: (e: boolean) => void;
};
export type dropDowns = {
    name: string;
    value: string;
};

export type MenuLinkItem = {
    id: number;
    link: string;
    title: string;
    icon?: React.ReactNode;
    logout?: boolean;
    nestedItem?: string[];
};

export type ordersType = {
  id: number;
  orderId: string;
  orderDate: string;
  orderPrice: number;
  status: {
    name: string;
    process: boolean;
    active: boolean;
  }[];
  totalOrders: number;
  image: any;
};

export type ProductType = {
    id: number;
    name: string;
    image: string; // Assuming Tshirt is a variable containing the image path
    price: number;
    description: string;
    stock: number;
    sizes: string[];
    discount: number;
    rating: number;
};

export type AddressesType = {
    name: string;
    phone: string;
    city: string;
    street: string;
    specialPlace: string;
};

export type Country = {
    code: string;
    name: string;
    image: string | StaticImageData;
};

export type Currency = {
    code: string;
    name: string;
    image: string | StaticImageData;
};
