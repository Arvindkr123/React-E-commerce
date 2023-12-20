import axios from "axios";
import config from "../config/config";

class apiDataServices {
  BASE_URL = config.url;
  static getInstance() {
    return new apiDataServices();
  }

  // adding posting merchandise request to firebase server
  postMerchandiseData = async (data) => {
    try {
      const response = await axios.put(
        `${this.BASE_URL}/${data.userLocalId}/merchandise.json`,
        {
          merchandise: data.merchandiseCart,
        }
      );
    } catch {}
  };

  // request for the add add post album data
  postAlbumData = async (data) => {
    try {
      const response = await axios.put(
        `${this.BASE_URL}/${data.userLocalId}/album.json`,
        {
          album: data.albumCart,
        }
      );
    } catch {
      // console.log("error in album post");
    }
  };

  // this is for add order history 
  postOrderHistoryData = async (data) => {
    try {
      const response = await axios.put(
        `${this.BASE_URL}/${data.userLocalId}/order.json`,
        {
          order: data.orderCart,
        }
      );
    } catch {}
  };

  // this is request for the get merchandise data
  getMerchandiseData = async (localId) => {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/${localId}/merchandise.json`
      );
      return response.data;
    } catch {
      // console.log("error in get merchandise data");
    }
  };

  // request for the get the album data from firebase server
  getAlbumData = async (localId) => {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/${localId}/album.json`
      );
      return response.data;
    } catch {
      // console.log("error in get album data");
    }
  };

  // request for the get order data from firebase server
  getOrderData = async (localId) => {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/${localId}/order.json`
      );
      return response.data;
    } catch {
      // console.log("error in get order data");
    }
  };
}
export const apiDataService = apiDataServices.getInstance();
