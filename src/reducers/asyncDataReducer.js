import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiDataService } from "../services/apiDataServices";

export const addMerchandiseAction = createAsyncThunk(
  "addMerchandiseAction",
  async (data) => {
    const response = await apiDataService.postMerchandiseData(data);
    return response;
  }
);
export const getMerchandiseData = createAsyncThunk(
  "getMerchandsiseData",
  async (localId) => {
    const response = await apiDataService.getMerchandiseData(localId);
    return response;
  }
);

export const addAlbumAction = createAsyncThunk(
  "addAlbumAction",
  async (data) => {
    const response = await apiDataService.postAlbumData(data);
    return response;
  }
);
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
export const getOrderHistoryData = createAsyncThunk(
  "getOrderHistoryData",
  async (localId) => {
    const response = await apiDataService.getOrderData(localId);
    return response;
  }
);
