export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";

//note more specific
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
import * as VideoAPIutil from "../util/video_api_util";

const receiveAllVideos = (videos) => ({
  type: RECEIVE_ALL_VIDEOS,
  videos,
});

const receiveVideo = (payload) => ({
  type: RECEIVE_VIDEO,
  video: payload.video,
  comments: payload.comments,
});

const removeVideo = (videoId) => ({
  type: REMOVE_VIDEO,
  videoId,
});

export const receiveVideoErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearVideoErrors = () => ({
  type: CLEAR_ERRORS,
  errors: [],
});

export const fetchVideos = () => (dispatch) =>
  VideoAPIutil.fetchVideos().then((videos) =>
    dispatch(receiveAllVideos(videos))
  );

export const fetchVideo = (videoId) => (dispatch) =>
  VideoAPIutil.fetchVideo(videoId).then((payload) =>
    dispatch(receiveVideo(payload))
  );

export const createVideo = (video) => (dispatch) =>
  VideoAPIutil.createVideo(video).then(
    (video) => dispatch(receiveVideo(video)),
    (errors) => dispatch(receiveVideoErrors(errors.responseJSON))
  );

export const updateVideo = (video) => (dispatch) =>
  VideoAPIutil.updateVideo(video).then((video) =>
    dispatch(receiveVideo(video))
  );

export const deleteVideo = (videoId) => (dispatch) =>
  VideoAPIutil.deleteVideo(videoId).then(() => dispatch(removeVideo(videoId)));
