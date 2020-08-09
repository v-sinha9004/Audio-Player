export const tracklistActions = {
  FETCH_TRACKS_FAILED: 'FETCH_TRACKS_FAILED',
  FETCH_TRACKS_FULFILLED: 'FETCH_TRACKS_FULFILLED',
  FETCH_TRACKS_PENDING: 'FETCH_TRACKS_PENDING',
  LOAD_TRACKS: 'LOAD_TRACKS',
  LOAD_NEXT_TRACKS: 'LOAD_NEXT_TRACKS',
  UPDATE_PAGINATION: 'UPDATE_PAGINATION',


  fetchTracksFailed: error => ({
    type: tracklistActions.FETCH_TRACKS_FAILED,
    payload: error
  }),

  fetchTracksFulfilled: (tracklistId, data) => ({
    type: tracklistActions.FETCH_TRACKS_FULFILLED,
    payload: {
      ...data,
      tracklistId
    }
  }),

  fetchTracksPending: tracklistId => ({
    type: tracklistActions.FETCH_TRACKS_PENDING,
    payload: {
      tracklistId
    }
  }),

  loadTracks: () => ({
    type: tracklistActions.LOAD_TRACKS,
    payload: {
      tracklistId: '',
    }
  }),

  loadNextTracks: () => ({
    type: tracklistActions.LOAD_NEXT_TRACKS
  }),

  updatePagination: page => ({
    type: tracklistActions.UPDATE_PAGINATION,
    payload: {
      page
    }
  })
};


export const tracklistRequestActions = {
  failed: tracklistActions.fetchTracksFailed,
  fulfilled: tracklistActions.fetchTracksFulfilled,
  pending: tracklistActions.fetchTracksPending
};
