const calculateBadge = require('./calculateBadge');

async function endReview(context) {

    let reviewDetails = await calculateBadge(context);
    context.github.issues.removeLabels(context.issue({name: ["review-begin"]}));
    context.github.issues.addLabels(context.issue({labels: ["review-end"]}));
    context.github.issues.update(context.issue({state: "closed"}));

    const message = "\n**Markdown Badge Link: **\n```\n" + reviewDetails[0] + "\n```"
    + "\n**HTML Badge Link: **\n```\n" + reviewDetails[1] + "\n```";
  
    return context.github.issues.createComment(
        context.issue({ body: reviewDetails[0] + message}));
}

module.exports = endReview;