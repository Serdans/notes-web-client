import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {setHeaderTitle, setPreviousRoute} from "../../redux/actions/uiStateActions";
import TextInput from "../../components/inputs/TextInput";
import styles from '../notes/create.module.css';
import Button from "../../components/Button";
import { useHistory } from 'react-router-dom';
import {createSeries} from "../../redux/actions/seriesActions";
import NumberInput from "../../components/inputs/NumberInput";

interface IProps {
    setPreviousRoute: (route: string) => void;
    setHeaderTitle: (title: string) => void;
    createSeries: (title: string, totalEpisodes: number) => void;
}

const Create = (props: IProps) => {

    const { setPreviousRoute, setHeaderTitle, createSeries } = props;

    const history = useHistory();

    useEffect(() => {
        setPreviousRoute('/series');
        setHeaderTitle('Create Series');
    }, [setPreviousRoute, setHeaderTitle]);

    const [name, setName] = useState<string>('');
    const [totalEpisodes, setTotalEpisodes] = useState<number>(0);

    return (
        <div className={styles.formContainer}>
            <TextInput
                value={name}
                onChange={setName}
                label={'Name'}
            />

            <NumberInput
                value={totalEpisodes}
                onChange={setTotalEpisodes}
                label={'Total Episodes'}
            />

            <Button onClick={() => {
                createSeries(name, totalEpisodes);
                history.push('/series');
            }}>
                Create Series
            </Button>
        </div>
    );
};

export default connect(
    null,
    {
        setPreviousRoute,
        setHeaderTitle,
        createSeries
    }
)(Create);
