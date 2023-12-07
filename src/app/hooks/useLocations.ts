"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLocations } from "../redux/locationSlice";
import { useAppSelector } from "../redux/store";

const useLocations = () => {
  const dispatch = useDispatch();

  const locations = useAppSelector((store) => store.location.allLocations);

  useEffect(() => {
    locations.length === 0 && fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("/locationsMock.json");
    const json = await data.json();

    dispatch(addLocations(json.locations));
  };
};

export default useLocations;
