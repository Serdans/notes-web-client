import React from 'react';
import SeriesListItem from "./SeriesListItem";
import {ISeries} from "../../../interfaces/ISeries";
import FloatingActionButton from "../../FloatingActionButton";
import { Link } from 'react-router-dom';
import EmptyListScreen from "../EmptyListScreen";
import {IRootState} from "../../../redux/interfaces/IRootState";
import {getAllSeries} from "../../../redux/selectors/seriesSelectors";
import {connect} from "react-redux";

interface IProps {
    series: Array<ISeries>;
}

const SeriesList = (props: IProps) => {

    const { series } = props;

    const tempSerie: ISeries = {
        id: 'wew',
        updatedAt: '08-03-2020',
        currentEpisode: 2,
        totalEpisodes: 32,
        name: 'God of Highschool'
    };

    const renderSeries = (): JSX.Element => {
        if (series.length > 0) {
            return (
                <>
                    { series.map((s) => <SeriesListItem key={s.id} serie={s} />)}
                    <Link to={'/series/create'}>
                        <FloatingActionButton />
                    </Link>
                </>
            )
        }
        return (
            <EmptyListScreen
                iconClassName={'fa fa-film'}
                text={'You have no series yet.'}
                buttonText={'Add Series'}
                href={'/series/create'}
            />
        )
    };

    return (
        <div>
            { renderSeries() }
        </div>
    );
};

const mapStateToProps = (state: IRootState): IProps => {
    return {
        series: getAllSeries(state)
    }
};

export default connect(
    mapStateToProps
)(SeriesList);
