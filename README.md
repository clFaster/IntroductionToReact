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
