import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronCircleDown} from "@fortawesome/free-solid-svg-icons/faChevronCircleDown";
const propTypes = {
    faqs: PropTypes.array.isRequired,
};

const FaqComponent = (props) => {
    //Set toggle state for each FAQ
    const [toggle, setToggle] = useState({});

    return (
        <React.Fragment>
            {props.faqs && props.faqs.map((faq, i) => {
                return (
                    <React.Fragment>
                        {/* Question */}
                        <p
                            className="faq-question-style"
                            onClick={() => {
                                //Set toggle state for each FAQ, merging new and prev state
                                setToggle({ ...toggle, [i]: !toggle[i] });
                            }}
                        >
                            {faq.question}
                            {/* Icon */}
                            <FontAwesomeIcon
                                icon={
                                    props.icon
                                        ? props.icon
                                        : faChevronCircleDown
                                }
                                className={
                                    toggle[i]
                                        ? "faq-rotate-forwards"
                                        : "faq-rotate-back"
                                }
                            />
                        </p>
                        {/* Answer */}
                        <p
                            className={
                                toggle[i]
                                    ? "faq-answer-style faq-show-animation"
                                    : "faq-answer-style"
                            }
                        >
                            {faq.answer}
                        </p>
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};

FaqComponent.propTypes = propTypes;

export default FaqComponent;
