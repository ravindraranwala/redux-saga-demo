import { studentsSaga } from './studentSaga';
// single entry point to start all Sagas at once
export function* rootSaga() {
  yield [
    studentsSaga()
  ]
}
export default rootSaga;