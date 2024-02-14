import "./button.scss";

const Button = () => {
  const rippleEffect = (event: any) => {
    let x = event.clientX - event.target.offsetLeft + 150;
    let y = event.clientY - event.target.offsetTop + 30;

    let ripples = document.createElement("span");

    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;

    event.target.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  };
  return <button onClick={rippleEffect}>Click me</button>;
};

export default Button;
