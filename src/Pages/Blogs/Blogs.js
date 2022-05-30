import React from 'react';

const Blogs = () => {
    return (
        <div style={{padding:'50px'}}>
            <div>
                <h2 style={{fontWeight:'bold'}}>Q1.How will you improve the performance of a React Application?</h2>
                <p>Ans: Keeping component state local where necessary.
                Memoizing React components to prevent unnecessary re-renders.
                Code-splitting in React using dynamic import()
                Windowing or list virtualization in React.
                Lazy loading images in React.</p>
            </div>
            <div>
                <h2 style={{fontWeight:'bold'}}>Q2. What are the different ways to manage a state in a React application?</h2>
                <ul> Ans: Different ways to manage state in React are:
                    <li>Local state.</li>
                    <li>Global state.</li>
                    <li>Server state.</li>
                    <li>URL state.</li>
                </ul>
            </div>
            <div>
                <h2 style={{fontWeight:'bold'}}>Q3.How does prototypical inheritance work?</h2>
                <p>Ans:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div>
                <h2 style={{fontWeight:'bold'}}>Q4.What is a unit test? Why should write unit tests?</h2>
                <p>Ans: Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
            </div>
            <div>
                <h2 style={{fontWeight:'bold'}}>Q5.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p>Ans:When you directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.</p>
            </div>
        </div>
    );
};

export default Blogs;