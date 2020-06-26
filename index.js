module.exports = (app) => {
  app.on("pull_request.opened", postChecklist);

  async function postChecklist(context) {

    const res = await context.github.repos.getContents(
      context.repo({path: '.github/checklist.md'})
    );
    const checklist = Buffer.from(res.data.content, 'base64').toString();

    context.github.issues.createComment(
      context.issue({ body: checklist })
    );

  }
};