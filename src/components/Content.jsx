import { Box, Button, Container, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { shorten } from "../utils/shortenText";
import { Link } from "react-router-dom";

const Content = () => {
  const catfood = {
    "FRUITS AND VEGETABLES": "Fresh and organic fruits and veggies",
    BAKERY: "Delicious and healthy bakery items",
    "MEAT AND SEAFOOD": "High-quality and sustainable meat and seafood",
    BEVERAGE: "Refreshing and organic beverages",
    "BISCUIT AND SNACKS": "Healthy and tasty biscuit and snack options",
  };
  const [categories, setCategories] = useState([]);
  const [menuitem, setMenuitem] = useState([]);
  const category = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = response.data;
      console.log(data);
      setCategories(data.categories);
      setMenuitem(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    category();
  }, []);

  const categoryMapping = {
    "FRUITS AND VEGETABLES": ["Vegan", "Vegetarian"],
    BAKERY: ["Dessert", "Breakfast"],
    "MEAT AND SEAFOOD": ["Beef", "Chicken", "Lamb", "Pork", "Seafood", "Goat"],
    BEVERAGE: [],
    "BISCUIT AND SNACKS": ["Miscellaneous", "Side", "Starter", "Pasta"],
    All: "",
  };

  const filterItem = (itemName) => {
    console.log(itemName);
    const tag = categoryMapping[itemName];

    const filterCategory = categories.filter((data) => {
      return tag.includes(data.strCategory);
    });
    setMenuitem(filterCategory);
    console.log(filterCategory);
  };

  return (
    <Box className="flex   items-center flex-col">
      <Box className="flex   items-center  flex-col">
        <p className="font-semibold">Shop by Category</p>

        <p className="text-3xl font-bold">Top Category Of Organic Food</p>
      </Box>
      <Box className="justify-center flex flex-wrap">
        {Object.keys(catfood).map((category, index) => (
          <button
            className={`btn border-r-2 font-bold font-sans active:btn-success m-3`}
            key={index}
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        ))}
      </Box>
      <Grid container justifyContent={"center"} height={"30rem"}>
        {menuitem.length > 0 ? (
          menuitem.map((category) => (
            <Box
              spacing={2}
              key={category.idCategory}
              className="flex flex-wrap  "
            >
              <Box
                item
                className="flex gap-5 m-4 "
                alignItems="center"
                justifyContent={"center"}
              >
                <Box>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={category.strCategoryThumb} />
                    </div>
                  </div>
                </Box>
                <Box>
                  <Box className="flex justify-between">
                    <Box>{category.strCategory}</Box>
                    <Box>$8.45</Box>
                  </Box>
                  <Box className="flex justify-between " alignItems="center">
                    <Box>{shorten(category.strCategoryDescription)}</Box>
                    <Box className="flex">
                      <Link className="flex items-center  font-medium text-sm ml-5">
                        SKIP NOW &nbsp; <FaArrowAltCircleRight />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Box className="m-10 font-bold text-3xl">
            No Food Available for Buy Now
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Content;
