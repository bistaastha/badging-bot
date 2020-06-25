module.exports = (app) => {
  app.on("pull_request.opened", receive);
  async function receive(context) {
    // Get all issues for repo with user as creator
    const config = await context.config('.github/checklist.yml');
    if (config.reviewChecklist)
    context.github.issues.createComment(
      context.issue({ body: config.reviewChecklist })
    );
  }
};
