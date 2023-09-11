// Create endpoint

const express = require("express");
const app = express();
const path = require("path");

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  const currentUTC = new Date().toISOString();

  if (!slack_name || !track) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  //   testing
  const file_name = path.basename(__filename);

  const githubFileUrl = `https://github.com/apha-pesso/zuri-backend/tree/main/stage_1/${file_name}`;
  const githubRepoUrl =
    "https://github.com/apha-pesso/zuri-backend/tree/main/stage_1";

  res.status(200).json({
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: currentUTC,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
