## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner
- `plop` - launch plop generator to create new components, pages, etc.


## Notes:
- I used `react-router-dom` for routing using `createBrowserRouter`. I've added a default layout. The current system doesn't support layout switching
- I've used `styled-components` for styling. Styled components are added in the boilerplate when running `yarn plop` to ensure consitency.
- I've used `RTK-query` inside of redux for data fetching. This should cache it to prevent unnecessary refetching. I've hashed the pagination settings for the List refetch.
- Deploying via Vercel for this file since it automates. I would prefer to control that via githubActions and AWS.

## Nice to add:
- Add lazy loading for the images in the project. Currently jumpy when switching a page.
- Add transitions between pages.
- Testing all files.


