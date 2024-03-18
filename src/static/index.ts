import { dropDowns, ordersType } from "@/utils/type";
import Wallet from "@/components/svg/Wallet";
import UserFill from "@/components/svg/UserFill";
import Gift from "@/components/svg/Gift";
import CartFill from "@/components/svg/CartFill";
import Location from "@/components/svg/Location";
import Heart from "@/components/svg/Heart";
import Ticket from "@/components/svg/Ticket";
import Lock from "@/components/svg/Lock";
import HandMoney from "../../public/images/paymentway/hand-money.png";
import Cards from "../../public/images/paymentway/cards.png";
import MyWallet from "../../public/images/paymentway/my-wallet.png";
import KNet from "../../public/images/paymentway/k-net.png";
import Tamara from "../../public/images/paymentway/tamara.png";
import Tabby from "../../public/images/paymentway/tabby.png";
import PayPal from "../../public/images/paymentway/paypal.png";
import IPay from "../../public/images/paymentway/apple-pay.png";
import GPay from "../../public/images/paymentway/google-pay.png";
import CartOutline from "@/components/svg/CartOutline";
import WalletOutline from "@/components/svg/WalletOutline";
import TicketsOutline from "@/components/svg/TicketsOutline";
import FavoritesOutline from "@/components/svg/FavoritesOutline";
import GiftOutline from "@/components/svg/GiftOutline";
import AddressOutline from "@/components/svg/AddressOutline";
import LogoutOutline from "@/components/svg/LogoutOutline";
import orderImage from "/public/images/product/order-image.png";
import delivery from "../../public/images/trackorder/delivery-man.png";
import withCourier from "../../public/images/trackorder/delivery-truck.png";
import onlineOrder from "../../public/images/trackorder/online-order.png";
import orderConfirm from "../../public/images/trackorder/box 1.png";
import trolly from "../../public/images/trackorder/trolley.png";
import Tshirt from "../../public/images/items/tshirt.png";

export const countryDropDown: dropDowns[] = [
    { value: "usa", name: "United States" },
    { value: "canada", name: "Canada" },
    { value: "uk", name: "United Kingdom" },
    { value: "australia", name: "Australia" },
];
export const cityDropDown: dropDowns[] = [
    { value: "usa", name: "Calfornia" },
    { value: "canada", name: "Torento" },
    { value: "uk", name: "London" },
    { value: "australia", name: "Melborn" },
];

export const orders: ordersType[] = [
    {
        id: 1,
        orderId: "6514004d48d156e4658ac1f6",
        orderDate: "27 Sep 2023 11:11",
        orderPrice: 93.8,
        status: [
            {
                name: "Order Created",
                process: true,
                active: false,
            },
            {
                name: "In Processing",
                process: true,
                active: false,
            },
            {
                name: "With Courier",
                process: true,
                active: true,
            },
            {
                name: "Delivered",
                process: false,
                active: false,
            },
        ],
        totalOrders: 1,
        image: orderImage,
    },
    {
        id: 2,
        orderId: "7514004d49d146e4258bd1k6",
        orderDate: "28 Sep 2023 11:11",
        orderPrice: 73.8,
        status: [
            {
                name: "Order Created",
                process: true,
                active: false,
            },
            {
                name: "In Processing",
                process: true,
                active: true,
            },
            {
                name: "With Courier",
                process: false,
                active: false,
            },
            {
                name: "Delivered",
                process: false,
                active: false,
            },
        ],
        totalOrders: 2,
        image: orderImage,
    },
    {
        id: 3,
        orderId: "2914004n48b156d4658ak1f7",
        orderDate: "29 Sep 2023 11:11",
        orderPrice: 52.8,
        status: [
            {
                name: "Order Created",
                process: true,
                active: true,
            },
            {
                name: "In Processing",
                process: false,
                active: false,
            },
            {
                name: "With Courier",
                process: false,
                active: false,
            },
            {
                name: "Delivered",
                process: false,
                active: false,
            },
        ],
        totalOrders: 5,
        image: orderImage,
    },
];
export const addresses = [
    {
        id: 1,
        name: "Salman Mir",
        address: "28347, Saudi Arabia",
        phone: "966584739822",
        status: "Phone no, not verified",
        isDefault: true,
    },
];

export const otherAddresses = [
    {
        id: 1,
        name: "Salman Mir",
        address: "15748, Saudi Arabia",
        phone: "966584739822",
        status: "Phone no, not verified",
        isDefault: false,
    },
    {
        id: 2,
        name: "Salman Mir",
        address: "63524, Saudi Arabia",
        phone: "966584739822",
        status: "Phone no, not verified",
        isDefault: false,
    },
    {
        id: 3,
        name: "Salman Mir",
        address: "88745, Saudi Arabia",
        phone: "966584739822",
        status: "Phone no, not verified",
        isDefault: false,
    },
];

