import { useEffect, useState } from "react";

const GetFamilyPhotoes = () => {
  const [photoes, setPhotoes] = useState([]);

  useEffect(() => {
    fetch("./familyPhoto.json")
      .then((res) => res.json())
      .then((data) => setPhotoes(data));
  }, []);
  return [photoes, setPhotoes];
};
export default GetFamilyPhotoes;