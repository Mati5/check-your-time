import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createTimer,
         getAllTimer,
         updateTimer,
         deleteTimer, 
         setSelectedTimer,
         createDaySession,  
         updateDaySession, 
         clearTimer } from '../../store/Timer/actions';
import TimerList from '../../components/TimerList/index';
import ManageTimerForm from '../../components/ManageTimerForm/index';
import Modal from '../../components/Modal/index';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import { TimerStyle, FabFixed } from './style';

const Timer = ({ timerList, 
                 getAllTimer, 
                 createTimer, 
                 updateTimer, 
                 deleteTimer, 
                 selectedTimer, 
                 setSelectedTimer, 
                 createDaySession, 
                 updateDaySession,  
                 clearTimer }) => {
    const [displayAddTimerModal, setDisplayAddTimerModal] = useState(false);
    const [displayEditTimerModal, setDisplayEditTimerModal] = useState(false);

    useEffect(() => {
        getAllTimer();
        
        return () => {
            clearTimer();
        }
    }, [getAllTimer, clearTimer]);

    const setDisplayAddTimerModalHandler = (display) => {
        setDisplayAddTimerModal(display);
    };
    
    const timerChangeHandler = (action, data) => {
        switch(action) {
            case 'newDaySession':
                createDaySession(data);
                break;
            case 'updateDaySession':
                updateDaySession(data);
                break;
            case 'delete':
                deleteTimer(data);
                break;
            default:
                return null;
        }  
    }

    const addTimerHandler = (timer) => {
        createTimer(timer);
        setDisplayAddTimerModalHandler(false);
    }

    const displayEditTimerModalHandler = (timer) => {
        setDisplayEditTimerModal(true);
        setSelectedTimer(timer); 
    }

    const closeEditTimerModal = () => {
        setDisplayEditTimerModal(false);
        setSelectedTimer(null);
    }

    const updateTimerHandler = (updatedTimer) => {
        updatedTimer.id = selectedTimer.id;
        updateTimer(updatedTimer);
        closeEditTimerModal();
    }

    return(
        <React.Fragment>
            <Tooltip title="Add new" aria-label="add">
                <FabFixed color="secondary" onClick={() => setDisplayAddTimerModalHandler(true)}>
                    <AddIcon />
                </FabFixed>
            </Tooltip>

            <TimerStyle>
                <TimerList data={timerList} 
                           onTimerChange={timerChangeHandler}
                           displayEditTimerModal={displayEditTimerModalHandler} />
            </TimerStyle>

            <Modal open={displayAddTimerModal}
                   onClose={() => setDisplayAddTimerModalHandler(false)}  
                   data={{title: "Manage timer"}}>
                <ManageTimerForm action={addTimerHandler}  />
            </Modal>
            <Modal open={displayEditTimerModal} onClose={() => closeEditTimerModal()} data={{title: "Edit timer"}}>
                <ManageTimerForm action={updateTimerHandler} selectedTimer={selectedTimer}  />
            </Modal>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    timerList: state.timerReducer.timerList,
    selectedTimer: state.timerReducer.selectedTimer
});

const mapDispatchToProps = {
    getAllTimer,
    createTimer,
    updateTimer,
    deleteTimer,
    setSelectedTimer,
    createDaySession,
    updateDaySession,
    clearTimer
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);