export const userSidebars: any = [
    {
        id: 1,
        nameEn: "Wellet",
        nameAr: "محفظه",
        icon: Wallet(),
        href: "/dashboard/wallet",
    },
    {
        id: 2,
        nameEn: "Profile",
        nameAr: "الملف الشخصي",
        icon: UserFill(),
        href: "/dashboard/profile",
    },
    {
        id: 3,
        nameEn: "Gift a voucher",
        nameAr: "هداية و قسايم",
        icon: Gift(),
        href: "/dashboard/gift-a-voucher",
    },
    {
        id: 4,
        nameEn: "My orders",
        nameAr: "طلباتي",
        icon: CartFill(),
        href: "/dashboard/my-orders",
    },
    {
        id: 5,
        nameEn: "Addresses",
        nameAr: "عنوان",
        icon: Location(),
        href: "/dashboard/addresses",
    },
    {
        id: 6,
        nameEn: "Favorite",
        nameAr: "مفضله",
        icon: Heart(),
        href: "/dashboard/favorite",
    },
    {
        id: 7,
        nameEn: "Tickets",
        nameAr: "التذاكر",
        icon: Ticket(),
        href: "/dashboard/tickets",
    },
    {
        id: 8,
        nameEn: "Change password",
        nameAr: "تغيير كلمة المرور",
        icon: Lock(),
        href: "/dashboard/change-password",
    },
];

export const accordionItems = [
    {
        title: "Mohamed Ahmed",
        content: {
            giftId: 1,
            recipientEmail: "mohamedahmed@gmail.com",
            phone: "+96666666666",
            recipientName: "Mohamed Ahmed",
            senderName: "Salman Mir",
            balance: "50",
            date: "4 Nov 2023 - 09:30 PM",
            message: "Test Test",
        },
    },
    {
        title: "Mohamed Riyad",
        content: {
            giftId: 1,
            recipientEmail: "mohamedahmed@gmail.com",
            phone: "+96666666666",
            recipientName: "Mohamed Ahmed",
            senderName: "Salman Mir",
            balance: "50",
            date: "4 Nov 2023 - 09:30 PM",
            message: "Test Test",
        },
    },
    {
        title: "Iqbal Hossain",
        content: {
            giftId: 1,
            recipientEmail: "mohamedahmed@gmail.com",
            phone: "+96666666666",
            recipientName: "Mohamed Ahmed",
            senderName: "Salman Mir",
            balance: "50",
            date: "4 Nov 2023 - 09:30 PM",
            message: "Test Test",
        },
    },
];

export const filterOptions = [
    {
        title: "BRANDS",
        options: [
            {
                id: 1,
                name: "Topface",
            },
            {
                id: 2,
                name: "KiKo",
            },
            {
                id: 3,
                name: "Lorial",
            },
            {
                id: 4,
                name: "Mebiline",
            },
            {
                id: 5,
                name: "Bondy Sands",
            },
            {
                id: 6,
                name: "Bobbi Brown",
            },
            {
                id: 7,
                name: "Acqua di Parma",
            },
        ],
    },
    {
        title: "HAIR DEVICES",
        options: [
            {
                id: 1,
                name: "Topface",
            },
            {
                id: 2,
                name: "KiKo",
            },
            {
                id: 3,
                name: "Lorial",
            },
            {
                id: 4,
                name: "Mebiline",
            },
        ],
    },
];

export const productsDrowdowns = [
    {
        name: "All",
        value: "all",
    },
    {
        name: "Best Selling",
        value: "best-selling",
    },
    {
        name: "High To Low",
        value: "htl",
    },
    {
        name: "Low To High",
        value: "lth",
    },
];

export const paymentMethods = [
    {
        id: 1,
        title: "Payment When Recieving",
        icon: HandMoney,
        price: "SAR 28+",
    },
    {
        id: 2,
        title: "Debit/Credit Card",
        icon: Cards,
    },
    {
        id: 3,
        title: "My Wallet",
        icon: MyWallet,
    },
    {
        id: 4,
        title: "K Net",
        icon: KNet,
    },
    {
        id: 5,
        title: "Tamara",
        icon: Tamara,
    },
    {
        id: 6,
        title: "Pay In 4 Payments",
        icon: Tabby,
    },
    {
        id: 7,
        title: "PayPal",
        icon: PayPal,
    },
    {
        id: 8,
        title: "Apple Pay",
        icon: IPay,
    },
    {
        id: 9,
        title: "Google Pay",
        icon: GPay,
    },
];

