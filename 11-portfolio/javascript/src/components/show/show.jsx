const Show = ({ if: show, children }) => {
  return show ? children : null;
};

export default Show;
