## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner
- `plop` - launch plop generator to create new components, pages, etc.

## Notes:
- I used `react-router-dom` for routing using `createBrowserRouter`. I've added a default layout. The current system doesn't support layout switching
- I've used `styled-components` for styling. Styled components are added in the boilerplate when running `yarn plop` to ensure consistency.
- I've used `RTK-query` inside of redux for data fetching. This should cache it to prevent unnecessary re-fetching. I've stringified the pagination settings for the List re-fetch. Current implementation of autoscroll doesn't leverage this much.
- Added a simple infinite scroll to display the list of images. This is a simple implementation and could be improved.
- Deploying via Vercel for this file since it automates. I would prefer to control that via githubActions and AWS.

## Known issues / limitations:
- The app does not have loading and error states. For sake of time I decided against creating a nice and elegant solution considering I've only got 4 hours to build this.
- The app does not have testing. Testing would be 100% mandatory but would rely on a robust testing approach. I've chosen to not use my time to implement a sub-par testing solution for the sake of showing a test.
- The details page is sparse. ideally we would show all the required details here. I decided not to spend a lot of time deciphering the API to figure out what information would be relevant to show to the user.
- The redux API slice is all in one file. I would prefer to split this into multiple files and folders. Each for a separate entity/request type. This would make the code more readable and maintainable. The reason why I decided against it is because of type inference in the redux `createApi` tool. the `build` param is being passed into the endpoints section and has a complex type based on other values in the config object. I chose not to spend my time to figure out the type and pass it through to generator functions inside of separated files.
```
├── src/
│   ├── api/
│   │   ├── articApiSlice.ts
│   │   ├── entities/
│   │   │   ├── Artwork
│   │   │   │   ├── getArtwork.ts
│   │   │   │   ├── getArtworkById.ts
│   │   │   │   ├── //... more files here
│   │   │   │   Artist
│   │   │   │   ├── //... All artist related stuff here.
```


## Nice to add:
- Theme/components. I've decided against adding a component library + theme and opted for a quick css solution for the sake of time. This means that all styling is hardcoded without the use of a theme.
- Add lazy loading for the images in the project. Currently jumpy when switching a page.
- Add transitions between pages.
- Testing all files.
- Better pagination. Currently, it is doing re-fetches on end of scroll with an intersection observer. I'd rather have some more display information regarding the state and if more items are available. 
- Search. The Api provides search and this currently isn't being used in the list. This would make the application more useful.