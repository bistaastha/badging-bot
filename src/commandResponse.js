const calculateBadge = require('./calculateBadge');
async function commandResponse(context) {

  let reviewDetails = calculateBadge();

  const message = "\n**Badge Image:**\n```\n" + reviewDetails[0] + "\n```"
                + "\nReview percentage: " + reviewDetails[2] + "\n"
                + "\nNumber of reviewers: " + reviewDetails[3] + "\n";

  return context.github.issues.createComment(
    context.issue({ body: reviewDetails[0] + message}));

}

module.exports = commandResponse;
