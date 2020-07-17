import React from 'react';
import {Link} from "react-router-dom";
import {ISeries} from "../../../interfaces/ISeries";
import styles from '../ListItem.module.css';
import seriesStyles from './SeriesListItem.module.css';
import moment from "moment";
import Button from "../../Button";

interface IProps {
    serie: ISeries;
}

const SeriesListItem = (props: IProps) => {

    const { serie } = props;

    return (
        <div className={`${styles.listItem}`}>
            <Link to={`/series/${serie.id}`} className={`${styles.leftContainer} ${styles.regularItem}`}>
                <h4>{ serie.name }</h4>
                { `${serie.currentEpisode} / ${serie.totalEpisodes} episodes watched.`}
            </Link>

            <span className={styles.rightContainer}>
                <span className={seriesStyles.buttonContainer}>
                    <Button>
                        <i className='fa fa-minus' />
                    </Button>

                    <Button>
                    <i className='fa fa-plus' />
                    </Button>
                </span>
                <p>{ moment(serie.updatedAt).format('DD/MM')}</p>
            </span>
        </div>
    );
};

export default SeriesListItem;
