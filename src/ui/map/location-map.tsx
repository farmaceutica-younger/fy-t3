import { MapMarker } from "./marker";
import { UserAvatar } from "../user-icon";
import { BaseMap } from "./base-map";

interface Marker {
  location: {
    lat: number;
    lng: number;
  };
  image: string;
  name: string;
}

interface Props {
  markers: Marker[];
}

const MembersMap = ({ markers }: Props) => {
  return (
    <BaseMap>
      {markers.map((m, id) => {
        return (
          <MapMarker
            key={id}
            marker={{
              position: [m.location.lat, m.location.lng],
            }}
            className="flex place-content-center items-center bg-red-400"
          >
            <UserAvatar name={m.name} src={m.image} />
          </MapMarker>
        );
      })}
    </BaseMap>
  );
};

export default MembersMap;
