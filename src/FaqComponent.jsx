import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
const propTypes = {
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
    },
};

const FaqComponent = (props) => {
    const [rotate, setRotate] = useState({});
    const clickHandler = (current) => {
        current.classList.toggle(props.showClassName || "show");
    };

    //Merge default style with custom styles, keeping default style props
    const questionStyles = {
        ...defaultProps.styles.question,
        ...props.styles.question,
    };
    const answerStyles = {
        ...defaultProps.styles.answer,
        ...props.styles.answer,
    };

    return (
        <div className="faq-cont">
            {props.faqs.map((faq, i) => {
                let current = null;
                return (
                    <>
                        <p
                            style={questionStyles}
                            className={props.qClassName ? props.qClassName : ""}
                            onClick={() => {
                                clickHandler(current);
                                setRotate({ ...rotate, [i]: !rotate[i] });
                            }}
                        >
                            {faq.question}
                            <FontAwesomeIcon
                                icon={
                                    props.icon
                                        ? props.icon
                                        : faChevronCircleDown
                                }
                                className={
                                    rotate[i]
                                        ? "rotate-forwards"
                                        : "rotate-back"
                                }
                            />
                        </p>
                        <p
                            ref={(ref) => (current = ref)}
                            style={answerStyles}
                            className={props.aClassName ? props.aClassName : ""}
                        >
                            {faq.answer}
                        </p>
                    </>
                );
            })}
        </div>
    );
};

FaqComponent.propTypes = propTypes;
FaqComponent.defaultProps = defaultProps;

export default FaqComponent;
