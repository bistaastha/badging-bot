const postWelcome = require('./src/postWelcome');
const postChecklist = require('./src/postChecklist');
const commandResponse = require('./src/commandResponse');
const endReview = require('./src/endReview');
const commands = require('probot-commands');
const postHelp = require('./src/postHelp');

module.exports = (app) => {
  app.on("issues.opened", postWelcome);
  app.on("issues.assigned", postChecklist);
  commands(app, 'result', commandResponse);
  commands(app, 'end', endReview);
  commands(app, 'help', postHelp);
};