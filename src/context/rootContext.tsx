import { createContext, useContext, useState, ReactNode } from "react";
import AppContext from "./appContext";
import { AddressesType, ProductType } from "@/utils/type";

interface RootContextProps {
  addToCart: (item: any) => void;
}

export function RootProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<any>([]);
  const [auth, setAuth] = useState<boolean>(false);
  const [returnFormStatus, setReturnFormStatus] = useState<boolean>(false);
  const [cancelStatus, setCancelStatus] = useState<boolean>(false);
  const [userAddress, setUserAddress] = useState<any>([]);
  const [addressForm, setAddressForm] = useState<any>({});
  const [returnsItems, setReturnsItems] = useState<any>([]);
  const [cancelItems, setCancelItems] = useState<any>([]);

  /**
   * Adds the given item to the cart.
   */
  const handleAddToCart = (item: ProductType) => {
    setCart([...cart, item]);
  };

  const handleCartDelete = (item: ProductType) => {
    setCart(cart.filter((i: ProductType) => i.id !== item.id));
  };

  const handleAuth = () => {
    setAuth(true);
  };

  // Handle address form inputs
  const handleAddressFormInput = (e: any) => {
    if (e && e.target && e.target.name) {
      const name = e.target.name;
      const value = e.target.value;
      setAddressForm({ ...addressForm, [name]: value });
    }
  };

  // Handle address form submit
  const handleAddressFormSubmit = (e: any) => {
    e.preventDefault();

    const modifyAddress = {
      ...addressForm,
      isDefault: userAddress.length === 0 ? true : false,
    }
    setUserAddress([...userAddress, modifyAddress]);
  };

const handleReturnSelectedItem = (id: any) => {
  const returnItem = cart.find((item: any) => item.id === id);

  // Check if the item already exists in returnsItems
  const itemExists = returnsItems.some((item: any) => item.id === id);

  if (itemExists) {
    // Remove the item if it already exists
    const updatedReturnsItems = returnsItems.filter(
      (item: any) => item.id !== id
    );
    setReturnsItems(updatedReturnsItems);
  } else {
    // Add the item if it doesn't exist
    setReturnsItems([...returnsItems, returnItem]);
  }
};

const handleCancelSelectedItem = (id: any) => {
  const cancelItem = cart.find((item: any) => item.id === id);

  // Check if the item already exists in returnsItems
  const itemExists = cancelItems.some((item: any) => item.id === id);

  if (itemExists) {
    // Remove the item if it already exists
    const updatedReturnsItems = cancelItems.filter(
      (item: any) => item.id !== id
    );
    setCancelItems(updatedReturnsItems);
  } else {
    // Add the item if it doesn't exist
    setCancelItems([...cancelItems, cancelItem]);
  }
};

  return (
    <AppContext.Provider
      value={{
        cart,
        handleAddToCart,
        auth,
        handleAuth,
        handleCartDelete,
        handleAddressFormInput,
        handleAddressFormSubmit,
        addressForm,
        setAddressForm,
        returnsItems,
        handleReturnSelectedItem,
        returnFormStatus,
        setReturnFormStatus,
        cancelStatus,
        setCancelStatus,
        cancelItems,
        setCancelItems,
        handleCancelSelectedItem,
        userAddress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
