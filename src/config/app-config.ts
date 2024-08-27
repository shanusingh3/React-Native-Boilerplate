export const AppConstant = {
  accessString: '2011Boardworks-CGSBW',
  baseTestURL: '',
};

export const APP_END_POINT = {
  AUTH: {
    TOKEN: 'Auth/Token',
    LOGIN: 'Auth/Login',
    LoginBoard: 'Auth/LoginBoard',
    VerifyOtp: 'Auth/VerifyOtp',
    ValidateUsername: 'Auth/ValidateUsername',
    ForgotPasswordQuestions: (user: string) => `Security/SQA/${user}/Question`,
    POSTForgotPasswordQuestions: 'Security/SQA/validate',
    ChangePassword: 'Auth/ChangePassword',
    ValidateEmailLastName: 'Auth/ValidateEmailLastName',
    LogOut: 'Auth/Logout',
  },
  MEETING: {
    MEETING_LIST: 'Sync/Meetings',
    MEETING_ATTENDANCE: (meetingId: any) => `Meetings/${meetingId}/Attendance`,
    ATTENDANCE_REPORT_LIST: 'Sync/Meetings/AttendanceReport',
  },
  PROFILE: {
    PROFILE_LIST: 'Sync/Profiles',
    PROFILE_DETAILS_UPDATE: 'Profiles/My',
    PROFILE_IMAGE_UPDATE: '/Profiles/My/Image',
    GET_USER_IMAGES: (userId: string) => `Profiles/${userId}/Image/large`,
  },
  REFERENCES: {
    REFERENCES_FOLDER: (folderType: string) => `Sync/References/${folderType}`,
    REFERENCES_SIGNATURE_REQUESTS: (signatureReqType: string) =>
      `Sync/References/${signatureReqType}/SignatureRequests`,
    COLLABORATIONS: 'Sync/Collaborations',
    UPLOAD_SIGNATURE_REQUEST: (
      signatureReqType: string,
      infoSiteId: string,
      workflowId: string,
    ) => `References/${signatureReqType}/${infoSiteId}/Workflow/${workflowId}`,
    UPLOAD_DOCUMENT: 'Documents/Cache',
  },
  VOTING: {
    VOTING_LIST: 'Sync/Votings',
    SUBMIT_VOTING: (votingId: any) => `Votings/${votingId}/Responses`,
  },
  SURVEY: {
    SURVEY_LIST: 'Sync/Surveys',
    SURVEY_SUBMIT: (surveyId: any) => `Surveys/${surveyId}/Response`,
    SYNC: 'Sync/Surveys',
  },
  EVALUATION: {
    EVALUATION_LIST: 'Sync/Evaluations',
    EVALUATION_SUBMIT: (evaluationId: any) =>
      `Evaluations/${evaluationId}/Responses`,
    SYNC: 'Sync/Evaluations',
  },
  COMMON: {
    USER_BOARDS: 'Auth/UserBoards',
    TIMEZONES: 'Settings/TimeZones',
    COUNTRIES: 'Settings/Countries',
    SYNC: 'Sync',
    RemoteWipe: 'Security/RemoteWipe',
  },
  SETTINGS: {
    SECURITY_QUESTION: `Security/SQA`,
    SECURITY_QUESTION_UPDATE: `Security/SQA`,
    CHANGE_PASSWORD_FROM_SETTINGS: 'Security/ChangePassword',
  },
  DISCUSSION: {
    DISCUSSION_LIST: `Sync/Discussions`,
    DELETE_DISCUSSION: (discussionId: any) => `/Discussions/${discussionId}`,
    POST_DISCUSSION: '/Discussions',
    UPDATE_DISCUSSION: (discussionId: string) => `/Discussions/${discussionId}`,
    REPLY_COMMENT: (discussionId: string) =>
      `/Discussions/${discussionId}/Reply`,
  },
  DOCUMENT: {
    DOWNLOAD_MEETING_DOCUMENT: `Documents/Download`,
    DIRECTORS_HELP_GUIDE: 'Documents/DirectorsGuide',
  },

  ANNOTATIONS: {
    UPLOAD_ANNOTATIONS: (documentID: any, moduleName: any) =>
      `Annotations/${moduleName}/${documentID}`,
    DOWNLOAD_ANNOTATIONS: (documentID: any, moduleName: any) =>
      `Annotations/${moduleName}/${documentID}`,
    FETCH_SHARED_ANNOTATIONS: (moduleName: any) =>
      `Annotations/${moduleName}/SharedAnnotations`,
    UPLOAD_SHARED_ANNOTATIONS: (documentID: any, moduleName: any) =>
      `Annotations/${moduleName}/SharedAnnotations/${documentID}`,
    DELETE_SHARED_ANNOTATIONS: (moduleName: any) =>
      `Annotations/${moduleName}/SharedAnnotations`,
    ANNOTATION_EXPIRY: `Settings`,
  },

  DASHBOARD_USER_ACTIVITIES: {
    ACTIVITY_FEED: 'RecentUpdates',
    ALERTS: 'Sync/Alerts',
    LINKS: 'Sync/Links',
    ACTIVITY_FEED_UPDATE_BEFORE_SYNC: 'RecentUpdates/Settings',
  },
};
