async function endReview(context) {
  const applicantWelcome = await context.github.repos.getContents(
    context.repo({ path: ".github/review-help.md" })
  );

  const helpMessage = Buffer.from(
    applicantWelcome.data.content,
    "base64"
  ).toString();

  context.github.issues.createComment(context.issue({ body: helpMessage }));
}
