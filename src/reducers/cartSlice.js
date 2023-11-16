import { createSlice } from "@reduxjs/toolkit";
import {
  getAlbumData,
  getMerchandiseData,
  getOrderHistoryData,
} from "./asyncDataReducer";
const albums = [
  {
    id: "001",
    albumName: "Infinite Horizon",
    albumYear: 2020,
    albumArtwork:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d6/f6/fb/d6f6fbe8-a862-731c-1f4d-0b6f7d28fd38/cover.jpg/400x400cc.jpg",
    price: 12.99,
    quantity: 0,
  },
  {
    id: "002",
    albumName: "Nebula Dreams",
    albumYear: 2018,
    albumArtwork:
      "https://i.scdn.co/image/ab67616d0000b2732bc09ee4ff762a823dcc4654",
    price: 10.99,
    quantity: 0,
  },
  {
    id: "003",
    albumName: "Cosmic Dust",
    albumYear: 2016,
    albumArtwork:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cosmic-dust-stars-galaxy-space-cd-cover-music-design-template-a70314645b5451b0527928a626155106_screen.jpg?ts=1645576028",
    price: 9.99,
    quantity: 0,
  },
  {
    id: "004",
    albumName: "Solar Wind",
    albumYear: 2014,
    albumArtwork:
      "https://cdns-images.dzcdn.net/images/cover/f24331625a34b17bf8c42c84732df225/264x264.jpg",
    price: 8.99,
    quantity: 0,
  },
  {
    id: "005",
    albumName: "Aurora Borealis",
    albumYear: 2012,
    albumArtwork:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-%7C-aurora-design-template-c3b9c4cfa77074651a36a1f290b239c6_screen.jpg?ts=1595613188",
    price: 7.99,
    quantity: 0,
  },
];
const tourDetails = [
  {
    id: "001",
    tourName: "Summer Tour 2023",
    tourImage:
      "https://media.istockphoto.com/id/138026020/vector/band-time-baby.jpg?s=612x612&w=0&k=20&c=Pp1zzbG1q9o0R5ZNsxcxCN8aWlIG9ACdIAdWPE_XJtg=",
    tourStartDate: "June 1, 2023",
    tourEndDate: "August 31, 2023",
    tourLocation: "Various locations",
    tourDescription:
      "Join us for our biggest tour yet! We'll be playing in cities across the country, bringing our latest music and a high-energy live show to audiences everywhere. Don't miss it!",
  },
  {
    id: "002",
    tourName: "Fall Tour 2023",
    tourImage:
      "https://images.pexels.com/photos/1749822/pexels-photo-1749822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tourStartDate: "September 15, 2023",
    tourEndDate: "November 30, 2023",
    tourLocation: "Various locations",
    tourDescription:
      "We're hitting the road again this fall for another round of shows. Get ready for an unforgettable live experience as we perform our most beloved songs and some new surprises too.",
  },
  {
    id: "003",
    tourName: "Winter Tour 2024",
    tourImage:
      "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tourStartDate: "January 15, 2024",
    tourEndDate: "March 31, 2024",
    tourLocation: "Various locations",
    tourDescription:
      "We're heating things up this winter with a tour that will take us to some of the most iconic venues in the country. Come out and celebrate the season with us!",
  },
];
const merchandise = [
  {
    id: "001",
    productName: "T-Shirt",
    productPrice: 20.0,
    quantity: 0,
    productImage: "https://m.media-amazon.com/images/I/41oLKl-rukL._UX679_.jpg",
    productDescription:
      "Black cotton t-shirt with The Generics logo on front. Available in sizes S-XXL.",
  },
  {
    id: "002",
    productName: "Hoodie",
    productPrice: 40.0,
    quantity: 0,
    productImage:
      "https://image.spreadshirtmedia.com/image-server/v1/products/T1194A231PA2741PT17X51Y37D1017000247W20831H24997/views/1,width=378,height=378,appearanceId=231,backgroundColor=F2F2F2,modelId=5859,crop=list/war-funk-band-why-can-t-we-be-friends-lowrider-all.jpg",
    productDescription:
      "Grey pullover hoodie with The Generics name on front and tour dates on back. Available in sizes S-XXL.",
  },
  {
    id: "003",
    productName: "Poster",
    productPrice: 5.0,
    quantity: 0,
    productImage: "https://f4.bcbits.com/img/a2293623632_65",
    productDescription:
      "11x17 inch poster featuring The Generics photo and upcoming tour dates.",
  },
  {
    id: "004",
    productName: "Hat",
    productPrice: 15.0,
    quantity: 0,
    productImage:
      "https://cdn.shopify.com/s/files/1/0577/3236/6528/products/line_over_black1_1000x_2_550x.jpg?v=1636435690",
    productDescription:
      "Embroidered black baseball cap with The Generics on front. Adjustable strap.",
  },
  {
    id: "005",
    productName: "Sticker Pack",
    productPrice: 3.0,
    quantity: 0,
    productImage:
      "https://m.media-amazon.com/images/I/713bxczDm+L._AC_SS450_.jpg",
    productDescription:
      "Set of 5 vinyl stickers featuring The Generics logo and album artwork.",
  },
  {
    id: "006",
    productName: "Keychain",
    productPrice: 5.0,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCEl0UqsV8li9pKT0l-OZSS6AxVis3sDwHA&usqp=CAU",
    quantity: 0,
    productDescription: "Metal keychain featuring band name and logo.",
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    bandAlbums: albums,
    bandTourDetails: tourDetails,
    bandMerchandise: merchandise,
    cartBandAlbums: [],
    cartBandMerchandise: [],
    cartChanged: false,
    orderList: [],
    isLoading: false,
  },
  reducers: {
    addMerchandiseToCart(state, action) {
      const merchandise = action.payload;
      state.cartChanged = true;
      const existingMerchandise = state?.cartBandMerchandise?.find(
        (item) => item?.id === merchandise?.id
      );
      if (!existingMerchandise) {
        state?.cartBandMerchandise?.push({
          id: merchandise?.id,
          productName: merchandise?.productName,
          productPrice: merchandise?.productPrice,
          quantity: 1,
          productImage: merchandise?.productImage,
          productDescription: merchandise?.productDescription,
        });
      } else {
        existingMerchandise?.quantity++;
      }
    },
    removeMechandiseFromCart(state, action) {
      state.cartChanged = true;
      const merchandise = action?.payload;
      if (merchandise.quantity > 1) {
        const merchandiseIdx = state?.cartBandMerchandise?.findIndex(
          (item) => item?.id === merchandise?.id
        );
        state.cartBandMerchandise[merchandiseIdx].quantity--;
      } else {
        state.cartBandMerchandise = state.cartBandMerchandise.filter(
          (item) => item?.id !== merchandise?.id
        );
      }
    },
    addAlbumsToCart(state, action) {
      const album = action?.payload;
      state.cartChanged = true;

      const existingAlbum = state?.cartBandAlbums.find(
        (item) => item.id === album.id
      );
      if (!existingAlbum) {
        state.cartBandAlbums.push({
          id: album.id,
          albumName: album.albumName,
          albumPrice: album.price,
          quantity: 1,
          albumImage: album.albumArtwork,
          albumYear: album.albumYear,
        });
      } else {
        existingAlbum.quantity++;
      }
    },

    remvoveAlbumsFromCart(state, action) {
      state.cartChanged = true;
      const album = action?.payload;
      if (album.quantity > 1) {
        const albumIdx = state.cartBandAlbums.findIndex(
          (item) => item.id === album.id
        );
        state.cartBandAlbums[albumIdx].quantity--;
      } else {
        state.cartBandAlbums = state.cartBandAlbums.filter(
          (item) => item.id !== album.id
        );
      }
    },
    orderNow(state, action) {
      const response = action?.payload;
      state.cartChanged = true;
      state.orderList.push(response);
      state.cartBandAlbums = [];
      state.cartBandMerchandise = [];
    },
    logout(state, action) {
      state.orderList = [];
      state.cartBandAlbums = [];
      state.cartBandMerchandise = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMerchandiseData.fulfilled, (state, action) => {
      const response = action?.payload?.merchandise;
      state.isLoading = false;
      state.cartBandMerchandise = response;
      state.cartChanged = false;
    });
    builder.addCase(getMerchandiseData.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getAlbumData.fulfilled, (state, action) => {
      const response = action?.payload?.album;
      state.cartChanged = false;
      state.cartBandAlbums = response;
      state.isLoading = false;
    });
    builder.addCase(getAlbumData.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getOrderHistoryData.fulfilled, (state, action) => {
      const response = action?.payload?.order;
      state.orderList = response;
      state.cartChanged = false;
      state.isLoading = false;
    });
    builder.addCase(getOrderHistoryData.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});
export default cartSlice;
export const cartActions = cartSlice.actions;
