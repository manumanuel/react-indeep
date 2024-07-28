# stage-1

- create app without JSX

# Parcel

- Dev Build
- automatically host on a local server
- doing HMR (Hot Module Replacement -using file watching algorithms written in cpp)
- it supports caching (helps in faster building of app)
- image optimization
- bundling & minification
- compressing the files (by avoiding comments & white spaces)
- consistent hashing
- code splitting
- differential bundling (support old browsers)
- diagnosis
- error handling / meaningful error suggestions
- supports HTTPs
- tree shaking (removes unused codes)
- different dev & prod builds (dev build take little more time compared with prod build)

#App structure
/\* TODO

- Header
- - logo
- - about us
- - contact us
- - cart
- Body
- - card containers
-       - cards
- Footer
- - copyright
- \*/

# Routing

- {createBrowserRouter, RouterProvider, Link, Outlet, useParams} from "react-router-dom"
- createBrowserRouter is used to set up router config (path, element, errorElement, children)
- RouterProvider used to add configured Router setup for rendering
- Link is used to render component without reload as in SPA (Link is associated with 'to' to specify path, eg:- <Link to="/about">About Us</Link>)
- Outlet - used to render component as children of parent component
- useParams - used to get the passed parameters dynamically within the component

# Class based Components

- Life cycle methods
  - ComponentDidMount
  - ComponentDidUpdate
  - ComponentWillUnmount
- Loading Hierarchy
  - constructor (dummy)
  - render (dummy) [DOM populate with dummy data]
  - ComponentDidMount - [API Call happens]
  - setState [dummy State variables updated]
  - render (actual data) [dummy data replaced with API data]
  - ComponentDidUpdate
  - ComponentWillUnmount [called when we leave the component]
