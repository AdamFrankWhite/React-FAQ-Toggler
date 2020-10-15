import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    styles: PropTypes.object,
};

const defaultProps = {
    styles: {
        question: {
            width: "100%", 
            backgroundColor: "red", 
            color: "white",
            borderRadius: "5px",
            padding: "1em"
        }, 
        answer: {
            width: "100%", 
            backgroundColor: "red", 
            color: "white",
            borderRadius: "5px",
            padding: "1em"
        }
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
        const styles = this.props.styles || 
        {
           
        }
        

        return (
            <div>
               
                {this.props.faqs.map((faq, index) => {
                            return (
                                <div>
                                    <p
                                    style={styles.question}
                                        className="question"
                                        onClick={() => {
                                            this.toggleAnswer(index);
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
