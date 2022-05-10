import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './index.css';
import 'modern-normalize/modern-normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import { render } from "@testing-library/react";
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { PropTypes } from "prop-types";
// import App from "./App";

// * createElement
// const el = React.createElement("div", { "data-attribute": 10 }, "1", "2", "3");
// // console.log(el);

// // el.props.children.forEach((children) => {
// //   console.log(children);
// // });

// const spanHello = React.createElement("span", { children: "Hello" });
// const spanSpace = React.createElement("span", { children: " " });
// const spanWorld = React.createElement("span", { children: "World" });
// const spanWrapper = React.createElement("div", {
//   children: [spanHello, spanSpace, spanWorld],
// });
// // ReactDOM.render(spanWrapper, document.querySelector("#root"));

// * v1
// const root = createRoot(document.querySelector("#root"));
// root.render(spanWrapper);

// * v2 identical
// const container = document.querySelector("#root");
// const root = createRoot(container);
// root.render(spanWrapper);

// * card
// const imageUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const price = 10.99;

// const product = (
//   <div>
//     <img src={imageUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// root.render(product);

// * JSX Fragment
// const post = (
//   <>
//     <h1>Post Header</h1>
//     <p>text</p>
//   </>
// );
// root.render(post);

// * render ProductCard
// const ProductCard = (props) => (
//   <div>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     />
//     <h2>Tacos With Lime</h2>
//     <p>Price: 10.99$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// root.render(<ProductCard />);

// const Product = ({ imgUrl, name, price }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// * props render
// const App = () => (
//   <div>
//     <h1>Best selling products</h1>
//     <Product
//       imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       name="Tacos With Lime"
//       price={10.99}
//     />
//     <Product
//       imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//       name="Fries and Burger"
//       price={14.29}
//     />
//   </div>
// );
// root.render(<App />);

// * propTypes
// const Profile = ({ name, email, age }) => (
//   <div>
//     <p>Name: {name}</p>
//     <p>Email: {email}</p>
//     <p>Age: {age} </p>
//   </div>
// );

// const Panel = ({ title, children }) => (
//   <section>
//     <h2>{title}</h2>
//     {children}
//   </section>
// );

// Panel.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// Profile.propTypes = {
//   name: PropTypes.string,
//   email: PropTypes.string,
//   age: PropTypes.number,
// };

// root.render(
//   <>
//     <h1>Profile</h1>
//     <Panel title="Hello">
//       <Profile name="Roman" email="roman@gmail.com" age={22} />
//     </Panel>
//   </>
// );

// const Mailbox = ({ messages, unreadMessages }) => (
//   <>
//     <h1>Hello</h1>
//     <p>{messages}</p>
//     {unreadMessages.length > 0 && <p>You have {unreadMessages.length}</p>}
//   </>
// );

// const messagesList = ["hello", "sup", "hi"];

// const Mailbox = ({ messages, unreadMessages }) => (
//   <>
//     <h1>Inbox</h1>
//     <p>Total messages: {messages}</p>
//     {unreadMessages.length > 0 && (
//       <>
//         <p>You have {unreadMessages.length} unread messages</p>
//         <ul>Messages text</ul>
//         {unreadMessages.map((message) => (
//           <li>{message}</li>
//         ))}
//       </>
//     )}
//   </>
// );
// root.render(<Mailbox messages={25} unreadMessages={messagesList} />);

// * Lists and Keys
// const favoriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
//   { id: "id-4", name: "Redux in depth" },
// ];

// const Booklist = ({ books }) => (
//   <ul>
//     {books.map((book) => (
//       <li key={book.id}>{book.name}</li>
//     ))}
//   </ul>
// );

// root.render(<Booklist books={favoriteBooks} />);
