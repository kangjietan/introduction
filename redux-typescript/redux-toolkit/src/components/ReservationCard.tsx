import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";

import { v4 as uuid } from "uuid";

interface ReservationCardProps {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardProps) => {
  const dispatch = useDispatch();
  return (
    <div
      className="reservation-card-container"
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: uuid(),
            name,
            food: [],
          })
        );
      }}
    >
      {name}
    </div>
  );
};

export default ReservationCard;
