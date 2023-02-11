import { Linking } from "react-native";

const OpenMap = (latitude, longitude, name) => {
  if (latitude && longitude && name) {
    const scheme = Platform.select({
      ios: `maps:${latitude},${longitude}?q=`,
      android: `geo:${latitude},${longitude}?q=`,
    });
    const latLng = `${latitude},${longitude}`;
    const label = name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  }
};

export default OpenMap;
