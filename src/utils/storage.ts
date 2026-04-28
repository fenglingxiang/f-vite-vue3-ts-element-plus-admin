export const localSetItem = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const localGetItem = (key: string) => {
  const data = localStorage.getItem(key) as string;
  return JSON.parse(data);
};

export const localRemoveItem = (key: string) => {
  localStorage.removeItem(key);
};

export const localClear = () => {
  localStorage.clear();
};

export const sessionSetItem = (key: string, data: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const sessionGetItem = (key: string) => {
  const data = sessionStorage.getItem(key) as string;
  return JSON.parse(data);
};

export const sessionRemoveItem = (key: string) => {
  sessionStorage.removeItem(key);
};

export const sessionClear = () => {
  sessionStorage.clear();
};
