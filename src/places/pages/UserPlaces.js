import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Kermlin",
    address: "Moscow, Russia, 103132",
    description:
      "The Moscow Kremlin, or simply the Kremlin, is a fortified complex in the center of Moscow founded by Russian ruling dynasty of Rurikids. It is the best known of the kremlins, and includes five palaces, four cathedrals, and the enclosing Kremlin Wall with Kremlin towers",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-lviIMz5PS2F24w5gTgmvrI4a9i2RB2xR2zklmGCEmKDxQVma_vwhyIclM2WAwSZI14&usqp=CAU",
    creatorId: "u1",
    location: {
      lat: 55.7491439,
      lng: 37.5730249,
    },
  },
  {
    id: "p2",
    title: "Kermlin",
    address: "Moscow, Russia, 103132",
    description:
      "The Moscow Kremlin, or simply the Kremlin, is a fortified complex in the center of Moscow founded by Russian ruling dynasty of Rurikids. It is the best known of the kremlins, and includes five palaces, four cathedrals, and the enclosing Kremlin Wall with Kremlin towers",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-lviIMz5PS2F24w5gTgmvrI4a9i2RB2xR2zklmGCEmKDxQVma_vwhyIclM2WAwSZI14&usqp=CAU",
    creatorId: "u2",
    location: {
      lat: 55.7491439,
      lng: 37.5730249,
    },
  },
];

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(
    (place) => place.creatorId === userId
  );
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
