import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button> Share Place </Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          creatorId={place.creator}
          description={place.description}
          address={place.address}
          coordinates={place.location}
          title={place.title}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
