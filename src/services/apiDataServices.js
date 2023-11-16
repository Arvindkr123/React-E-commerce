import axios from "axios";
import config from "../config/config";

class apiDataServices {
  BASE_URL = config.url;
  static getInstance() {
    return new apiDataServices();
  }

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
