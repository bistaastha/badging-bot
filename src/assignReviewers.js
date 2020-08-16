async function assignReviewers(context) {
  const reviewerListDocument = await context.github.repos.getContents(
    context.repo({ path: ".github/reviewers.md" })
  );

  let reviewerList = Buffer.from(
    reviewerListDocument.data.content,
    "base64"
  ).toString();
  reviewerList = reviewerList.split("\n");


  let filteredList = reviewerList.filter(function(element) {
      return element[0] == "-";
    });

    length = filteredList.length;
  usernameIndex = getRandomIndexes(0, length - 1);

  let list = filteredList.map(function(element) {
    return element.replace(/-|\s/g, "");
  });

  let assigneeList = [list[usernameIndex[0]], list[usernameIndex[1]]];

  const issueComment = context.issue({ assignees: assigneeList });
  return context.github.issues.addAssignees(issueComment);
}

function getRandomIndexes(min, max) {
  indexOne = Math.floor(Math.random() * (max - min + 1)) + min;
  indexTwo = Math.floor(Math.random() * (max - min + 1)) + min;

  while (indexOne == indexTwo) {
    indexTwo = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return [indexOne, indexTwo];
}

module.exports = assignReviewers;
