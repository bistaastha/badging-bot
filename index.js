const postWelcome = require('./src/postWelcome');
const postChecklist = require('./src/postChecklist');

module.exports = (app) => {
  app.on("pull_request.opened", postWelcome);
  app.on("pull_request.assigned", postChecklist);

};