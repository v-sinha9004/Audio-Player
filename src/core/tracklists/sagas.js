import { call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { fetchNextTracks, load } from 'src/core/api';
import { tracklistActions } from './actions';
import { getCurrentTracklist } from './selectors';
import { getTracklistById } from 'src/core/tracklists';


export function* loadNextTracks() {
  const tracklist = yield select(getCurrentTracklist);
  if (tracklist.hasNextPageInStore) {
    yield put(tracklistActions.updatePagination(tracklist.currentPage + 1));
  }
  else if (tracklist.nextUrl) {
    yield call(fetchNextTracks, tracklist.id, tracklist.nextUrl);
  }
}

export function* loadTrack({payload}) {
  const { tracklistId } = payload;
  const tracklist = yield select(getTracklistById, tracklistId);
  if (tracklist && tracklist.isNew) {
    yield call(load, tracklistId);
  }
}

//=====================================
//  WATCHERS
//-------------------------------------

export function* watchLoadNextTracks() {
  yield takeLatest(tracklistActions.LOAD_NEXT_TRACKS, loadNextTracks);
}

export function* watchLoadTrack() {
  yield takeLatest([
     tracklistActions.LOAD_TRACKS
  ], loadTrack);
}

//=====================================
//  ROOT
//-------------------------------------

export const tracklistSagas = [
  fork(watchLoadNextTracks),
  fork(watchLoadTrack),

];
