import React, {useEffect, useState} from 'react';
import styles from "../notes/create.module.css";
import TextInput from "../../components/inputs/TextInput";
import NumberInput from "../../components/inputs/NumberInput";
import Button from "../../components/Button";
import {ISeries} from "../../interfaces/ISeries";
import {deleteSeries, updateSeries} from "../../redux/actions/seriesActions";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter, useHistory} from 'react-router-dom';
import {IRootState} from "../../redux/interfaces/IRootState";
import {getSeriesById} from "../../redux/selectors/seriesSelectors";
import {setHeaderTitle, setPreviousRoute} from "../../redux/actions/uiStateActions";

interface IProps extends IStateProps {
    updateSeries: (id: string, name: string, totalEpisodes: number) => void;
    deleteSeries: (id: string) => void;
    setPreviousRoute: (route: string) => void;
    setHeaderTitle: (title: string) => void;
}

interface IStateProps {
    series: ISeries;
}

const Details = (props: IProps) => {

    const { updateSeries, deleteSeries, setPreviousRoute, setHeaderTitle } = props;

    const [series, setSeries] = useState<ISeries>(props.series);

    const history = useHistory();

    useEffect(() => {
        setPreviousRoute('/series');
        setHeaderTitle('Edit Series');
    }, [setPreviousRoute, setHeaderTitle]);

    return (
        <div className={styles.formContainer}>
            <TextInput
                value={series.name}
                onChange={(name: string) => {
                    setSeries({
                        ...series,
                        name
                    })
                }}
                label={'Name'}
            />

            <NumberInput
                value={series.totalEpisodes}
                onChange={(totalEpisodes: number) => {
                    setSeries({
                        ...series,
                        totalEpisodes
                    })
                }}
                label={'Total Episodes'}
            />

            <Button onClick={() => {
                updateSeries(series.id, series.name, series.totalEpisodes);
                history.push('/series');
            }}>
                Update Series
            </Button>

            <Button theme={'DANGER'} onClick={() => {
                deleteSeries(series.id);
                history.push('/series');
            }}>
                Delete Series
            </Button>
        </div>
    );
};

const mapStateToProps = (state: IRootState, ownProps: IProps & RouteComponentProps<{ id: string }>): IStateProps => {
    return {
        series: getSeriesById(state, ownProps.match.params.id)
    }
};

export default withRouter(connect(
    mapStateToProps,
    {
        setPreviousRoute,
        setHeaderTitle,
        updateSeries,
        deleteSeries
    }
)(Details));
