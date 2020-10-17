# Work In Progress...

## Usage:

Pass in the props of faqs, containing an array of objects, with the keys of 'question' and 'answer'

```jsx
import FaqComponent from "react-faq-toggler";
function App() {
    const faqs = [
        {
            question: "You what?",
            answer: "Meh",
        },
        { question: "Hello there?", answer: "Boo" },
        { question: "A third question, I have", answer: "Well, do you now!" },
    ];
    return (
        <div className="App">
            <Router>
                <NavBar />
                <h1>Find A Coding Course</h1>
                <div className="faq-cont">
                    <FaqComponent
                        faqs={faqs}
                        styles={myCustomStyles}
                        qClassName="my-own-class"
                        aClassName="another-class"
                        showClassName="show"
                    />
                </div>
            </Router>
        </div>
    );
}
```

## Default Width

By default, the FaqComponent will have a width of 100% of its parent container.

## Required Stylesheet

You can pass your own classNames into the FaqComponent, using the optional props of qClassName for question styling, and aClassName for answer styling. and style with CSS.
Or, if you'd prefer to use inline React styling, pass in props of styles, like so:

````jsx
const myCustomStyles = {
        question: {
            width: "100%",
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
            padding: "1em",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.25em",
            margin: "0.25em 0",
        },
        answer: {
            width: "100%",
            color: "black",
            borderRadius: "5px",
            padding: "0 1em",
            textAlign: "left",
            fontSize: "1.25em",
            margin: "0.5em 0",
        },
    }
    ```
````

showClassName props gives the name of the toggler class on the answer. Default style is as follows:

```css
.show {
    display: block;
    animation: slide 0.2s;
}

.faq-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5em;
}

.rotate-forwards {
    transform: rotate(180deg);
    transition: 0.2s transform;
}

.rotate-back {
    transform: rotate(0deg);
    transition: 0.2s transform;
}

@keyframes slide {
    0% {
        opacity: 0;
        transform: translateY(-1.75em);
    }
    100% {
        opacity: 1;
    }
}
```
