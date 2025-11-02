import { useState } from "react";
import data from "../data";

export default function useCards() {
  const [cards] = useState(data);
  return { cards };
}
