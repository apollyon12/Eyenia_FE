import { Preferences } from "@capacitor/preferences";

const Store = {
  set: async (key, value) => {
    return await Preferences.set({ key, value: JSON.stringify(value) });
  },
  get: async (key) => {
    const value = (await Preferences.get({ key })).value;

    return value
      ? await JSON.parse((await Preferences.get({ key })).value || "")
      : null;
  },
  remove: async (key) => {
    return await Preferences.remove({ key });
  },
};

export default Store;
