# WorldWise - A React app to helps you track your travels and create a visual record of your adventures
This project is a part of The Ultimate React Course 2023: React, Redux & More by Jonas Schmedtmann. The website's design and structure were provided as part of the course curriculum, and I did not design the website from scratch.
## Live Demo
Check out the project here
## Description
WorldWise helps you track your travels and create a visual record of your adventures. It allows you to add cities to your list and view them on a world map, as well as view information about each city.

It is built using React.js, React Router, context API, memo, useMemo, useCallback.
  ### Features

* Pages: WorldWise has five pages: homepage, pricing, product, login, and app.
* Interactive world map: WorldWise displays a world map with markers for all of the cities that the user has added to their list.
* City list: WorldWise displays a list of all of the cities that the user has added to their list. The list includes the city name, country flag, and date of visit.
* City form: When the user clicks on a city on the map or in the list, WorldWise displays a form with information about the city, including the city name, country flag, date of visit, and notes about the trip.
* Add city: The user can add a city to their list by filling out the city form and clicking the "ADD" button. A marker will then appear on the map for the new city.
* Remove city: The user can remove a city from their list by clicking the "×" button next to the city in the list. The marker for the city will then be removed from the map.
* Tab component: WorldWise has a tab component that displays a list of cities and correspond countries that user added. This allows users to quickly switch between different views of their list.
* Current user geolocation: The user can click the "USE YOUR POSITION" button to navigate the map to their current user's geolocation.
* Local storage: The list of cities is persisted in local storage, so that the user's list is preserved even if they close the browser or navigate to a different page.
* Login and logout functionality: WorldWise allows users to log in and out of their accounts.

## Screenshots
![Screenshot 2024-06-25 113806](https://github.com/Branden-Orefice/WorldWise/assets/160198987/a1552c9c-643e-4f73-bf0d-615fbaa89124)
![Screenshot 2024-06-25 113828](https://github.com/Branden-Orefice/WorldWise/assets/160198987/22db19af-493f-46d5-9b9b-f75e9cba6ac2)
![Screenshot 2024-06-25 113848](https://github.com/Branden-Orefice/WorldWise/assets/160198987/e7e96fbe-a76d-4cbe-8326-27d149810abc)
![Screenshot 2024-06-25 114048](https://github.com/Branden-Orefice/WorldWise/assets/160198987/72ff8385-aebe-4633-b16e-61fac222bb6b)
![Screenshot 2024-06-25 114121](https://github.com/Branden-Orefice/WorldWise/assets/160198987/e851e312-a29c-406a-afa8-e46ed08d04a7)
![Screenshot 2024-06-25 114155](https://github.com/Branden-Orefice/WorldWise/assets/160198987/ef51a606-11e0-48f5-96ef-92b09571a37f)
![Screenshot 2024-06-25 114217](https://github.com/Branden-Orefice/WorldWise/assets/160198987/439f9e9e-211b-4a47-89d6-56ed2ba7fb1d)
![Screenshot 2024-06-25 114352](https://github.com/Branden-Orefice/WorldWise/assets/160198987/49565db5-5d20-49f0-93b2-37573b98155d)

## Getting Started
To get started with WorldWise, you will need to have Node.js and Vite installed on your machine.

To install Node.js, visit the Node.js website: <https://nodejs.org/en>.

To install Vite, run the following command in your terminal:
`npm install -g vite`

Once you have Node.js and Vite installed, you can clone the worldwise repository to your local machine:
`https://github.com/Branden-Orefice/WorldWise.git`

Navigate to the worldwise directory and install the dependencies:
`cd WorldWide`
`npm install`

To start the development server, run the following command:
`npm run dev`

The development server will be running on <http://localhost:5173>. You can open this URL in your web browser to view the worldwise app.

## Using App

WorldWise is a web application that helps you track your travels and create a visual record of your adventures. To use WorldWise, simply log in and start adding cities to your list.

To add a city to your list:

* Click on the position on the map where you want to add a city.
* You can fill out the city form, including the city name, country flag, date of visit, and notes about your trip. 
* Click the "ADD" button.
* A marker will then appear on the map for the new city.

To remove a city from your list:

* Click on the "×" button next to the city in the list.
* The marker for the city will then be removed from the map.

To view information about a city:

* Click on the city name in the list or on the map.
* A form will be displayed with information about the city, including the city name, country flag, date of visit, and notes about your trip.
  
To navigate the map to a city:

* Click on the city name in the list or on the map.
* The map will navigate to the corresponding position. You can also zoom and pan the map to navigate to a city.

To use the login and logout functionality:

* To log in, click on the "LOGIN" button and enter your email address and password.
* To log out, click on the "LOGOUT" button.
