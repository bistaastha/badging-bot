async function endReview(context) {

    context.github.issues.removeLabels(context.issue({name: ["review-begin"]}))
    context.github.issues.addLabels(context.issue({labels: ["review-end"]}));
    return context.github.issues.update(context.issue({state: 'closed'}))
}

module.exports = endReview;