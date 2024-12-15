import { useLoaderData } from "react-router-dom"
// import { Product } from "../products/ProductSchema"
import Container from '@mui/material/Container'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Card } from "@mui/material";

let DetialsPage = () => {
  const LoaderData = useLoaderData()
  console.log(LoaderData)
    return (
     <Container>
        <Card sx={{ maxWidth: 845 }} className="card">
          <CardActionArea sx={{display:"flex"}} >
            <CardMedia
              component="img"
              height="340"
              image={LoaderData.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
              <CardActions>
                <Button size="small" color="primary">
                  add to cart
                </Button>
              </CardActions>
              
            </CardContent>
          </CardActionArea>
        
        </Card>
     </Container>
    );
  }

export default DetialsPage