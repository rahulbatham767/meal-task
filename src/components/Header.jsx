import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Box
        sx={{ height: "100%", width: "100%" }}
        className="items-center flex   "
      >
        <Container>
          <Stack
            sx={{
              width: { xs: "100%", sm: "28rem", md: "32rem" },
              p: { xs: 2, md: 4 },
            }}
          >
            <Stack className="flex flex-wrap">
              <Box>
                <p className="text-lg font-bold">Discount up to 20%</p>
                <h1 className="text-3xl text-wrap md:text-5xl">
                  Buy Fresh And Organic Grocery Food
                </h1>
              </Box>
              <Box className=" my-3 ">
                <p className="text-sm md:text-md text-wrap">
                  Organic Food or grocery is grown in a natural way without
                  using any chemical fertilizers, growth hormones, pesticides,
                  etc. These foods are expensive because they are completely
                  natural and do not have any tinge of chemicals in them
                </p>
              </Box>
            </Stack>
            <Stack direction="row" spacing="5rem">
              <Box>
                <Button
                  variant="solid"
                  color="success"
                  className="bg-green-900 btn font-bold"
                >
                  SKIP NOW &nbsp; <FaArrowAltCircleRight />
                </Button>
              </Box>
              <Box className="font-bold ">
                <p>35k +</p>
                <p>Users</p>
              </Box>
              <Box className="font-bold   ">
                <p>18k +</p>
                <p>Products</p>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
