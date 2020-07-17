import React from 'react';
import styles from './Input.module.css';

interface IProps {
    value?: number;
    label?: string;
    onChange: (number: number) => void;
}

const NumberInput = (props: IProps) => {

    const { value, label, onChange } = props;

    return (
        <label className={styles.label}>
            { label }
            <input
                className={`${styles.singleLineInput} ${styles.input}`}
                value={value}
                min={0  }
                type='number'
                onChange={(e) => {
                    onChange(parseInt(e.target.value));
                }}/>
        </label>
    );
};

export default NumberInput;
