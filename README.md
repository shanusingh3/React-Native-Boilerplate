# Unlockr

Unlockr is a powerful mobile application designed to streamline the process of accessing and managing properties for potential buyers. By leveraging cutting-edge technology, Unlockr provides a convenient and secure solution for both real estate agents and home seekers.
## Getting Started

Please install the required modules using "yarn."
Install CocoaPods dependencies with "yarn pod-install."
To run the project, execute "yarn ios."
Whenever you encounter problems with caches, you can run "yarn clean:ios."
For code commits, please use "yarn commit" instead of using git commit or any other source control tool like an IDE or SourceTree.
# React Native BoilerPlate

A basic boilerplater for react native with new Arch enabled which supports React 18 and React Native 0.74.0 and above.

## Commit Strategies

Husky setup has been implemented with basic typescript rules, react rules and formatting rules. Whenever we do commit husky will do lint and prettier and lists out the issues. With closing the issues you should be able to push the code.

## Pre-Added Modules

Few of the library and patterns which are pre-added in the BoilerPlate:

- Localization
- Redux Toolkit
- Service Layer(request/response interceptor, with autologout if 403,401, toast(optional))
- Env Config
- Theme Dark/Light Mode
- Dynamic Module Resolver
- Redux-Duck Arch Pattern
- Auth Flow
- New Arch Enabled to support Fabric and Turbo Module
- Network Detector Wrapper
- React Error Boundary
- Pre-Commit added `Commit to master`

## Tech Stack

**Packages:** React, Redux, Shopify Re-Style, Redux Toolkit, Axios, i18next, Toast.

**Version:** React 18, React Native 0.74.0

## Rename Boiler Plate

