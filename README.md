## Getting started
### Environment:
* NodeJs 10+
* Open the project directory and run `npm install`
* Install the following globally: *electron*, *vue-cli* using `npm install -g @vue/cli  electron`
* Run `npm run electron:serve` to fire up the development app.  This should display the app in hot module reload mode

## File structure
 Most, if not all, work should be done within `src` because everything outside of that directory are either temporary or environmental files.
 * `src/assets` - Contains static files like images and styles
 * `src/components/views` - Contains app UI layout
 * `src/components/modules` - Contains modules.  Modules are sections/areas of the app UI which, typically, have a local state and can be reused moved etc.
 * `src/components/elements` - Contains reusable elements like buttons, tabs etc. which typically do not have a local state (or at least, not a complex state)

