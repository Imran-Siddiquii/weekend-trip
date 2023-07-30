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
  import {data} from 'TripData'
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
const Continent = ({params} :{params :{id: string}}) => {
    const {push}=useRouter();
const findData = data.continents.find((ele) => ele.name === params.id.replace('%20',' '));

    return (
        <>
          <div>Top Contries in {params.id.replace('%20',' ')} for you next holiday</div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} style={{ margin: "20px" }}>
              {findData &&
                findData?.countries?.map((ele) => (
                  <Grid
                    xs={6}
                    md={3}
                    spacing={2}
                    key={ele.name}
                    onClick={() =>
                      push(`/continent/${findData?.name}/${ele?.name}`)
                    }
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
        </>
      );
}

export default Continent;