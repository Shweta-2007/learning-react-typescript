type StatusProps = {
  status: "loading" | "success" | "failure";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "failure") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h3>Status - {message}</h3>
    </div>
  );
};

export default Status;
