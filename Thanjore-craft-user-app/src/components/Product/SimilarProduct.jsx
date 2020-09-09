import React, { useState, useEffect } from "react";
import { Container, CardBody, Card } from "reactstrap";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductImage from "../Product/ProductImage";
import StarIcon from "@material-ui/icons/Star";
import { getAllProduct } from "../../service/ApiService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(5),
    color: theme.palette.text.secondary,
  },
}));

const SimilarProduct = () => {
  const classes = useStyles();
  const [star] = useState(2);

  const [productSimilar, setProductSimilar] = useState();


  useEffect(() => {
    async function fetchData() {
      try {
        var result = await getAllProduct();
        console.log(result);
        if (result.success === true) {
          setProductSimilar(result.products);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchData();
  }, []);

  const renderSimilarProduct = () => {
    return productSimilar.map((data, i) => {
      return (
        <React.Fragment>
          <Grid item lg={3}>
            <a
              href={`/product/${data._id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
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
                    <p>{data.name}</p>
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
      <Container fluid={true} style={{ padding: "3%" }}>
        <Grid container spacing={4} className={classes.root}>
          {productSimilar ? (
            renderSimilarProduct()
          ) : (
            <p>***No Product found !***</p>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SimilarProduct;
