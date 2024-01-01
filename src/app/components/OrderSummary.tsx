import React from "react";
import useGetSum from "../hooks/useGetSum";
import { FaAngleDoubleRight } from "react-icons/fa";

const OrderSummary = () => {
  const ticketCost = useGetSum();
  return (
    ticketCost > 0 && (
      <div className="flex flex-col border rounded-lg w-[30%] p-2 m-2 gap-2">
        <h1 className="font-bold text-xl">{`Sumar comanda`}</h1>
        <div className="flex justify-between">
          <p>{`Cost total bilete:`}</p>
          <p>{`${ticketCost} lei`}</p>
        </div>
        <button className="p-2 text-white bg-[#006ACA] rounded-lg hover:bg-blue-500 flex items-center justify-center relative">
          <p>{`Plaseaza comanda`}</p>
          <FaAngleDoubleRight className="absolute left-0 bg-red-600 text-[2.50rem] rounded-br-2xl rounded-tl-lg rounded-bl-lg" />
        </button>
      </div>
    )
  );
};

export default OrderSummary;
