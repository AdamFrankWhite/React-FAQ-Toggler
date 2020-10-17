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
        },
        answer: {
            width: "100%",
            color: "black",
            borderRadius: "5px",
            padding: "1em",
            textAlign: "left",
            fontSize: "1.25em",
        },
    },
};

const FaqComponent = (props) => {
    const [rotate, setRotate] = useState({});
    const clickHandler = (current) => {
        current.classList.toggle("show");
    };

    const styles = props.styles || {};

    return (
        <div className="faq-cont">
            {props.faqs.map((faq, i) => {
                let current = null;
                return (
                    <div>
                        <p
                            style={styles.question}
                            className="question"
                            onClick={() => {
                                clickHandler(current);
                                setRotate({ ...rotate, [i]: !rotate[i] });
                            }}
                        >
                            {faq.question}
                            <FontAwesomeIcon
                                icon={faChevronCircleDown}
                                size="l"
                                className={
                                    rotate[i]
                                        ? "rotate-forwards"
                                        : "rotate-back"
                                }
                            />
                        </p>
                        <p
                            ref={(ref) => (current = ref)}
                            style={styles.answer}
                            className="answer"
                        >
                            {faq.answer}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

FaqComponent.propTypes = propTypes;
FaqComponent.defaultProps = defaultProps;

export default FaqComponent;
