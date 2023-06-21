# Introduction to React
## 1. Init React
Prerequisite of that step is to have nodejs installed on your machine.
- Execute `npx create-react-app introduction-to-react --template typescript` to create a new react project using typescript
- After the initialization is complete, you can navigate to the project directory with `cd introduced-react`
- Here you can run your project for the first time with `npm start`, all necessary npm packages are already installed. If you add a new package you need to run `npm install`
- Hot reloading in React is a development feature that automatically updates the application with code changes in real-time, providing a faster feedback loop and preserving the current state of the application.

## 2. Add Custom Component
After setting up the default project in the previous step, we will continue with replacing the default components in the application with custom ones. In the project folder you find two subfolders. The "public" folder contains static content, like images. Whereas the "src" folder contains the source code of the application. The "src" folder contains a file called "index.tsx" which is the entry point of the application. The "index.tsx" file contains the following code:
```javascript
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
In the render method the root element is rendered, in our case the `App` component.
- First we will start by replacing the content of the App component with a `HelloWorld` component. The `HelloWorld` component is located in the "src" folder and is called "HelloWorld.tsx". The `HelloWorld` component is a functional component, which means it is a function that returns JSX. JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”. The `HelloWorld` component contains the following code:
```javascript
export const HelloWorld = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
```
- Now we can cleanup the project and removed the obsolet files.

## 3. Styled Components
In this step we will add some styled components. Styled Components in React is a library that allows developers to write CSS-in-JS by creating and attaching styles directly to components, enhancing modularity and reusability. Something similar can be achieve by using a Design System. Styled Components and a Design System are not mutually exclusive but serve different purposes: A Design System is a broader collection of design principles, guidelines, and reusable components that promote consistency and efficiency in UI development across an entire organization or project. An example for an Design System would be [Mantine](https://mantine.dev/).
- First we will add a new folder called `Style` to the project. In this folder we will create a file called `GlobalStyle.ts`. Here we can define a global style for our application.
- Before we continue implementing this we need to install the styled-components package. To do so we execute `npm install styled-components` and `npm i @types/styled-components`.
- Now we can define our `GlobalStyle`, after that we need to import it in `index.tsx`.
- We can now add two additional styled components `PageStyle.ts` and `TextStyle.ts`.
- Now we can replace the html tags in the `HelloWorld` component with the styled components.

## 4. Routing
Now we will add a second page to our react appilication.
- To start we first need to install `npm install react-router-dom`. This package provides the routing functionality for our application.
- Now we restructure the project a bit. We add two new folders "Pages" and "Components".
- In the "pages" folder we add a new file called "Home.tsx". Most of the code we can copy here from the "App.tsx" file. After that we create an "About.tsx" file in the "pages" folder.
- We can now rewrite the "App.tsx" file to use the routing functionality and the Navigation. The code should look like this:
```javascript
function App() {
  return (
    <BrowserRouter>
      <NavigationStyle.Container>
        <NavLink to="/">
          <NavigationStyle.Link>Home</NavigationStyle.Link>
        </NavLink>
        <NavLink to="/about">
          <NavigationStyle.Link>About</NavigationStyle.Link>
        </NavLink>
      </NavigationStyle.Container>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```
- In the code above we see that I've used a `NavigationStyle` component. This is the styled component for the navigation, I've already added this here `Style/Components/NavigationStyle.ts`.
- Last but not least I've moved the `HelloWorld` component to the "Components" folder. And duplicated it and renamed that to `AboutWidget.tsx`. This component we can use in the `About.tsx` page, instead if the `HelloWorld` component.

## 5. Context
In this step we will add a context to our application. A context provides a way to pass data through the component tree without having to pass props down manually at every level. In our example we will use the context to store and fetch blog posts.
- First we will add a new folder called `Models` to the project. In this folder we will create a file called `BlogPost.ts`. Here we can define our blog post model.
- Then we add a new folder called `Context` to the project. In this folder we will create a file called `BlogDataContext.tsx`. Here we can define our context.
- In the `public` folder we add a file called `posts.json`, this file contains our fake blog posts.
- In the `Home` component we will add a button to create a new blog post. This button will call a function in the `BlogDataContext` to create a new blog post.
- The last step will be to add a new Component called `BlogEntry.tsx` to the `Components` folder. This component will be used to display a single blog post. In the `Home` component we will show one `BlogEntry.tsx` for each blog post.