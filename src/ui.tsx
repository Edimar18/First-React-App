import { useState } from "react";

function PrintUi() {
  const [EQUATION, SETEQUATION] = useState("");
  const [RESULT, SETRESULT] = useState("");
  let equation = "";
  let result = "";
  //SETEQUATION(equation);
  //SETRESULT(result);

  const updateValue = (value: string) => {
    let newRes = ""
    let newEqua = ""
    if (value === "AC") {
      SETEQUATION("");
      SETRESULT("");
      console.log("deleted");
    }
    if (value !== "AC" && value !== "=") {
      console.log("ok");
        newEqua = EQUATION + value;
        SETEQUATION(newEqua);
        
        newRes = value + RESULT;
        newRes = newRes.padEnd(10, " ");
        SETRESULT(newRes);
        console.log(EQUATION);
        console.log(newRes);
    }
    if (value === "=") {
      newEqua = eval(EQUATION);
      newEqua = newEqua.toString();
      console.log(newEqua);
      SETEQUATION(newEqua);
      newRes = newEqua.split('').reverse().join('');
      newRes = newRes.padEnd(10, " ");
      console.log(newRes);
      SETRESULT(newRes);
      
    }
    
      
  };

  return (
    <>
      <div
        className="container-md"
        style={{
          width: "500px",
          border: "1px solid black",
          padding: "10px",
          marginTop: "20vh",
        }}
      >
        <div className="row text-center">
          <p>CALCULATOR BY EDIMAR</p>
        </div>
        <div
          className="row no-gutters"
          style={{ height: "50px", width: "100%", marginLeft: "1px" }}
        >
          <div className="grid" style={{ width: "100%", height: "100%" }}>
            <div className="row " style={{ width: "105%", height: "100%" }}>
              <div
                className="col "
                style={{
                  height: "100%",
                  border: "1px solid black",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  fontSize: "30px",
                }}
              >
                {RESULT[9]}
              </div>
              <div
                className="col "
                style={{
                  height: "100%",
                  border: "1px solid black",
                  fontSize: "30px",
                }}
              >
                {RESULT[8]}
              </div>
              <div
                className="col "
                style={{
                  height: "100%",
                  border: "1px solid black",
                  fontSize: "30px",
                }}
              >
                {RESULT[7]}
              </div>
              <div
                className="col "
                style={{
                  height: "100%",
                  border: "1px solid black",
                  fontSize: "30px",
                }}
              >
                {RESULT[6]}
              </div>
              <div
                className="col "
                style={{
                  height: "100%",
                  border: "1px solid black",
                  fontSize: "30px",
                }}
              >
                {RESULT[5]}
              </div>
              <div
                className="col "
                style={{
                  height: "100%",
                  border: "1px solid black",
                  fontSize: "30px",
                }}
              >
                {RESULT[4]}
              </div>
              <div
                className="col "
                style={{
                  height: "100%",
                  border: "1px solid black",
                  fontSize: "30px",
                }}
              >
                {RESULT[3]}
              </div>
              <div
                className="col "
                style={{
                  height: "100%",
                  border: "1px solid black",
                  fontSize: "30px",
                }}
              >
                {RESULT[2]}
              </div>
              <div
                className="col "
                style={{
                  height: "100%",
                  border: "1px solid black",
                  fontSize: "30px",
                }}
              >
                {RESULT[1]}
              </div>
              <div
                className="col "
                style={{
                  height: "100%",
                  border: "1px solid black",
                  fontSize: "30px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                {RESULT[0]}
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col">
            <input
              type="button"
              value="1"
              className="btn btn-outline-primary btn1"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "1";
                result = "1" + result;
                updateValue("1");
                console.log("equation: " + equation + " result: " + result);
                console.log(
                  "updated RESULT:" + RESULT + " updated EQUATION: " + EQUATION
                );
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="2"
              className="btn btn-outline-primary btn2"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "2";
                result = "2" + result;
                updateValue("2");
                console.log("equation: " + equation + " result: " + result);
                console.log(
                  "updated RESULT:" + RESULT + " updated EQUATION: " + EQUATION
                );
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="3"
              className="btn btn-outline-primary btn3"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "3";
                result = "3" + result;
                updateValue("3");
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="4"
              className="btn btn-outline-primary btn4"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "4";
                updateValue("4");
                result = "4" + result;
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col">
            <input
              type="button"
              value="5"
              className="btn btn-outline-primary btn5"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "5";
                result = "5" + result;
                updateValue("5");
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="6"
              className="btn btn-outline-primary btn6"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "6";
                result = "6" + result;
                updateValue("6");
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="7"
              className="btn btn-outline-primary btn7"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "7";
                result = "7" + result;
                updateValue("7");
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="8"
              className="btn btn-outline-primary btn8"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "8";
                result = "8" + result;
                updateValue("8");
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col">
            <input
              type="button"
              value="9"
              className="btn btn-outline-primary btn9"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "9";
                result = "9" + result;
                updateValue("9");
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="0"
              className="btn btn-outline-primary btn0"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "0";
                result = "0" + result;
                updateValue("0");
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="+"
              className="btn btn-outline-secondary btnplus"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "+";
                result = "+" + result;
                updateValue("+");
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="AC"
              className="btn btn-outline-danger btn0"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "";
                result = "" + result;
                updateValue("AC");
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col">
            <input
              type="button"
              value="-"
              className="btn btn-outline-secondary btnminus"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "-";
                result = "-" + result;
                updateValue("-");
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="x"
              className="btn btn-outline-secondary btntimes"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "*";
                result = "*" + result;
                updateValue("*");
                console.log("equation: " + equation + " result: ") + result;
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="/"
              className="btn btn-outline-secondary btndivide"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + "/";
                result = "/" + result;
                updateValue("/");
                console.log("equation: " + equation + " result: ") + result;
              }}
            />
          </div>
          <div className="col">
            <input
              type="button"
              value="."
              className="btn btn-outline-primary btnequal"
              style={{ width: "100px" }}
              onClick={() => {
                equation = equation + ".";
                result = "." + result;
                updateValue(".");
                console.log("equation: " + equation + " result: ") + result;
              }}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col">
            <input
              type="button"
              value="="
              className="btn btn-warning btnequal"
              style={{ width: "100%" }}
              onClick={() => {
                updateValue("=");
                console.log("equation: " + equation + " result: " + result);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default PrintUi;