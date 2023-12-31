import React from "react";
import useGetSum from "../hooks/useGetSum";

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
        <button className="p-2 text-white bg-[#006ACA] rounded-lg hover:bg-blue-500">
          {`Plaseaza comanda`}
        </button>
      </div>
    )
  );
};

export default OrderSummary;
