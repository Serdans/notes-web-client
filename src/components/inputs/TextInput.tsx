import React from 'react';
import styles from './TextInput.module.css';

interface IProps {
    value?: string;
    label?: string;
    onChange: (text: string) => void;
}

const TextInput = (props: IProps) => {

    const { value, label, onChange } = props;

    return (
        <label className={styles.label}>
            { label }
            <input
                value={value}
                className={styles.textInput}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />

        </label>

    );
};

export default TextInput;
