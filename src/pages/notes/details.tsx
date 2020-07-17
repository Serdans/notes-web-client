import React, {useEffect, useState} from 'react';
import styles from "./create.module.css";
import TextInput from "../../components/inputs/TextInput";
import TextAreaInput from "../../components/inputs/TextAreaInput";
import Button from "../../components/Button";
import {connect} from "react-redux";
import {IRootState} from "../../redux/interfaces/IRootState";
import {INote} from "../../interfaces/INote";
import {getNoteById} from "../../redux/selectors/noteSelectors";
import {deleteNote, updateNote} from "../../redux/actions/noteActions";
import {setHeaderTitle, setPreviousRoute} from "../../redux/actions/uiStateActions";
import {withRouter, RouteComponentProps, useHistory} from 'react-router-dom';

interface IProps extends IStateProps {
    updateNote: (id: string, note: INote) => void;
    deleteNote: (id: string) => void;
    setHeaderTitle: (title: string) => void;
    setPreviousRoute: (route: string) => void;
}

interface IStateProps {
    note: INote;
}

const Details = (props: IProps) => {
    const { note, updateNote, deleteNote, setHeaderTitle, setPreviousRoute } = props;

    useEffect(() => {
        setNoteState(note);
    }, [note]);

    const history = useHistory();

    useEffect(() => {
        setPreviousRoute('/notes');
        setHeaderTitle('Edit Note');
    }, [setPreviousRoute, setHeaderTitle]);

    const [noteState, setNoteState] = useState<INote>(note);

    return (
        <div className={styles.formContainer}>
            <TextInput
                value={noteState.title}
                onChange={(text) => {
                    setNoteState({
                        ...noteState,
                        title: text
                    });
                }}
                label={'Title'}
            />
            <TextAreaInput
                value={noteState.description}
                onChange={(text) => {
                    setNoteState({
                        ...noteState,
                        description: text
                    });
                }}
                label={'Description'}
            />
            <Button onClick={() => {
                updateNote(note.id, noteState);
                history.push('/notes')
            }}>
                Save Note
            </Button>
            <Button theme='DANGER' onClick={() => {
                deleteNote(note.id);
                history.push('/notes')
            }}>
                Delete Note
            </Button>
        </div>
    );
};

const mapStateToProps = (state: IRootState, ownProps: IProps & RouteComponentProps<{ id: string }>): IStateProps => {

    return {
        note: getNoteById(state, ownProps.match.params.id)
    }
};




export default withRouter(connect(
    mapStateToProps,
    {
        updateNote,
        deleteNote,
        setPreviousRoute,
        setHeaderTitle
    }
)(Details));
