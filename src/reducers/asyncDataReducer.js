import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiDataService } from "../services/apiDataServices";

// this thunk for the adding merchandise 
export const addMerchandiseAction = createAsyncThunk(
  "addMerchandiseAction",
  async (data) => {
    const response = await apiDataService.postMerchandiseData(data);
    return response;
  }
);

// get merchandise async thunk
export const getMerchandiseData = createAsyncThunk(
  "getMerchandsiseData",
  async (localId) => {
    const response = await apiDataService.getMerchandiseData(localId);
    return response;
  }
);

// this for the adding album data
export const addAlbumAction = createAsyncThunk(
  "addAlbumAction",
  async (data) => {
    const response = await apiDataService.postAlbumData(data);
    return response;
  }
);

// this thunk for the get album data
export const getAlbumData = createAsyncThunk(
  "getAlbumData",
  async (localId) => {
    const response = await apiDataService.getAlbumData(localId);
    return response;
  }
);

export const addOrderHistoryAction = createAsyncThunk(
  "addOrderHistoryAction",
  async (data,thunkAPI) => {
    // console.log(data);
    const response = await apiDataService.postOrderHistoryData(data);
    setTimeout(() => {
      thunkAPI.dispatch(getOrderHistoryData(data.userLocalId))
    },1000)
    return response;
  }
);

// thunk for the getting order history
export const getOrderHistoryData = createAsyncThunk(
  "getOrderHistoryData",
  async (localId) => {
    const response = await apiDataService.getOrderData(localId);
    return response;
  }
);
