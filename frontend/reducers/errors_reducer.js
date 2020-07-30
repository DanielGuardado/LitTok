import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import VideoErrorsReducer from "./video_errors_reducer";

const ErrorsReducer = combineReducers({
  session: sessionErrorsReducer,
  video: VideoErrorsReducer,
});

export default ErrorsReducer;
