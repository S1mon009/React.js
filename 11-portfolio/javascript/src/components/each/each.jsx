const Each = ({ data, render }) => {
  return data.map((item, index) => render(item, index));
};

export default Each;
