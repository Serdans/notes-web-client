import React from 'react';
import styles from './TextAreaInput.module.css';

interface IProps {
    value?: string;
    label?: string;
    onChange: (text: string) => void;
}

const TextAreaInput = (props: IProps) => {

    const { value, label, onChange } = props;

    return (
        <div className={styles.inputGroup}>
            <label className={styles.label}>
                {label}
            </label>
            <textarea
                value={value}
                className={styles.textarea}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
        </div>
    );
};

export default TextAreaInput;
