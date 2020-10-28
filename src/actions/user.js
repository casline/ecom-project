import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 18.42,
        orderNumber: "A0048248343",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Veda Schafrath",
          shippingAddress: "1234 Simple Street",
        },
      },
      {
        _id: 1,
        total: 45.23,
        orderNumber: "65634737637",
        orderDate: new Date(),
        creditCard: "-6574",
        user: {
          name: "Rhett Schafrath",
          shippingAddress: "5678 Simple Street",
        },
      },
      {
        _id: 2,
        total: 23.45,
        orderNumber: "AT5674832",
        orderDate: new Date(),
        creditCard: "-9876",
        user: {
          name: "Grayson Schafrath",
          shippingAddress: "7325 Simple Street",
        },
      },
      {
        _id: 3,
        total: 9.23,
        orderNumber: "BN4536728",
        orderDate: new Date(),
        creditCard: "-5647",
        user: {
          name: "Carmi Schafrath",
          shippingAddress: "8235 Simple Street",
        },
      },
      {
        _id: 4,
        total: 43.76,
        orderNumber: "F435263882",
        orderDate: new Date(),
        creditCard: "-2385",
        user: {
          name: "Jim Schafrath",
          shippingAddress: "2085 Simple Street",
        },
      },
      {
        _id: 5,
        total: 27.65,
        orderNumber: "J65747384",
        orderDate: new Date(),
        creditCard: "-3295",
        user: {
          name: "Caleb Schafrath",
          shippingAddress: "9043 Simple Street",
        },
      },
      {
        _id: 6,
        total: 63.66,
        orderNumber: "K75846372",
        orderDate: new Date(),
        creditCard: "-9876",
        user: {
          name: "Cyrus Schafrath",
          shippingAddress: "1807 Simple Street",
        },
      },
      {
        _id: 7,
        total: 34.23,
        orderNumber: "HJ7685736",
        orderDate: new Date(),
        creditCard: "-4536",
        user: {
          name: "Larry Schafrath",
          shippingAddress: "0987 Simple Street",
        },
      },
    ],
  };
}
