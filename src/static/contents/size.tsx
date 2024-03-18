import { ItemAbout } from "@/components/ItemPage/ItemAbout";
import { ItemReviews } from "@/components/ItemPage/ItemReviews";
import MeasurementCM from "@/components/ItemPage/MeasurementCM";
import MeasurementIN from "@/components/ItemPage/MeasurementIN";
import Sizes from "@/components/ItemPage/Sizes";

export const tabContent = {
  tabsEn: [
    {
      label: "About this product",
      content: <ItemAbout />,
    },
    {
      label: "(365) Reviews",
      content: <ItemReviews />,
    },
    {
      label: "Sizes",
      content: <Sizes />,
    },
  ],
  tabsAr: [
    {
      label: "حول هذا المنتج",
      content: <ItemAbout />,
    },
    {
      label: "(323)التقيمات",
      content: <ItemReviews />,
    },
    {
      label: "المقاسات",
      content: <Sizes />,
    },
  ],
};

export const sizesContent = {
  tabsEn: [
    {
      label: "in",
      content: <MeasurementIN />,
    },
    {
      label: "cm",
      content: <MeasurementCM />,
    },
  ],
  tabsAr: [
    {
      label: "سم",
      content: <MeasurementIN />,
    },
    {
      label: "انش",
      content: <MeasurementCM />,
    },
  ],
};
export const measurementContent = {
  sizeEn: "Size",
  sizeAr: "مقاس",
  heightEn: "Height",
  heightAr: "الطول",
  thighEn: "Thigh",
  thighAr: "الفخد",
  hipSizeEn: "Hip Size",
  hipSizeAr: "حجم الورك",
  waistEn: "Waist Measurement",
  waistAr: "قياس الخصر",
  sizesEn: [
    {
      size: "XXS",
      height: "23",
      thigh: "test",
      hipSize: "23",
      waist: "23",
    },
    {
      size: "XS",
      height: "23",
      thigh: "test",
      hipSize: "23",
      waist: "23",
    },
    {
      size: "S",
      height: "23",
      thigh: "test",
      hipSize: "23",
      waist: "23",
    },
    {
      size: "M",
      height: "23",
      thigh: "test",
      hipSize: "23",
      waist: "23",
    },
    {
      size: "L",
      height: "23",
      thigh: "test",
      hipSize: "23",
      waist: "23",
    },
  ],
  sizesAr: [
    {
      size: "XXS",
      height: "23",
      thigh: "test",
      hipSize: "23",
      waist: "23",
    },
    {
      size: "XS",
      height: "23",
      thigh: "test",
      hipSize: "23",
      waist: "23",
    },
    {
      size: "S",
      height: "23",
      thigh: "test",
      hipSize: "23",
      waist: "23",
    },
    {
      size: "M",
      height: "23",
      thigh: "test",
      hipSize: "23",
      waist: "23",
    },
    {
      size: "L",
      height: "23",
      thigh: "test",
      hipSize: "23",
      waist: "23",
    },
  ],
};
