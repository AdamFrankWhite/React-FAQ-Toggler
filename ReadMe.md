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
                <FaqComponent faqs={faqs} />
            </Router>
        </div>
    );
}
```
