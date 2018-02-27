/**
 * weijq
 */

import { call, put, takeEvery } from 'redux-saga/effects';
import { dataService } from '../../../utils/request';
import * as actMsg from '../../actions/msgTip';
import * as act from '../../actions/sysManage/sysLog';

function* queryData(action) {
    try {
        // 数据请求参数构造
        let param = {
            reqUrl: dataService.sysManageUrl.queryPlat,
            reqAuth: '',
            reqParam: action.payload
        };
        const response = yield call(dataService.postRequest, param);

        if (response) {
            if (response.data.ret === 0) {
                yield put(act.querySyslogFail());
            } else {
                yield put(act.querySyslogSuccess(response.data));
            }
        }

    } catch (error) {
        //处理异常
        yield put(actMsg.optFail(error.message));
    }
}

function* deleteData(action) {
    try {
        // 数据请求参数构造
        let param = {
            reqUrl: dataService.sysManageUrl.platSubmit,
            reqAuth: '',
            reqParam: action.payload
        };
        const response = yield call(dataService.postRequest, param);

        if (response) {
            if (response.data.ret === 0) {
                yield put(act.deleteSyslogFail());
            } else {
                yield put(act.deleteSyslogSuccess(response.data));
            }
        }

    } catch (error) {
        //处理异常
        yield put(actMsg.optFail(error.message));
    }
}

export default function* sysLogSaga() {
    yield takeEvery(act.SYSLOG_QUERY_SUBMIT, queryData);
    yield takeEvery(act.SYSLOG_DELETE_SUBMIT, deleteData);
}
