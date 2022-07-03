import Button from "./Button";

const Switch = ({
  switch1,
  setSwitch1,
  switch2,
  setSwitch2,
  switch3,
  setSwitch3,
}) => {
  return (
    <>
      <div className="global ">
        <div className="left">
          <Button switcho={switch1} setSwitch={setSwitch1} />
          <Button switcho={switch2} setSwitch={setSwitch2} />
          <Button switcho={switch3} setSwitch={setSwitch3} />
        </div>

        <div className="right">
          {switch1 === true && switch2 === true && switch3 === true ? (
            <button className="gn" style={{ backgroundColor: "green" }}>
              GO
            </button>
          ) : (
            <button className="gn" style={{ backgroundColor: "red" }}>
              NO WAY
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Switch;

/* <div className="global">
        <div className="left">
          <div className="button">
            <button
              onClick={() => setSwitch1(true)}
              style={{ backgroundColor: "white" }}
            >
              ON
            </button>
            <button
              style={{ backgroundColor: "cyan" }}
              onClick={() => setSwitch1(false)}
            >
              OFF
            </button>
          </div>

          <div className="button">
            <button
              style={{ backgroundColor: "white" }}
              onClick={() => setSwitch2(true)}
            >
              ON
            </button>
            <button
              style={{ backgroundColor: "cyan" }}
              onClick={() => setSwitch2(false)}
            >
              OFF
            </button>
          </div>

          <div className="button">
            <button
              style={{ backgroundColor: "white" }}
              onClick={() => setSwitch3(true)}
            >
              ON
            </button>
            <button
              style={{ backgroundColor: "cyan" }}
              onClick={() => setSwitch3(false)}
            >
              OFF
            </button>
          </div>
        </div>

        <div className="right">
          {switch1 === true && switch2 === true && switch3 === true ? (
            <button className="gn" style={{ backgroundColor: "green" }}>
              GO
            </button>
          ) : (
            <button className="gn" style={{ backgroundColor: "red" }}>
              NO WAY
            </button>
          )}
        </div>
      </div>
    </> */
