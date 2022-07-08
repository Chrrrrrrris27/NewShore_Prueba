import { useState } from "react"

export const useToggle = (initalState = false) => {
  const [Toggle, setToggle] = useState(initalState);

  const handletoggle = () => {
    setToggle(!Toggle);
  }

  return [Toggle, handletoggle]
}