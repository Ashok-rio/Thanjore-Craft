import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./gall.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const GridContent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a href={"/product"} style={{color:'black',textDecoration:'none'}}>
        <img src={props.image} className={"gallery-images"} alt={""} />
      </a>
    </div>
  );
};

export default GridContent;
