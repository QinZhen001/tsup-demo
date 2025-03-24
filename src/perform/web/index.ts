export interface WebItem {
    aaa: string;
    bbb: number;
    ccc: any[];
  }
  
  export interface WebResponse {
    data: WebItem[];
    code: number;
  }
  
  
  export enum HippyEnum {
      A = 1,
      B = 2,
      C = 3
  }
  
  
  export const testWeb = (data: WebItem): WebResponse => {
      console.log('testHtestWebippy', data)
      return {
          data: [data],
          code: 0
      }
  }