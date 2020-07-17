import React, {useEffect, useState} from 'react';
import Layout from "../../components/layout/Layout";
import {connect} from "react-redux";
import {setHeaderTitle, setPreviousRoute} from "../../redux/actions/uiStateActions";
import TextInput from "../../components/inputs/TextInput";
import styles from './create.module.css';
import TextAreaInput from "../../components/inputs/TextAreaInput";
import Button from "../../components/Button";
import {createNote} from "../../redux/actions/noteActions";
import { useHistory } from 'react-router-dom';

interface IProps {
    setPreviousRoute: (route: string) => void;
    setHeaderTitle: (title: string) => void;
    createNote: (title: string, description: string) => void;
}

const Create = (props: IProps) => {

    const { setPreviousRoute, setHeaderTitle, createNote } = props;

    const history = useHistory();

    useEffect(() => {
        setPreviousRoute('/notes');
        setHeaderTitle('Create Note');
    }, [setPreviousRoute, setHeaderTitle]);

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    return (
        <div className={styles.formContainer}>
            <TextInput
                onChange={setTitle}
                label={'Title'}
            />
            <TextAreaInput
                onChange={setDescription}
                label={'Description'}
            />
            <Button onClick={() => {
                createNote(title, description);
                history.push('/notes');
            }}>
                Create Note
            </Button>
        </div>
    );
};

export default connect(
    null,
    {
        setPreviousRoute,
        setHeaderTitle,
        createNote
    }
)(Create);
