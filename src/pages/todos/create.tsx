import React, {useEffect, useState} from 'react';
import styles from "../notes/create.module.css";
import TextInput from "../../components/inputs/TextInput";
import Button from "../../components/Button";
import {connect} from "react-redux";
import { withRouter, useHistory } from 'react-router-dom';
import {createTodo} from "../../redux/actions/todoActions";
import {setHeaderTitle, setPreviousRoute} from "../../redux/actions/uiStateActions";


interface IProps {
    createTodo: (description: string) => void;
    setPreviousRoute: (route: string) => void;
    setHeaderTitle: (title: string) => void;
}

const Create = (props: IProps) => {

    const { createTodo, setHeaderTitle, setPreviousRoute } = props;

    const [description, setDescription] = useState<string>('');

    const history = useHistory();


    useEffect(() => {
        setPreviousRoute('/todos');
        setHeaderTitle('Create Todo');
    }, [setPreviousRoute, setHeaderTitle]);

    return (
        <div className={styles.formContainer}>
            <TextInput
                value={description}
                onChange={setDescription}
                label={'Title'}
            />
            <Button onClick={() => {
                createTodo(description);
                history.push('/todos')
            }}>
                Create Note
            </Button>
        </div>
    );
};


export default withRouter(connect(
    null,
    {
        createTodo,
        setPreviousRoute,
        setHeaderTitle
    }
)(Create));
