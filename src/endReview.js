async function endReview(context) {

    context.github.issues.removeLabels(context.issue({name: "review-begin"}))
    return context.github.issues.addLabels(context.issue({labels: ["review-end"]}));
}

module.exports = endReview;