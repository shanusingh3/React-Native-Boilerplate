/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { SyncSelector, SyncThunk, dispatch } from '@app/redux';
import NetworkThunk from '@app/redux/ducks/network/network-thunk';
import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect, useRef, useState } from 'react';
import ReactNativeInactivity from 'react-native-inactivity'; // Import ReactNativeInactivity

function withApplicationSyncContainer(WrappedComponent: React.ComponentType) {
  return function NavigationContainerWrapper(props: any) {
    const { isConnected } = useNetInfo();

    const [inactivityTimeoutCount, setInactivityTimeoutCount] =
      React.useState(0);
    const [isActive, __] = React.useState(true);
    const [loop, _] = React.useState(true);

    useEffect(() => {
      dispatch(SyncThunk.saveSyncPreference({}));
      dispatch(SyncThunk.getUpdatedLastSyncTime());
    }, []);

    useEffect(() => {
      dispatch(NetworkThunk.updatedNetworkStatusChange(isConnected));
    }, [isConnected]);

    const isAppReadyForNextSync = SyncSelector.isAppReadyForNextSync();
    const syncPreferences = SyncSelector.getSyncPreference();
    const isAppReadyForNextSyncRef = useRef(isAppReadyForNextSync);
    const synFequencyInMilliSeconds =
      SyncSelector.getFrequencyToRegisterInterval();
    const lastSyncTime = SyncSelector.lastSyncTime();

    const _isTimeGreaterThanSyncFreq = () => {
      const lastSyncDate = new Date(lastSyncTime);
      const newTime = new Date(
        lastSyncDate.getTime() + synFequencyInMilliSeconds,
      );
      const currentTime = new Date();
      return currentTime.getTime() > newTime.getTime();
    };

    useEffect(() => {
      // Update the ref with the latest value whenever isSyncStarted changes to avoid stale closure
      isAppReadyForNextSyncRef.current = isAppReadyForNextSync;
    }, [isAppReadyForNextSync]);

    const handleSync = () => {
      if (isAppReadyForNextSyncRef.current && _isTimeGreaterThanSyncFreq()) {
        dispatch(SyncThunk.startSync());
      }
    };

    return (
      <ReactNativeInactivity
        isActive={isActive}
        onInactive={() => {
          const { frequency } = syncPreferences;
          frequency != 'Manual' && handleSync();
          setInactivityTimeoutCount(inactivityTimeoutCount + 1);
        }}
        timeForInactivity={30000} // 15 Minutes
        restartTimerOnActivityAfterExpiration={false}
        loop={loop}
      >
        <WrappedComponent {...props} />
      </ReactNativeInactivity>
    );
  };
}

export default withApplicationSyncContainer;
