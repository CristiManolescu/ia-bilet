import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LocationProps {
  name: string;
  address: string;
  city: string;
  phone: string;
  lat: string;
  long: string;
  link: string;
}

interface LocationState {
  allLocations: LocationProps[];
}

const initialState: LocationState = { allLocations: [] };

const locationSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addLocations: (state, action: PayloadAction<LocationProps[]>) => {
      state.allLocations = action.payload;
    },
  },
});

export const { addLocations } = locationSlice.actions;
export default locationSlice.reducer;
