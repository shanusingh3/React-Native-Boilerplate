import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (storageName: string, storageData: string) => {
  await AsyncStorage.setItem(storageName, storageData);
};

export const fetchData = async (storageData: string) => {
  try {
    // Attempt to retrieve data from AsyncStorage based on the provided key
    const response = await AsyncStorage.getItem(storageData);

    // If data is retrieved successfully
    if (response !== null) {
      try {
        // Attempt to parse the retrieved data as JSON
        const parsedData = JSON.parse(response);
        // If parsing is successful, return the parsed JSON data
        return parsedData;
      } catch (jsonError) {
        // If there's a syntax error while parsing JSON, log a warning and return the raw response
        if (jsonError instanceof SyntaxError) {
          console.warn('Error parsing JSON (SyntaxError) =>', jsonError);
          return response;
        } else {
          // If the error is not a SyntaxError, re-throw it
          throw jsonError;
        }
      }
    }
    // If data is null or undefined, return null
    return null;
  } catch (e) {
    // If there is an error retrieving data from AsyncStorage, log it and return null
    console.warn('Error =>', e);
    return null;
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    return await Promise.reject(e);
  }
};

export const clearRecord = async (keyToDelete: string) => {
  try {
    await AsyncStorage.removeItem(keyToDelete);
  } catch (error) {
    console.error(`Error deleting key "${keyToDelete}":`, error);
  }
};

export const fetchPlainData = async (storageData: string) => {
  try {
    // Attempt to retrieve data from AsyncStorage based on the provided key
    const response = await AsyncStorage.getItem(storageData);

    // If data is retrieved successfully
    if (response !== null) {
      // Return the raw response as it is just a string
      return response;
    }
  } catch (e) {
    // If there is an error retrieving data from AsyncStorage, log it and return null
    console.warn('Error =>', e);
    return null;
  }
};

export const AsyncService = {
  storeData,
  fetchData,
  clearAll,
  clearRecord,
  fetchPlainData,
};
export default AsyncService;
