# React FAQ Toggler Component

Simple FAQ component with individual question/answer toggle, with smooth icon rotate on click.

## Usage:

Pass in the props of faqs, containing an array of objects, with the keys of 'question' and 'answer':

```jsx
import FaqComponent from "react-faq-toggler";
function App() {
    const data = [
        { question: "Hello there?", answer: "Boo" },
        { question: "You what?", answer: "Meh" },
        { question: "A third question, I have", answer: "Well, do you now!" },
    ];
    return (
        <div className="App">
            <h1>My Super App</h1>
            <div className="faq-cont">
                <FaqComponent faqs={data} />
            </div>
        </div>
    );
}
```

## Default Width

By default, the FaqComponent will have a width of 100% of its parent container.

## Styling

Use the following class names to style the question/answer component:

```html
<p class="faq-question-style"></p>
<p class="faq-answer-style"></p>
```

Recommended default styles:

```css
.faq-question-style {
    width: 100%;
    background-color: rgb(255, 102, 0);
    color: white;
    border-radius: 5px;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25em;
    margin: 0.25em 0;
}

.faq-question-style:hover {
    cursor: pointer;
}
.faq-cont {
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5em;
    -webkit-user-select: none; /* Chrome/Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.faq-answer-style {
    display: none;
    font-weight: 300;
    width: 100%;
    color: black;
    border-radius: 5px;
    padding: 0 1em;
    text-align: left;
    font-size: 1.25em;
    margin: 0.5em 0;
}

.faq-show-animation {
    display: block;
    height: fit-content;
    animation: faq-answer-slide 0.2s;
}

.faq-rotate-forwards {
    transform: rotate(180deg);
    transition: 0.2s transform;
}

.faq-rotate-back {
    transform: rotate(0deg);
    transition: 0.2s transform;
}
@keyframes faq-answer-slide {
    0% {
        opacity: 0;
        height: 0;
    }

    25% {
        height: calc(fit-content/4);
    }

    50% {
        height: calc(fit-content/2);
    }

    75% {
        height: calc((fit-content/4) * 3);
    }

    100% {
        opacity: 1;
        height: fit-content;
    }
}
```

## Custom Icon

Uses FontAwesome icons for responsiveness - default icon is a chevron, but you can pass in your own FontAwesome icon by importing and passing it through the 'icon' props:

```jsx
import FaqComponent from "react-faq-toggler";
import { SomeOtherIcon } from "@fortawesome/free-solid-svg-icons";
function App() {
    const data = [
        { question: "Hello there?", answer: "Boo" },
        { question: "You what?", answer: "Meh" },
        { question: "A third question, I have", answer: "Well, do you now!" },
    ];
    return (
        <div className="App">
            <h1>My Super App</h1>
            <div className="faq-cont">
                <FaqComponent faqs={data} icon={someOtherIcon} />
            </div>
        </div>
    );
}
```

## Screenshot

![screenshot](https://user-images.githubusercontent.com/43864381/96481133-0b785680-1233-11eb-98c3-9983abc9dd1d.png)
