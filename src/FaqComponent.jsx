import React, { useState } from "react";
import PropTypes from "prop-types";
const propTypes = {
    faqs: PropTypes.array.isRequired,
};

const FaqComponent = (props) => {
    //Set toggle state for each FAQ
    const [toggle, setToggle] = useState({});

    return (
        <div>
            {props.faqs && props.faqs.map((faq, i) => {
                return (
                    <div>
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
                            <span
                                className={
                                    toggle[i]
                                        ? "faq-rotate-forwards"
                                        : "faq-rotate-back"
                                }
                            >&gt;</span>
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
                    </div>
                );
            })}
        </div>
    );
};

FaqComponent.propTypes = propTypes;

export default FaqComponent;
