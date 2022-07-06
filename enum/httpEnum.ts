export enum ResultEnum {
  SUCCESS = 0,
  ERROR = 1,
  TIMEOUT = 401,
  TYPE = 'success'
}

export enum ContentType {
  JSON = 'application/json;charset=UTF-8',
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8'
}
