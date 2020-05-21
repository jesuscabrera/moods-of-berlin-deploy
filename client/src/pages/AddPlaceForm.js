import React from "react";
import AddPlace from "../components/AddPlace";
import { Card } from "react-bootstrap";

const AddPlaceForm = (props) => {
  return (
    <div className="bg-info p-5" style={{ borderTop: "solid 2px white" }}>
      <Card
        bg="light"
        border="secondary"
        style={{ width: "70%", margin: "0 auto" }}
        body
      >
        <h1 className="text-center">Add a Place</h1>
        <AddPlace history={props.history} />
      </Card>
    </div>
  );
};

export default AddPlaceForm;
