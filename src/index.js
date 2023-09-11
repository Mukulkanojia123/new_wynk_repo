import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import AlbumPage from './components/AlbumPage';
import ArtistDetails from './components/ArtistDetails';
import ManageSubscription from './Manage/ManageSubscription';
import { GenreMood } from './components/GenreMood';
import SearchPage from './components/searchPage';
import AddFavourites from './components/AddFavourites';



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children : [
            {
                path: "/",
                element: <Body />
            },
        
            {
                path: "/album/:resId",
                element: <AlbumPage />
            },
            {
                path: "/artistdetails/:resId",
                element: <ArtistDetails />
            },
            {
                path: "/managesubscription/",
                element : <ManageSubscription/>
            },
            {
                path: "/genre/:resId",
                element : <GenreMood/>
            },
            {
                path: "/search/song",
                element : <SearchPage/>
            },
            {
                path: "/favourite/",
                element : <AddFavourites/>
            }
        ]
    }
   

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={appRouter} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
