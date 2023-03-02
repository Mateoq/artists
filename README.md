# artists
Small React app to manage a custom music artists list.

## Libraries used:
- React Query
- React Router
- Styled Components
- React Select
- Axios

## Paths
- HOME: `/`
- ARTIST DETAIL: `/artist/:id`
- FAVORITE ARTIST: `/favorite`

## Node Version
LTS 18.14.2

## Setup
After cloning the repo run the next command:

```
  yarn
```
In the root of the project, this will install all the dependencies.

Then create an `.env` file with the following variable:
```
 VITE_API_KEY="key"
```
This variable is necessary to call the API.

Them run the next command:
```
  yarn dev
```
In the root of the project and the `Vite` server will start at the port: `5173`

And that's it, all you need to do is to open the browser in the url `http://localhost:5173` and start using the app.
