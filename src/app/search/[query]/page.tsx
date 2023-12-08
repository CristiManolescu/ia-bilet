"use client";

import useEvents from "@/app/hooks/useEvents";
import { useAppSelector } from "@/app/redux/store";
import React from "react";
import EventCard from "@/app/components/EventCard";

interface SearchPageProps {
  params: { query: string };
}

const SearchPage = ({ params }: SearchPageProps) => {
  const searchQuery = decodeURIComponent(params.query);
  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);
  if (events.length === 0) return null;

  console.log(searchQuery);
  return <div className="page-template">{searchQuery}</div>;
};

export default SearchPage;
