import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {PrimaryButton} from "./PrimaryButton";

export function SideBar() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/genres")
      .then((res) => setGenres(res.data))
      .catch((err) => console.log(err));
  });

  const boxStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30vw",
    "p": {
        color: "white",
        fontSize: '40px',
        fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
        padding: '5px'
    }
  };

  return (
    <Box sx={boxStyles}>
        <p>Vidly</p>
        {genres.map((genre) => {
          return (
            <PrimaryButton key={genre._id}>
              {genre.name}
            </PrimaryButton>
          );
        })}
    </Box>
  );
}
