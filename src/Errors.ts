interface IError {
    [key: number]: string
}

export const enum ERROR_CODE {
    NO_ERROR,
    UNHANDLED_ERROR,
    MISSING_FFMPEG,
    ELEVATED_SHELL,
    CANCELLED_USER_INPUT,
    INVALID_OUTPUT_DIR,
    INVALID_INPUT_URLS,
    OUTDIRS_URLS_MISMATCH,
    INVALID_VIDEO_ID,
    INVALID_VIDEO_GUID,
    UNK_FFMPEG_ERROR,
    NO_SESSION_INFO
}

// TODO: create better errors descriptions
export const Error: IError = {
    [ERROR_CODE.NO_ERROR]:           'Clean exit with code 0',

    [ERROR_CODE.UNHANDLED_ERROR]:       'Unhandled error!\n' +
                                        'Timeout or fatal error, please check your downloads directory and try again',

    [ERROR_CODE.ELEVATED_SHELL]:        'Destreamer cannot run in an elevated (Administrator/root) shell.\n' +
                                        'Please run in a regular, non-elevated window.',

    [ERROR_CODE.CANCELLED_USER_INPUT]:  'Input was cancelled by user',

    [ERROR_CODE.INVALID_OUTPUT_DIR]:    'Unable to create output directory',

    [ERROR_CODE.MISSING_FFMPEG]:        'FFmpeg is missing!\n' +
                                        'Destreamer requires a fairly recent release of FFmpeg to download videos',

    [ERROR_CODE.UNK_FFMPEG_ERROR]:      'Unknown FFmpeg error',

    [ERROR_CODE.INVALID_INPUT_URLS]:    'No valid URL from input',

    [ERROR_CODE.OUTDIRS_URLS_MISMATCH]: 'Output directories and URLs mismatch!\n' +
                                        'You must input the same number of URLs and output directories',

    [ERROR_CODE.INVALID_VIDEO_ID]:      'Unable to get video ID from URL',

    [ERROR_CODE.INVALID_VIDEO_GUID]:    'Unable to get video GUID from URL',

    [ERROR_CODE.NO_SESSION_INFO]:       'Could not evaluate sessionInfo on the page'
};


export const enum CLI_ERROR {
    MISSING_INPUT_ARG           = 'You must specify a URLs source.\n' +
                                'Valid options are -i for one or more URLs separated by space or -f for input file.',

    INPUT_ARG_CONFLICT          = 'Too many URLs sources specified!\n' +
                                'Please specify a single source, either -i or -f',

    INPUTFILE_WRONG_EXTENSION   = 'The specified inputFile has the wrong extension\n' +
                                'Please make sure to use path/to/filename.txt when useing the -f option',

    INPUTFILE_DOESNT_EXISTS     = 'The specified inputFile does not exists\n'+
                                'Please check the filename and the path you provided',
}
