const googleTrends = require("google-trends-api");
const { google } = require("googleapis");

exports.getTrending = (req, res, next) => {
  let date = new Date();
  date.setDate(date.getDate() + 1);

  googleTrends.dailyTrends(
    {
      trendDate: date,
      geo: "PH",
    },
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        const queries = [];
        const data = JSON.parse(results);
        const days = data.default.trendingSearchesDays;

        if (days) {
          if (days.length > 2) days.length = 2;
          days.forEach((day) => {
            day.trendingSearches.forEach((item) => {
              queries.push(item.title.query);
            });
          });
        }
        res.json([...new Set(queries)]);
      }
    }
  );
};

exports.getTrendingMiddleware = (req, res, next) => {
  let date = new Date();
  date.setDate(date.getDate() + 1);
  googleTrends.dailyTrends(
    {
      trendDate: date,
      geo: "PH",
    },
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        const queries = [];
        const data = JSON.parse(results);
        const days = data.default.trendingSearchesDays;

        if (days) {
          if (days.length > 2) days.length = 2;
          days.forEach((day) => {
            day.trendingSearches.forEach((item) => {
              queries.push(item.title.query);
            });
          });
        }
        req.queries = [...new Set(queries)];

        next();
      }
    }
  );
};

exports.getTopViews = async (req, res) => {
  const scopes = "https://www.googleapis.com/auth/analytics.readonly";
  const key = require("../helpers/auth.json");
  const jwt = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    scopes
  );

  const view_id = "156240112";

  try {
    const response = await jwt.authorize();
    const result = await google.analytics("v3").data.ga.get({
      auth: jwt,
      ids: "ga:" + view_id,
      "start-date": "1daysAgo",
      "end-date": "today",
      metrics: "ga:pageviews",
      dimensions: "ga:pagePathLevel1",
      sort: "-ga:pageviews",
      "max-results": "20",
    });

    const slugs = result.data.rows.map((item, index) => item[0]);
    res.json(slugs);
  } catch (error) {
    res.json(error);
  }
};
