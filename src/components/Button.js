const Button = ({ switcho, setSwitch }) => {
  return (
    <div className="button">
      <button
        className={switcho ? "cyan" : "white"}
        onClick={() => setSwitch(true)}
      >
        ON
      </button>
      <button
        className={switcho ? "white" : "cyan"}
        onClick={() => setSwitch(false)}
      >
        OFF
      </button>
    </div>
  );
};

export default Button;