export const menuHorizontalLinks = [
    {
        id: 1,
        link: "/dashboard/my-orders",
        title: "Orders",
        icon: CartOutline(),
    },
    {
        id: 2,
        link: "/dashboard/wallet",
        title: "Wallet",
        icon: WalletOutline(),
    },
    {
        id: 3,
        link: "/dashboard/tickets",
        title: "Tickets",
        icon: TicketsOutline(),
    },
    {
        id: 4,
        link: "/dashboard/favorite",
        title: "Favorites",
        icon: FavoritesOutline(),
    },
];
export const menuVarticalLinks = [
    {
        id: 1,
        link: "/dashboard/gift-a-voucher",
        title: "Gift a voucher",
        icon: GiftOutline(),
    },
    {
        id: 2,
        link: "/dashboard/addresses",
        title: "Addresses",
        icon: AddressOutline(),
    },
    {
        id: 3,
        link: "/logout",
        title: "Logout",
        icon: LogoutOutline(),
        logout: true,
    },
];

export const trackOrderSteps = [
    {
        titleEn: "order created",
        titleAr: "تم الطلب",
        icon: onlineOrder,
    },
    {
        titleEn: "in processing",
        titleAr: "مع الساعي",
        icon: trolly,
    },
    {
        titleEn: "with courier",
        titleAr: "مع الساعي",
        icon: withCourier,
    },
    {
        titleEn: "Delivery",
        titleAr: "تم التوصيل",
        icon: delivery,
    },
];

export const trackOrderStepsAr = [
    {
        titleEn: "Delivery",
        titleAr: "تم التوصيل",
        icon: delivery,
    },
    {
        titleEn: "with courier",
        titleAr: "مع الساعي",
        icon: withCourier,
    },
    {
        titleEn: "in processing",
        titleAr: "مع الساعي",
        icon: trolly,
    },
    {
        titleEn: "order created",
        titleAr: "تم الطلب",
        icon: onlineOrder,
    },
];

export const products = [
    {
        id: 1,
        name: "Awesome T-Shirt",
        image: Tshirt,
        price: 19.99,
        description: "A comfortable and stylish T-shirt for any occasion.",
        stock: 50,
        sizes: ["S", "M", "L", "XL"],
        discount: 10,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Jeans Classic Fit",
        image: Tshirt,
        price: 49.99,
        description: "Classic fit jeans for a timeless look.",
        stock: 30,
        sizes: ["28", "30", "32", "34"],
        discount: 15,
        rating: 3.5,
    },
    {
        id: 3,
        name: "Comfy Hoodie",
        image: Tshirt,
        price: 29.99,
        description: "A cozy hoodie for chilly days.",
        stock: 40,
        sizes: ["S", "M", "L", "XL"],
        discount: "No discount",
        rating: 5.0,
    },
    {
        id: 4,
        name: "Casual Dress",
        image: Tshirt,
        price: 39.99,
        description: "Elegant and comfortable dress for casual occasions.",
        stock: 25,
        sizes: ["S", "M", "L"],
        discount: 20,
        rating: 4.5,
    },
    {
        id: 5,
        name: "Sports Joggers",
        image: Tshirt,
        price: 34.99,
        description: "Stay active with these comfortable joggers.",
        stock: 35,
        sizes: ["M", "L", "XL"],
        discount: "No discount",
        rating: 2.5,
    },
    {
        id: 6,
        name: "Fashionable Blouse",
        image: Tshirt,
        price: 27.99,
        description: "A stylish blouse for a trendy look.",
        stock: 20,
        sizes: ["S", "M"],
        discount: "No discount",
        rating: 4.2,
    },
    {
        id: 7,
        name: "Chic Sunglasses",
        image: Tshirt,
        price: 14.99,
        description: "Complete your look with these chic sunglasses.",
        stock: 50,
        sizes: ["S", "M"],
        discount: 10,
        rating: 3.8,
    },
    {
        id: 8,
        name: "Formal Shirt",
        image: Tshirt,
        price: 44.99,
        description: "Look sharp with this formal shirt.",
        stock: 15,
        sizes: ["M", "L", "XL"],
        discount: "No discount",
        rating: 4.1,
    },
];
export const countDropDown: dropDowns[] = [
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
    { value: "4", name: "4" },
];

export const brandSearchContent = {
    btnTextAr: "كل البرندات",
    btnTextEn: "All Brand",
    placeholderAr: "ابحث عن البرندات هنا ",
    placeholderEn: "Search brands here",
};

export const homeBannerImages = [
  {
    id: 1,
    title: "Banner 1",
    src: "/images/homepage/banner1.png",
  },
  {
    id: 2,
    title: "Banner 2",
    src: "/images/homepage/banner1.png",
  },
  {
    id: 3,
    title: "Banner 3",
    src: "/images/homepage/banner1.png",
  },
]
