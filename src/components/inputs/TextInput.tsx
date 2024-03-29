import React from 'react';
import styles from './Input.module.css';

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
                className={`${styles.singleLineInput} ${styles.input}`}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
        </label>

    );
};

export default TextInput;
