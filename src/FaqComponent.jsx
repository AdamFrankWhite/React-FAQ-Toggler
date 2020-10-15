import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    styles: PropTypes.object,
};

const defaultProps = {
    styles: {
        label: {
            fontFamily: "Comic Sans MS",
            color: "green",
        },
        input: {
            background: "#ddd",
            border: "1px solid red",
        },
    },
};

class FaqComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleAnswer(num) {
       
            let questions = document.querySelectorAll(".question");
            //Prevent double-click highlight
            questions[num].addEventListener(
                "mousedown",
                function (e) {
                    e.preventDefault();
                },
                false
            );
    
            let answers = document.querySelectorAll(".answer");
            let arrows = document.querySelectorAll(".question i");
            answers[num].classList.toggle("show");
            arrows[num].classList.toggle("flip");
        
    }
    render() {
        const styles = this.props.styles || {};

        return (
            <div>
               
                {this.props.faqs.map((faq, index) => {
                            return (
                                <div>
                                    <p
                                    style={styles.question}
                                        className="question"
                                        onClick={() => {
                                            toggleAnswer(index);
                                        }}
                                    >
                                        {faq.question}
                                        <i class="fa fa-chevron-circle-down"></i>
                                    </p>
                                    <p style={styles.answer} className="answer">{faq.answer}</p>
                                </div>
                            );
                        })}
            </div>
        );
    }
}

FaqComponent.propTypes = propTypes;
FaqComponent.defaultProps = defaultProps;

export default FaqComponent;
