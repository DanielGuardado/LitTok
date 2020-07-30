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

const receiveVideo = (video) => ({
  type: RECEIVE_VIDEO,
  video,
});

const removeVideo = (videoId) => ({
  type: REMOVE_VIDEO,
  videoId,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors: [],
});

export const fetchVideos = () => (dispatch) => (
  VideoAPIutil.fetchVideos().then((videos) =>
    dispatch(receiveAllVideos(videos))
  ),
  (errors) => dispatch(receiveErrors(errors.responseJSON))
);

export const fetchVideo = (videoId) => (dispatch) => (
  VideoAPIutil.fetchVideo(videoId).then((video) =>
    dispatch(receiveVideo(video))
  ),
  (errors) => dispatch(receiveErrors(errors.responseJSON))
);

export const createVideo = (video) => (dispatch) => (
  VideoAPIutil.createVideo(video).then((video) =>
    dispatch(receiveVideo(video))
  ),
  (errors) => dispatch(receiveErrors(errors.responseJSON))
);

export const deleteVideo = (videoId) => (dispatch) =>
  VideoAPIutil.deleteVideo(videoId).then(() => dispatch(removeVideo(videoId)));
