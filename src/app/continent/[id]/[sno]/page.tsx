'use client'
import React from 'react'
import { data } from "TripData";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
const Home = ({params}:{params :{sno:string}}) => {
    const findCountry = (data: any, countryName:string) => {
        // Iterate through continents
        for (const continent of data.continents) {
          // Iterate through countries in each continent
          for (const country of continent.countries) {
            if (country.name === countryName) {
              return country; // Return the matching country object
            }
          }
        }
    
        return null; // Return null if no matching country is found
      };
    
      const indiaCountry = findCountry(data, params.sno.replace('%20',' '));
    return (
        <>
          <h1>City of {params.sno.replace('%20',' ')} </h1>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} style={{ margin: "20px" }}>
              {indiaCountry &&
                indiaCountry?.destinations?.map((ele:any) => (
                  <Grid xs={6} md={6} spacing={2} key={ele.name}>
                    <Card sx={{ display: "flex" }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={ele.image}
                        alt="Live from space album cover"
                      />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h5">
                            Name : {ele.name}
                          </Typography>
                          <Typography component="div">
                            Description : {ele.description}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            Rating : {ele.ratings}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            Location :{ele.location}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            Openning hours :{ele.openingHours}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            Ticket Price : {ele.ticketPrice}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            Website : {ele.website}
                          </Typography>
                        </CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            pl: 1,
                            pb: 1,
                          }}
                        ></Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </>
      );
}
export default Home