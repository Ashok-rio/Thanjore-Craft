import React, { useState, useEffect } from "react";
import { Container, CardBody, Card } from "reactstrap";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductImage from "../Product/ProductImage";
import StarIcon from "@material-ui/icons/Star";
import { getAllProduct } from "../../service/ApiService";
import Header from "../Header/Header";
import "./product.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(5),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const ProductAll = () => {
  const classes = useStyles();
  const [star] = useState(2);
  const [product, setProduct] = useState();


  useEffect(() => {
    async function fetchData() {
      try {
        var result = await getAllProduct();
        if (result.success === true) {
          setProduct(result.products);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchData();
  }, []);
  const capitalize = (str, lower = false) => (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
  const renderProduct = () => {
    return product.map((data, i) => {
      return (
          <React.Fragment>
              <Grid item lg={3}>
              <a href={`/product/${data._id}`} style={{color:'black',textDecoration:'none'}}>
            <Card className={"productCardBox"} key={i}>
              <CardBody style={{ textAlign: "center" }}>
                <ProductImage
                  src={data.url}
                  className={"similarProductImages"}
                />
              </CardBody>
              <br />
              <CardBody>
                <div className={"similarProductText"}>
                  <p>{capitalize(data.name)}</p>
                  <p style={{ color: "#f04e6b" }}>Rs : {data.price}</p>
                  <p>
                    <span>
                      <StarIcon
                        className={
                          star >= 1 ? "withratingColor" : "withoutRatingColor"
                        }
                      />
                    </span>
                    <span>
                      <StarIcon
                        className={
                          star >= 2 ? "withratingColor" : "withoutRatingColor"
                        }
                      />
                    </span>
                    <span>
                      <StarIcon
                        className={
                          star >= 3 ? "withratingColor" : "withoutRatingColor"
                        }
                      />
                    </span>
                    <span>
                      <StarIcon
                        className={
                          star >= 4 ? "withratingColor" : "withoutRatingColor"
                        }
                      />
                    </span>
                    <span>
                      <StarIcon
                        className={
                          star >= 5 ? "withratingColor" : "withoutRatingColor"
                        }
                      />
                    </span>
                  </p>
                </div>
              </CardBody>
                      </Card>
                      </a>
                  </Grid>
                  
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      <Header />
      <Container fluid={true} style={{ padding: "6%" }}>
        <Grid container spacing={4} className={classes.root}>
          {product ? (
            renderProduct()
          ) : (
            <p style={{ textAlign: "center" }}>***No Product found***</p>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ProductAll;
