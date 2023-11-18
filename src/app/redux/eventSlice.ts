import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EventProps {
  address: string[];
  artist: string;
  date: {
    day: string;
    time: string;
    weekday: string;
  };
  description: string;
  image: string;
  title: string;
}

interface EventState {
  allEvents: EventProps[];
}

const initialState: EventState = { allEvents: [] };

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvents: (state, action: PayloadAction<EventProps[]>) => {
      state.allEvents = action.payload;
    },
  },
});

export const { addEvents } = eventSlice.actions;
export default eventSlice.reducer;
