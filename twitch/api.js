require("dotenv").config();

const axios = require("axios");

const accessToken = getAppAccessToken();

async function getAppAccessToken() {
  const { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } = process.env;
  const url = `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`;
  const options = {
    method: "POST",
    url,
  };

  const token = await axios(options).then((response) => {
    const { access_token } = response.data;

    return access_token;
  });

  getStreams(token);

  // const hash = {};

  // async function callGetTopGames(
  //   accessToken,
  //   pagination = "",
  //   offset = "",
  //   limit = 100
  // ) {
  //   const response = await getTopGames(accessToken, pagination, offset, limit);
  //   response.data.forEach((game) => {
  //     const { id } = game;
  //     if (hash[id] === undefined) {
  //       hash[id] = 1;
  //     } else {
  //       hash[id]++;
  //     }
  //   });

  //   console.log(Object.keys(hash).length, Object.values(hash));

  //   if (response.pagination.cursor)
  //     callGetTopGames(accessToken, response.pagination.cursor, "after", limit);
  // }

  // callGetTopGames(token);

  return token;
}

async function getTopGames(
  accessToken,
  pagination = "",
  offset = "",
  limit = 20
) {
  const url = `https://api.twitch.tv/helix/games/top?first=${limit}`;

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Client-ID": process.env.TWITCH_CLIENT_ID,
      Accept: "application/vnd.twitchtv.v5+json",
    },
    url: pagination.length > 0 ? `${url}&${offset}=${pagination}` : url,
  };

  return axios(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
}

async function getStreams(accessToken) {
  const url = "https://api.twitch.tv/helix/streams";

  const options = {
    url,
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Client-ID": process.env.TWITCH_CLIENT_ID,
      Accept: "application/vnd.twitchtv.v5+json",
    },
  };

  return axios(options)
    .then((response) => {
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
