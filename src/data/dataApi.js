import { Storage } from "@ionic/storage";

const dataUrl = "/assets/data/data.json";
const locationsUrl = "/assets/data/locations.json";

const HAS_LOGGED_IN = "hasLoggedIn";
const HAS_SEEN_TUTORIAL = "hasSeenTutorial";
const USERNAME = "username";
const EMAIL = "email";

export const getConfData = async () => {
  const response = await Promise.all([fetch(dataUrl), fetch(locationsUrl)]);
  const responseData = await response[0].json();
  const schedule = responseData.schedule[0];
  const sessions = parseSessions(schedule);
  const locations = await response[1].json();
  const allTracks = sessions
    .reduce((all, session) => all.concat(session.tracks), [])
    .filter((trackName, index, array) => array.indexOf(trackName) === index)
    .sort();

  const data = {
    schedule,
    sessions,
    locations,
    allTracks,
    filteredTracks: [...allTracks],
  };
  return data;
};

export const getUserData = async () => {
  const response = await Promise.all([
    Storage.get({ key: HAS_LOGGED_IN }),
    Storage.get({ key: HAS_SEEN_TUTORIAL }),
    Storage.get({ key: USERNAME }),
  ]);
  const isLoggedin = (await response[0].value) === "true";
  const hasSeenTutorial = (await response[1].value) === "true";
  const username = (await response[2].value) || undefined;
  const data = {
    isLoggedin,
    hasSeenTutorial,
    username,
  };
  return data;
};

export const setIsLoggedInData = async (isLoggedIn) => {
  await Storage.set({ key: HAS_LOGGED_IN, value: JSON.stringify(isLoggedIn) });
};

export const setHasSeenTutorialData = async (hasSeenTutorial) => {
  await Storage.set({
    key: HAS_SEEN_TUTORIAL,
    value: JSON.stringify(hasSeenTutorial),
  });
};

export const setUsernameData = async (username) => {
  if (!username) {
    await Storage.remove({ key: USERNAME });
  } else {
    await Storage.set({ key: USERNAME, value: username });
  }
};

export const setEmailData = async (email) => {
  if (!email) {
    await Storage.remove({ key: EMAIL });
  } else {
    await Storage.set({ key: EMAIL, value: email });
  }
};

function parseSessions(schedule) {
  const sessions = [];
  schedule.groups.forEach((g) => {
    g.sessions.forEach((s) => sessions.push(s));
  });
  return sessions;
}
