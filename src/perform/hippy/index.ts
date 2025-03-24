export interface HippyItem {
  aaa: string;
  bbb: number;
  ccc: any[];
}

export interface HippyResponse {
  data: HippyItem[];
  code: number;
}


export enum HippyEnum {
    A = 1,
    B = 2,
    C = 3
}


export const testHippy = (data: HippyItem): HippyResponse => {
    console.log('testHippy', data)
    return {
        data: [data],
        code: 0
    }
}