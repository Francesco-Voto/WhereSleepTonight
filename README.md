WhereSleepTonight is a mobile application to get a list of hotels.


# Running the project

## **Installing dependencies**

Before run the app, check if the environment is correctly set up for React Native app.
More info [here](https://reactnative.dev/docs/environment-setup).


### CocoaPods

You can use two different way to install cocoapods


* #### **CocoaPods installation via rbenv (suggested)**

Install rbenv via brew

```
brew install rbenv
```

Furthermore, you have to add the following command to your `.zshrc` or `.bashrc` (depending on your default shell). Add this command before any export of the `PATH`, otherwise a precedence issue might occur.

```
eval "$(rbenv init -)"
```

Inside the root of the project run (you may not need this):

```
rbenv init
```

and then

```
rbenv install
```

which install the version specified inside `.ruby-version` file

finally you can install the `cocoapods` gem running

```
gem install cocoapods
```

* #### **Global CocoaPods installation**

CocoaPods will be installed via:

```
sudo gem install cocoapods
```

### Project dependencies

Launch yarn command in a terminal opened in the project folder.

`yarn install-all`

This installs all project dependencies from `package.json` using `yarn.lock` to install exact version of these dependencies.


## **Launch the app**

To launch the app you should follow the specific requirements based on the environment to launch:

* #### **iOS**

Run

```
yarn ios
```

This will start the predefined iPhone simulator and install and start the app.


* #### **Android**

```
yarn android
```

connect the device and verify it is connected using `adb devices` and then run

```
yarn android
```


# Project Decisions

## UI and UX
The app is a normal list - details app.

- The list is composed by Card with image, name, price and  stars of the hotel

- The Details screen shows all the details of a hotel with a nice carousel for the images.

Loading state is provided via Lottie with a fancy animation.

Some filter is shown above the list with the possiblity to sort the hotels by Price, Name or Stars. Every filter can be in ascending or descending order.


## App architecture

The codebase is built in such a way as to provide a sort of framework in which to insert various modules.

A module represents a single topic within the app (a topic can be a single piece of UI, as in this case, or an entire flow with consistent actions).

The modules currently present are:
* Hotels
* HotelDetails

`Filter` component is create dusing the [Compound](https://blog.logrocket.com/understanding-react-compound-components/) approach in order to keep all the logic in a single place.

To handle the different possible states of the UI, over to data transformation and normalization, `react-query` together with `Suspense` and `Error Boundary` in order to cover all the possible different phases. 

`Services` contain the business logic to manage the various data within the app. The calls to the api have been inserted here so that the components do not have a real knowledge (if instead of API calls we want to use a DB for example just change the source in here).

[`Brand`](./src/brand.d.ts) type is used to separate Time (a string representing an hour and minute) from normal string. [Here](https://medium.com/@KevinBGreene/surviving-the-typescript-ecosystem-branding-and-type-tagging-6cf6e516523d) a little article about what brand type is and why use it.


## Testing

To test, you can run:
```
yarn test
```

The test suite is implemented  is built on the shape of testing trophy rathen than the more classic testing pyramid, having mostly integration tests.
For the mocking part, `MSW` is used in order to intercept and mock the API calls.

Here some docs about [testing tropy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) and [MSW](https://kentcdodds.com/blog/stop-mocking-fetch).


## Next possible iterations

Some possible future iterations could be:
- Handle the full image from carousel
- Open directly the email app if email is pressed
- Dial a phone call if th phone number is pressed
