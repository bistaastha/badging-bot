# badging-bot

## About

This is a bot made for helping out with CHAOSS D&I Badging reviews.

## Installation

Visit the public page [here](https://github.com/apps/badging-bot) to install this App on one of your own repositories.

## Bot Function

- Posts contents of `.github/applicant-welcome.md` when an issue is opened
- Posts contents of `.github/reviewer-welcome.md` + `.github/checklist.md` when a issue is assigned
- Attaches label `review-begin` when the issue gets two assignees
- Command `/result` is used to calculate which badge is fit for the application according to review checklists
- Command `/help` uses the content of `.github/review-help.md` and posts it as comment
- Command `/end` assigns label `review-end` to the issue
