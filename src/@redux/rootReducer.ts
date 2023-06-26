import { combineReducers } from 'redux';

import { initialState } from './initialState';

import snacks from './snacks';
import statisticsUser from './statisticsUser';
import statisticsTopService from './statisticsTopService';
import statisticsLocationEvent from './statisticsLocationEvent';
import statisticsServiceProvider from './statisticsServiceProvider';
import auth from './auth';
import locationEvents from './locationEvents';
import buildings from './buildings';
import clients from './clients';
import regions from './regions';
import fmz from './fmz';
import serviceProviders from './serviceProviders';
import serviceCategories from './serviceCategories';
import softsServices from './softsServices';
import locationEventDetail from './locationEventDetail';
import scheduleMatrixes from './scheduleMatrixes';
import vendorAccount from './vendorAccountMgmt';
import employees from './employees';
import jobHistories from './jobHistories';
import dataExportHistories from './dataExportHistories';
import tagMgmt from './tagMgmt';
import supervisors from './supervisors';
import skipDate from './skipDateTemplate';
import slots from './slots';
import scheduleMatrix from './scheduleMatrix';
import notifications from './notifications';
import notification from './notification';
import notificationTypes from './notificationTypes';
import slotStatistics from './slotStatistics';
import notificationAnalytics from './notificationAnalytics';
import notificationAnalyticStatistics from './notificationAnalyticStatistics';
import supervisor from './supervisor';
import employee from './employee';
import appUsers from './appUsers';
import scheduleMatrixHistories from './scheduleMatrixHistories';

import { storage } from './localforage';

const { ...emptyInitState } = initialState;

const ExcludeActionTypes = ['@auth/SIGN_IN'];

// eslint-disable-next-line
const createAppReducer = (initialState: any) => {
    const appReducer = combineReducers({
        snacks,
        statisticsUser,
        statisticsServiceProvider,
        statisticsLocationEvent,
        statisticsTopService,
        auth,
        locationEvents,
        fmz,
        regions,
        buildings,
        clients,
        serviceProviders,
        serviceCategories,
        softsServices,
        locationEventDetail,
        scheduleMatrixes,
        vendorAccount,
        employees,
        employee,
        jobHistories,
        dataExportHistories,
        tagMgmt,
        skipDate,
        supervisors,
        supervisor,
        slots,
        scheduleMatrix,
        notifications,
        notification,
        notificationTypes,
        slotStatistics,
        notificationAnalytics,
        notificationAnalyticStatistics,
        appUsers,
        scheduleMatrixHistories,
    });

    // eslint-disable-next-line
    return (state = initialState, action: any) => {
        const nextState = appReducer(state, action);

        if (
            action.payload &&
            action.payload.status &&
            action.payload.status === 403 &&
            action.payload.redirect === true
        ) {
            window.location.replace('/');
        }

        if (
            action.type === '@auth/SIGN_OUT' ||
            (!ExcludeActionTypes.some((e) => action.type?.includes(e)) &&
                action.error &&
                (action.payload.status === 401 || action.payload?.response?.status === 401))
        ) {
            setTimeout(() => {
                window.location.replace('/login');
            }, 5000);
            storage?.clear();

            return {
                ...nextState,
                ...emptyInitState,
            };
        }

        return nextState;
    };
};

export default createAppReducer;
