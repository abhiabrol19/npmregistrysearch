# NPM Registry React App

## Overview

This project is a React application that provides an interactive interface to explore the NPM registry. It enables users to search for NPM packages, view detailed information about specific packages, and discover featured packages. Built using modern web development technologies, the application ensures a responsive and intuitive user experience.

## Key Technologies

- **React**
- **React Router**
- **Tailwind CSS**
- **TypeScript**
- **React Icons**
- **Fetch API**

## Project Structure

### Main Entry Point

The main entry point of the application is `main.tsx`, which initializes the React application and renders the root component (`App`) into the DOM. 

### App Component

The `App` component sets up routing using React Router. It defines routes for the Home Page, Search Page, and Details Page, each associated with specific components and data loader functions for fetching necessary data.

### Pages

- **Home Page**: Displays a list of featured packages fetched from the NPM registry using the `homeLoader` function. Each package is shown with its name, description, and number of maintainers. Users can click on a package to view more details.
  
- **Search Page**: Allows users to search for NPM packages using a search input component. The search results are displayed in a list format, and each package links to a detailed view.

- **Details Page**: Provides detailed information about a specific package, including its name, description, license, and author. The `detailsLoader` function fetches data based on the package name from the URL parameters.

### Loaders

- **Home Loader**: Fetches the list of featured packages from the NPM registry using the `getFeaturedPackages` function. The data is returned to populate the Home Page.

- **Details Loader**: Retrieves details of a specific package from the NPM registry using the `getPackage` function, based on the package name provided in the URL parameters.

### Components

- **Search Input**: A component that provides a search field for users to enter search terms. It uses React Router's `useNavigate` hook to handle navigation to the search results page.

- **Package List Item**: Displays information about a single package in a list format, including its name, description, and keywords. Users can navigate to the package's detailed view by clicking on the package name or the "View" button.

- **Header**: A navigation bar that includes a link to the Home Page and the search input field, providing quick navigation and search functionality across the application.

### API Queries

- **getFeaturedPackages**: Fetches data about a predefined list of featured packages from the NPM registry by making multiple API requests in parallel.

- **getPackage**: Fetches detailed information about a specific package from the NPM registry based on the package name.

- **searchPackages**: Searches for packages in the NPM registry using a search term, returning the relevant search results.

## Application Workflow

1. **Home Page**: The application loads with the Home Page, displaying featured packages fetched from the NPM registry. Users can click on any package to view its detailed information.

2. **Search Functionality**: Users can enter search terms in the search input field located in the header. Upon submission, the application navigates to the Search Page, displaying relevant search results.

3. **Package Details**: When a user selects a package, the application navigates to the Details Page, where it fetches and displays detailed information about the selected package.

## Running the Application

1. **Install Dependencies**: Run `npm install` to install all required dependencies.
2. **Start the Development Server**: Run `npm run dev` to launch the development server. The app will be available at `http://localhost:5173`.

## Conclusion

The NPM Registry React App is a user-friendly tool designed to interact with the NPM registry, providing users with the ability to search for, explore, and view detailed information about various packages. Utilizing technologies such as React, React Router, Tailwind CSS, and TypeScript, the application delivers a modern, responsive, and engaging user experience.

---

## Screenshot

```html
<img src="./assets/demo.png" alt="NPM Registry App Home Page" style="width: 80%; height: auto; display: block; margin: 0 auto;">
