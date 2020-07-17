import React from 'react'
import styles from './ListItem.module.css';
import noteStyles from './NoteListItem.module.css';
import {INote} from "../../interfaces/INote";
import moment from "moment";
import {Link} from "react-router-dom";

interface IProps {
    note: INote
}

const NoteListItem = (props: IProps) => {

    const { note } = props;

    return (
        <Link to={`/notes/${note.id}`} className={`${styles.listItem} ${noteStyles.noteItem}`}>
            <span className={styles.leftContainer}>
                <h4>{ note.title }</h4>
                <p>{ note.description }</p>
            </span>
            <p className={styles.rightContainer}> { moment(note.updatedAt).format('DD/MM')} </p>
        </Link>
    );
};

export default NoteListItem;
