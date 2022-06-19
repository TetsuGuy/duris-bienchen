import Axios from "axios";
const token =
  "AAAAAAAAAAAAAAAAAAAAAIa4aAEAAAAABH5Ju6tAMO2J%2FjXJuVbyo0hmBFw%3DX9lDJHfNeAdBYyRvaL67uYSPFbDcryZwKLvUhMV1griza1QINB";
export const api = Axios.create({
  baseURL: "https://ctvf-cors.herokuapp.com/https://api.twitter.com/2/",
  headers: { Authorization: `Bearer ${token}` },
});

interface Tweet {
  id: string;
  text: string;
}

export async function getLatestTweetId(): Promise<string> {
  try {
    return (
      await api.get<{ data: Tweet[]; meta: { newest_id: string } }>(
        "users/1498308770325270532/tweets"
      )
    ).data.meta.newest_id;
  } catch (error) {
    return "";
  }
}
