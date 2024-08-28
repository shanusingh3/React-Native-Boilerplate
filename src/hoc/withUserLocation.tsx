/* eslint-disable react/prop-types */

import LocationSelector from '@app/redux/ducks/location/location-selector';
import React, { useEffect, useState } from 'react';

const withUserLocation = (WrappedComponent: React.JSX.IntrinsicAttributes) => {
  const UserLocationHOC = (props: React.JSX.IntrinsicAttributes) => {
    const [isValidToUnlock, setIsValidToUnlock] = useState(false);

    const userLocation = LocationSelector.getUpdatedLocation();
    useEffect(() => {
      if (userLocation && props?.route?.params?.item?.location) {
        const distance = calculateDistance(
          userLocation?.coords.latitude,
          userLocation?.coords.longitude,
          props.route.params.item.location.latitude,
          props.route.params.item.location.longitude,
        );

        setIsValidToUnlock(distance <= 30); // Adjust the distance threshold as needed
      }
    }, [userLocation, props.route.params.item.location]);

    const calculateDistance = (
      lat1: number,
      lon1: number,
      lat2: number,
      lon2: number,
    ) => {
      // Implement your distance calculation logic here
      // You can use a library like haversine for more accurate calculations
      const R = 6371e3; // Radius of the Earth in meters
      const rad = Math.PI / 180;
      const lat1rad = lat1 * rad;
      const lat2rad = lat2 * rad;
      const deltaLat = (lat2 - lat1) * rad;
      const deltaLng = (lon2 - lon1) * rad;

      const a =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(lat1rad) *
          Math.cos(lat2rad) *
          Math.sin(deltaLng / 2) *
          Math.sin(deltaLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const distance = R * c;
      return distance;
    };

    return <WrappedComponent {...props} isValidToUnlock={isValidToUnlock} />;
  };

  return UserLocationHOC;
};

export default withUserLocation;
