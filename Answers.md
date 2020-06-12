# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a user interface component library built by the Facebook team to help solve major problems when dealing with complex state. It does one thing really well: render UI. It is scalable, resusable, and uses JSX language. One of the key aspects of React is that you can create components to quickly and efficiently build user interfaces. React streamlines how data is stored and handled, using state and props. I have been amazed at the apps we have created in Week One of learning React. The Insta Clone project created our own version of Instagram, with changing states (the number of likes), comments that updated (again, state), and a search bar. This was all accomplished using React components with state and props.

1. Describe component state.

Component state is what allows you to create components that are dynamic (changing) and interactive. If a component needs to alter one of its attributes at some point in time, that attribute should be part of its state. For example, the number of likes on a Facebook post changes over time, so that number of likes is a state (what currently appears on the front end is what the state currently is). State stores information that changes. 

1. Describe props.

Props, short for properties, are read-only. We never make changes to props data, but we can pass props info down inside one component to another. They are an object with a key:value pair. Props are a component's configuration, its "options". Props are received from above and immutable as far as the component receiving them is converned. 

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is anything that affects something outside of scope of the function being executed. Some examples of side effects are: fetching data from an API, timers, logging, manually manipulating the DOM. 
You sync effects in a React component to changes of certain state or props by use of the Effect Hook and dependency array. The Effect Hook tells React that a component needs to run, or execute, some side effect. The Effect Hook takes in 2 parameters, the callback function where the side effect is run, and then the dependency array (which is optional) that makes sure the effect will fire only once. When we sync the effect with a dependency array, we make sure that it only fires when and only when the dependency array changes.