import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const StepProgressBar = (props) => {
  const value = props.value;
  return (
    <div style={{ padding: "2%" }}>
          <ProgressBar
              width={"250px"}
        percent={value}
        filledBackground="linear-gradient(to right, #bcbcba, #bcbcba)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <React.Fragment>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                alt={""}
                src={
                  value >= 0
                    ? "https://bit.ly/31FkOEo"
                    : "https://bit.ly/31KNnk5"
                }
              />
              <span style={{ position: "absolute", marginTop: "100px",color:'gray' }}>
                Shipment{" "}
              </span>
            </React.Fragment>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <React.Fragment>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                alt={""}
                src={
                  value === 40
                    ? "https://bit.ly/3eQ6psR"
                    : value > 40
                    ? "https://bit.ly/31FkOEo"
                    : "https://bit.ly/31KNnk5"
                }
              />
              <span style={{ position: "absolute", marginTop: "100px",color:'gray' }}>
                Address{" "}
              </span>
            </React.Fragment>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <React.Fragment>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                alt={""}
                src={
                  value === 70
                    ? "https://bit.ly/3eQ6psR"
                    : value > 70
                    ? "https://bit.ly/31FkOEo"
                    : "https://bit.ly/31KNnk5"
                }
              />
              <span style={{ position: "absolute", marginTop: "100px",color:'gray' }}>
                Payment{" "}
              </span>
            </React.Fragment>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <React.Fragment>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                alt={""}
                src={
                  value === 100
                    ? "https://bit.ly/3eQ6psR"
                    :  "https://bit.ly/31KNnk5"
                }
              />
              <span style={{ position: "absolute", marginTop: "100px", color:'gray' }}>
                Order{" "}
              </span>
            </React.Fragment>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default StepProgressBar;
