import { mockData } from './mockData';

// 模拟接口请求，返回 mockData，默认延迟 700ms
export function fetchMockData(delay = 700): Promise<typeof mockData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), delay);
  });
}
