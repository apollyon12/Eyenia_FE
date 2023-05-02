import { Storage, Drivers } from "@ionic/storage";

var storage = null;

export const createStore = (name = "__mydb") => {
  storage = new Storage({
    name,
    driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
  });

  storage.create();
};

export const set = (key, val) => {
  storage.set(key, val);
};

export const get = async (key) => {
  const val = await storage.get(key);
  return val;
};

export const remove = async (key) => {
  await storage.remove(key);
};

export const clear = async () => {
  await storage.clear();
};
