import React from 'react';
import textAreaStyles from './TextAreaInput.module.css';
import styles from './Input.module.css';

interface IProps {
    value?: string;
    label?: string;
    onChange: (text: string) => void;
}

const TextAreaInput = (props: IProps) => {

    const { value, label, onChange } = props;

    return (
        <label className={`${styles.label} ${styles.input}`}>
            {label}
            <textarea
                value={value}
                className={`${textAreaStyles.textarea} ${styles.input}`}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
        </label>
    );
};

export default TextAreaInput;
