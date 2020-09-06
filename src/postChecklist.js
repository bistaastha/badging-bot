async function postChecklist(context) {

    const heading = `# Checklist for ${context.payload.assignee.login}`;

    const reviewerWelcome = await context.github.repos.getContents(
      context.repo({path: '.github/reviewer-welcome.md'})
    );

    let title = context.payload.issue.title;

    if(title.substring(0, 15) == "[Virtual Event]") {
    checklist = await context.github.repos.getContents(
      context.repo({path: '.github/virtual-event-checklist.md'})
    );
    }

    else {
    checklist = await context.github.repos.getContents(
        context.repo({path: '.github/checklist.md'})
      );
    }

    const reviewerMessage = heading + "\n" + Buffer.from(reviewerWelcome.data.content, 'base64').toString() +
                            Buffer.from(checklist.data.content, 'base64').toString();

    context.github.issues.createComment(
      context.issue({ body: reviewerMessage })
    );

    if ((context.payload.issue.assignees.length) == 2)
    {
      context.github.issues.addLabels(context.issue({labels: ["review-begin"]}));
    }
}

module.exports = postChecklist;