To Rename the boileplate according to the requirements, please add this package and follow the instructions [React Native Rename](https://github.com/junedomingo/react-native-rename).

## Folder Structure

The folder stucture is as below

    src: This folder is the main container of all the code inside your application.
        assets: Asset folder to store all images, fonts, etc.
            fonts: Fonts folder to store all fonts
            svg: Images folder to store all svg images
        config: Config folder to store any configurations related data.
        constants: Folder to store any kind of constant that you have.
            theme: Theme folder to store all data related to color constants, font constants, typography constants.
            navigation-constants: To store all the routes related constants.
        hoc: HOC folder to store higher order components.
        hooks: Hooks folder to store any custom hook components.
        locale: Folder to store the languages files.
        navigation: Folder to store the navigators.
        redux: Folder to store the global state of the app. The detailed explanation for redux duck pattern implementation is given below at ## Redux Duck Pattern Use.
            actions: This folder contains all actions that can be dispatched to redux.
            ducks: This folder should have all your reducers, and expose the combined result using its index.js
            store: This folder will have the global store with persistance.Folder to put all redux middlewares and the store
        screens: Folder that contains all your application screens/features and common components. Screens folder is divided into two main divisions., One is seperate components folder and the others are of modules in the app. Each module again has its common components folder inside of it. Naming convention for the files inside module has been determined below at ## Naming Convention.
            components: Folder to store any common component that you use through your app (such as a generic button, text). These components are divided into sub modules like atoms and molecules depending on their size.
        services: Folder to store all your network logic and generic API calls.
        utils: Folder to store all app related utilities and components.
            async-utils: File that contains the application local storage common functions.
            dimension-utils: File to store device dimensions constants.
            keychain-utils: File that contains the application keychain common functions.
            scalar: File to store scalar function constants.
            theme: File to store common UI typograghy(text stylings) styling constants.
        App.tsx: Main component that starts your whole app.
        index.js: Entry point of your application as per React-Native standards.

## Naming Convention

```bash
  login-screen.tsx
  login-utils.tsx
  login-slice.ts
  login-thunk.ts
  login-selector.ts
```

Use-Case: `Purpose of using it to navigate to the screens easily with Command + P, when searching for the screen, just add the prefix eg ```login-``` screen that will filter login component items.`

## How to use theme variables inside style

```bash
 import {theme} from 'src/utils/theme';

 backgroundColor: theme.colors.backgroundColor,
```

Always use scaler when defining any hard coded values inside styles.

```bash
  import scaler from '@utils/scaler';
  fontSize: scaler(1)
```

For any hardcoded values use the function scaler which is inside utils for scaling the values according to the device size.

## Redux Duck Pattern Use

Steps to create and use the redux with duck pattern and redux Toolkit in the application.

Navigate to the folder

```bash
src/redux/ducks
```

create one seperate folder, example auth

```bash
src/redux/ducks/auth
```

Inside create four files

```bash
src/redux/ducks/auth/auth-selector.ts
src/redux/ducks/auth/auth-thunk.ts
src/redux/ducks/auth/auth-slice.ts
src/redux/ducks/auth/index
```

now, Inside auth-slice

```js
import {createSlice} from '@reduxjs/toolkit';
import AuthThunk from './auth-thunk';

const initialState = {
  isLoggedIn: false,
  isLoading: true,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,

  // Reducers -> add Any custom reducer that you want to use in the
  // application,
  // like logout, reset, clearData etc, or same can be done when with
  // extraReducers if any sideeffects needs to be done, like asynstorage use or
  // API Call, that will go inside auth-thunk seperatelly

  reducers: {
    reset: (state, {payload}: {payload: any}) => {
      state.isLoggedIn = false;
    },
  },

  // auth-thunk will contain the logic of extraReducers,
  // Dont forget to add all three promise handling while managing the
  // extraReducers through auth-thunk

  extraReducers: (builder) => {
    builder
      .addCase(AuthThunk.login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AuthThunk.login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(AuthThunk.login.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export default AuthSlice;
```

now, Inside auth-thunk

```js
import {createAsyncThunk} from '@reduxjs/toolkit';

//make sure to use unique name like login aur logout
const login = createAsyncThunk(
  'login',
  async (_, {rejectWithValue, dispatch}) => {
    try {
      //API call can be made here for specific thunk and this thunk will
      // communicate with the auth-slider automatically

      // const response = await ProductService.getProducts();
      return {};
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

const AuthThunk = {
  login,
};

export default AuthThunk;
```

now, Inside auth-selector, it's used to get the data from the store specific to that requirements, any data manipulation which needs to be done, can be done inside that auth-selector, particular to the conditions, which decouples the business logic from the component in some sort.

```js
import {RootState} from '@app/redux/store/store';
import {useSelector} from 'react-redux';

const isLogin = (): any => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  // Any sepertate logic or data manipualtion can be done here.

  // example this code will only get title out of array of object, which avoids it // to do the same on the component.
  // const {products} = productsSelector;
  //   const titles = products?.map((item) => {
  //     return {title: item.title};
  //   });

  return isLoggedIn;
};

const AuthSelector = {
  isLogin,
};

export default AuthSelector;
```

inside index.ts of auth folder import slice, selector, and thunk like this.

```js
//src/redux/ducks/product/index.ts

import slice from './auth-slice';
import selectors from './auth-selector';
import thunks from './auth-thunk';

export default {
  reducer: slice.reducer,
  ...selectors,
  ...slice.actions,
  ...thunks,
};
```

import all the ducks inside the default reducers to be available for the use.

```js
// src/redux/ducks/index.ts
import auth from './auth';
import product from './product';

export default {
  product: product.reducer,
  auth: auth.reducer,
};
```

## How to use

```js

import { dispatch } from '@app/redux/store/store';
import ProductThunk from '@app/redux/ducks/product/product-thunk';
import AuthSelector from '@app/redux/ducks/auth/auth-selector';

const productNames = ProductSelector.getSortedProductNames();
const isLoggedIn = AuthSelector.isLogin();

  useEffect(() => {
    dispatch(ProductThunk.getProducts());
  }, []);

   onPress={() => {
     dispatch(AuthThunk.login());
   }}

```

## Env and pre-defined scripts

To Install Pods with new Arch Enabled

```bash

yarn pod-install

```

Run dev Env

```bash

 yarn android:dev
 yarn ios:dev

```

## Add scripts and generate build

We've four env in the boilerplate, .env(default to dev), .env.dev , .env.uat,  .env.prod
to make new scripts, replace `:dev` with env name and `"ENVFILE=.env name"`, take a reference for the pre-defined script which is there inside package.json,

```bash
  "setDevelopment": "ENVFILE=.env.dev",
  "setStaging": "ENVFILE=.env.uat",
  "setProduction": "ENVFILE=.env.prod",
  "android:dev": "yarn setDevelopment  react-native run-android --mode=developmentDebug --appIdSuffix=dev",
  "ios:dev": "yarn setDevelopment react-native run-ios --mode=Debug --scheme \"dev\"",
  "ios:uat": "yarn setStaging  react-native run-ios --mode=Debug --scheme \"uat\"",
  "ios:prod": "yarn setProduction  react-native run-ios --mode=Debug --scheme \"prod\"",
```

## To run ios/android app run this command in terminal - 
Select env (dev/uat/prod) and based upon the env change the script name- 

- clean:ios (optional)
- pod-install:dev (optional)
- yarn ios:dev

                           or

- Clean build from Xcode 
- Select scheme - dev/uat/prod
- Run build

## Create new component

`src/screens` Navigate to the path and create new component for example, `login`, create a folder inside this path with name login and create two files, one for utils and one named screen, always add `component-screen and component-utils, component-service, component-selector, etc suffix` for navigating it easily with `Command + P`.

```js
login - screen.tsx;
login - utils.tsx;
```

## Localisation

`src/locale` Inside we've two local folders,`en for English,tha for Thai`

create seperate local files for both

```bash

src/locale/en/index.tx

src/locale/tha/index.tx

```

```js
export default {
  common: {
    ok: 'OK',
    cancel: 'Cancel',
  },
  home: {
    title: 'Welcome Back to Home Page English, {{name}}',
  },
  login: {
    title: 'Login Page English',
    loginCTA: 'Click to Log In',
  },
};
```

Use inside component, you can pass name as dynamic.

```js
import {useTranslation} from 'react-i18next';

const {t} = useTranslation();
<Text>
  {t('home:title', {
    name: 'Shanu Singh',
  })}
</Text>;
```

## Service Layer

`src/services/service-utils.ts`

Inside RequestInterceptor refresh token fetch, adding custom header etc can be done.

```js
export const applyAxiosRequestInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers['Custom-Header'] = 'helo World';
      if (isAuthTokenExpired('')) {
        //CALL API SERVICE FOR REFRESH TOKEN
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};
```

Inside Responsee Interceptor Auto Logout based on status code, adding toast(optional).

```js
export const applyAxiosResponseInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      console.log(error.response.status);
      if (error.response.status === 403 || error.response.status === 401) {
        //Auto Logout the user if any api returns 403/401
        dispatch(AuthThunk.logOut());
      }

      Toast.show({
        type: 'customToast', //Type can be error/success/ customToast
        text1: `${error.response.status}`,
        text2: 'Something went wrong while fetching data.',
      });

      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );
};
```

`NOTE: When creating any new service don't forgot to call these and pass the instance of the axios api. Please refer to src/services/product-service.ts for example.`
