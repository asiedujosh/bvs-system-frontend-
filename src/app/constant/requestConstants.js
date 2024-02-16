"use client"

export const TIMEOUT = { timeout: 50000 }
//export const URL = "http://127.0.0.1:8000"
export const URL = "https://apiv4.awesomehandsacademy.com/"

//System Responses

//Status Code
export const SUCCESS_STATUS = 200
export const BAD_REQUEST_STATUS = 400

//defining custom errors
export const UNEXPECTEDERR = 301
export const NETWORKERR = 302
export const RETRYERR = 303
export const NOTFOUND = 404
export const TIMEEXCEED = 405
export const UNHANDLEERR = 406
export const TOOMANYREQUEST = 429
