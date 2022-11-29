const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-title">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Boxes</h1>
    <div class="box-container">
      <Box className="boxSmall" text="Small" />
      <Box className="boxMedium" text="Medium" />
      <Box className="boxLarge" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
