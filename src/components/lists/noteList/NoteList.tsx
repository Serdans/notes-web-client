import React from 'react';
import {INote} from "../../../interfaces/INote";
import { connect } from 'react-redux';
import NoteListItem from "./NoteListItem";
import {getAllNotes} from "../../../redux/selectors/noteSelectors";
import {IRootState} from "../../../redux/interfaces/IRootState";
import EmptyListScreen from "../EmptyListScreen";
import FloatingActionButton from "../../FloatingActionButton";
import {Link} from "react-router-dom";

interface IProps {
    notes: Array<INote>
}

const NoteList = (props: IProps) => {

    const { notes } = props;

    const renderNotes = (): JSX.Element => {
        if (notes.length > 0) {
            return (
                <>
                    { notes.map(note => <NoteListItem key={note.id} note={note} />) }
                    <Link to={'/notes/create'}>
                        <FloatingActionButton />
                    </Link>
                </>
            )
        }
        return (
            <EmptyListScreen
                iconClassName='fa fa-sticky-note-o'
                text='You have no notes yet.'
                buttonText='Add Note'
                href='/notes/create'
            />
        );
    };

    return (
        <div>
            { renderNotes() }
        </div>
    );
};


const mapStateToProps = (state: IRootState): IProps => {
    return {
        notes: getAllNotes(state)
    }
};

export default connect(
    mapStateToProps
)(NoteList);

