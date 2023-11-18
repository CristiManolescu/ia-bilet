"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEvents } from "../redux/eventSlice";
import { useAppSelector } from "../redux/store";

const useEvents = () => {
  const dispatch = useDispatch();

  const events = useAppSelector((store) => store.event.allEvents);

  useEffect(() => {
    events.length === 0 && fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("/mock.json");
    const json = await data.json();

    dispatch(addEvents(json.events_results));
  };
};

export default useEvents;
