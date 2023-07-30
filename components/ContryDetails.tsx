'use client'
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { data } from 'TripData';
import { useRouter } from "next/navigation";
import Image from "next/legacy/image";
export const ContryDetails = () => {
    const {push}=useRouter()
    return (
        <div>
          {" "}
          <h1>Welcome To Trip Adivsor </h1>
          <h3>Top Continent for your next holiday</h3>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} style={{ margin: "20px" }}>
              {data &&
                data?.continents?.map((ele) => (
                  <Grid
                    xs={6}
                    md={3}
                    item
                    spacing={2}
                    key={ele.name}
                    onClick={() => push(`/continent/${ele?.name}`)}
                  >
                    {/* <Item> */}
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        {/* <CardMedia
                          component="img"
                          height="140"
                          image={ele.image}
                          alt="green iguana"
                        /> */}
                        <Image
                          height="250"
                          src={ele.image}
                          width={
                            500
                          }
                          alt="green iguana"/>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {ele.name}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    {/* </Item> */}
                  </Grid>
                ))}
            </Grid>
          </Box>
        </div>
      );
}
