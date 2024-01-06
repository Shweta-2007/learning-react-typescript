type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "bottom" | "center";
type ToastProp = {
  position:
    | Exclude<`${HorizontalPosition} - ${VerticalPosition}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastProp) => {
  return <div>Toast Notification Position - {position}</div>;
};

export default Toast;

// Position prop can be one of
//   left-center | left-top | left-bottom | center | center-top | center-bottom | right-center| right-top | right-bottom
