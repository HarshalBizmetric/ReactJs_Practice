const EmptyList = () => {
  const emptyListStyle = {
    color: "white",
    backgroundColor: "darkblue",
    padding: "10px",
    fontFamily: "Arial",
    width: "300px",
    borderRadius: '10px'
  };

  return (
    <>
      <p style={emptyListStyle}>List is Empty</p>
    </>
  );
};

export default EmptyList;
