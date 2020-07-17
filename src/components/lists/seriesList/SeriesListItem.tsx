import React from 'react';
import {Link} from "react-router-dom";
import {ISeries} from "../../../interfaces/ISeries";
import styles from '../ListItem.module.css';
import seriesStyles from './SeriesListItem.module.css';
import moment from "moment";
import Button from "../../Button";
import {connect} from "react-redux";
import {decreaseEpisodeCount, increaseEpisodeCount} from "../../../redux/actions/seriesActions";

interface IProps {
    series: ISeries;
    increaseEpisodeCount: (id: string) => void;
    decreaseEpisodeCount: (id: string) => void;
}

const SeriesListItem = (props: IProps) => {

    const { series, increaseEpisodeCount, decreaseEpisodeCount } = props;

    return (
        <div className={`${styles.listItem}`}>
            <Link to={`/series/${series.id}`} className={`${styles.leftContainer} ${styles.regularItem}`}>
                <h4>{ series.name }</h4>
                { `${series.currentEpisode} / ${series.totalEpisodes} episodes watched.`}
            </Link>

            <span className={styles.rightContainer}>
                <span className={seriesStyles.buttonContainer}>
                    <Button onClick={() => decreaseEpisodeCount(series.id)}>
                        <i className='fa fa-minus' />
                    </Button>

                    <Button onClick={() => increaseEpisodeCount(series.id)}>
                    <i className='fa fa-plus' />
                    </Button>
                </span>
                <p>{ moment(series.updatedAt).format('DD/MM')}</p>
            </span>
        </div>
    );
};

export default connect(
    null,
    {
        increaseEpisodeCount,
        decreaseEpisodeCount
    }
)(SeriesListItem);
