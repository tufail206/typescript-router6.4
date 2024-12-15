import { ProductContainer } from "./ui";
import { Container } from "../../globalstyle/container";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Product } from "./ProductSchema";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

// Define the structure of loaderData
interface LoaderData {
    products: Product[];
}

// ProductPage component
export const ProductPage: React.FC = () => {
    // Load the data using useLoaderData hook
    const loaderData = useLoaderData() as LoaderData;
    const  navigate= useNavigate()
    return (
        <Container>
            <h1>Product Page</h1>
            <h2>Welcome to the Product Page</h2>

            <ProductContainer>
                {loaderData.products.map((product) => (
                    <Card key={product.id} className="card" >
                        <CardActionArea onClick={() => navigate(`/product/${product.id}`)} >
                            <CardMedia
                                component="img"
                                sx={{objectFit:"content ",height:"330px"}}
                                image={product.image} // Use dynamic product image
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name} {/* Dynamic product name */}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                    {product.description.substring(0,130)}                                    
                                </Typography>
                                <Typography variant="h6" sx={{ marginTop: 1, color: "primary.main" }}>
                                   price  ${product.price.toFixed(2)} {/* Dynamic product price */}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Buy Now
                            </Button>
                            <Button size="small" color="secondary">
                                Add to Cart
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </ProductContainer>
        </Container>
    );
};
