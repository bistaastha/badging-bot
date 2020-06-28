module.exports = (app) => {
  app.on("pull_request.opened", postWelcome);
  app.on("pull_request.assigned", postChecklist);

  async function postChecklist(context) {

    const heading = `# Checklist for @${context.payload.assignee.login}`;

    const reviewerWelcome = await context.github.repos.getContents(
      context.repo({path: '.github/reviewer-welcome.md'})
    );

    const checklist = await context.github.repos.getContents(
      context.repo({path: '.github/checklist.md'})
    );

    const reviewerMessage = heading + "\n" + Buffer.from(reviewerWelcome.data.content, 'base64').toString() +
                            Buffer.from(checklist.data.content, 'base64').toString();

    context.github.issues.createComment(
      context.issue({ body: reviewerMessage })
    );

  }

  async function postWelcome(context) {
    const applicantWelcome = await context.github.repos.getContents(
      context.repo({path: '.github/applicant-welcome.md'})
    );

    const applicantMessage = Buffer.from(applicantWelcome.data.content, 'base64').toString();

    context.github.issues.createComment(
      context.issue({ body: applicantMessage })
    );
  }
};