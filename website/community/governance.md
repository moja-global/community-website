---
id: governance
title: Governance
---

This section contains important documents and a strategic plans that overall governs the important proceedings at moja global. moja global is an open and inclusive community, that strives towards supporting new projects, contributors and processess. This section highlights important documents that we use for reference for coding, project planning, strategic planning, branding and continuous improvements. We are increasingly looking for ways to improve our processes, methodologies and planning to onboard more contributors and help fight against the climate change.

## Projects at moja global

A project is a discrete piece of work related to the development of code, such as a module or a feature along with the documentation in association with the project. A project requires the contribution of more than 1 person. To smoothen collaboration, some [practical steps](code-contribution#starting-a-new-project) is proposed here for those who wish to collaborate on a project.

### Types of Projects

There are two types of projects:

1. **Strategy Initiated**: Every year moja global develops a strategic plan. The strategic plan consists of several projects. Anybody can propose ideas for the strategic plan. The Strategy Board prioritises and approves the plan and [mobilizes the necessary resources](management-contribution#assist-with-fundraising) for the implementation. We love to have contributors join these projects in association with moja global and make necessary impact.

2. **User Initiated:** As a user, you can start a project that is important to you. You can [submit a project idea](code-contribution#starting-a-new-project) at a time that suits your convenience. The idea of the project might come from your own need/preference or it might be an issue that was already listed on the issue backlog of a repository but requires contributions. In either case, thank you for [starting a new moja global project](code-contribution#starting-a-new-project).

## moja global strategic plan

The Strategic Plan is an agreement reached between the users of moja global tools on how to best reach their joint objective, i.e. the widest possible use of and collaboration on open-source software to better manage the land sector. The Strategic Plan provides direction and focus. It also builds consensus because discussion between users creates a better understanding of the needs and thus the priorities. Anybody can make suggestions to the Strategic Plan.

### What Does the Strategic Plan Look Like?

The Strategic Plan is as simple as possible. It states clear targets for each of the following layers:

- Results
- Features of moja global Tools
- Capabilities of the moja global Organisation
- Financial Resources.

The four layers of the strategic plan are based on the Balanced Scorecard for non-profit organisations. The four layers should be read as building blocks where the last layer (Financial Resources) is the foundation on which the next layer, moja global is built.

The moja global **Software layer** achieves the results which corresponds to the objectives of the organisation. The results have a positive outcome on all 3 other layers again which will result in a virtuous cycle of ever-improving results.

### Development of the Strategic Plan

The following steps are to be followed while developing the next Strategic Plan:

1. In November, suggestions for the Strategic Plan submitted on GitHub are collected and used as a basis for discussion.
2. Through interviews with the Strategy Board Members individually and with (potential) users of moja global tools, targets for each of the 4 layers is defined and prioritized.
3. In the same interviews, Strategy Board Members and (potential) users are asked to commit in kind or in cash contributions or potential sources where such contributions is obtained.
4. A draft Strategic Plan is circulated to all Strategy Board Members and potential donors (possibly other stakeholders).
5. The final version of the Strategic Plan is approved in the Board Meeting in January.
6. The Strategy Board can review the Strategic Plan in their quarterly Board Meeting.

## Text collaboration rules

Moja global uses [Google Docs](https://www.google.com/docs/about/) and [HackMD](https://hackmd.io/) to collaborate on text documents as more people are comfortable with the format. While Google Docs provide an easy collaboration means for non-technical people, HackMD is more preferred for writing Markdown-based documentation.

The following rules can be pasted at the beginning of the document to facilitate collaboration:

This is an open-source document. Everybody is welcome to contribute. To allow us to be efficient, we have only few rules:

1. All contributors use comments to ask questions or make substantial and structural suggestions. Always suggest solutions in your comments and not in problems, to collaborate asynchronously.
2. Only Maintainers can resolve comments.
3. All contributors make edits in [**Suggestion Mode**](https://youtu.be/SeSx78K_HPo)” (even if you are a maintainer or editor, so the other maintainers or editors can cross-check and accept your contribution).
4. Write suggested edits directly into the text in "[**Suggestion Mode**](https://www.youtube.com/watch?v=M8B0HaLk0_s)". Do not use comments to suggest edits.
5. Only Editors assigned to the document can approve edits.
6. Spelling will be UK English.
7. Referencing Style is Harvard (author-date) type. Tools such as [Zotero](https://www.zotero.org/) may be useful.

The collaboration methodology is slightly different on HackMD but the overall pattern is nearly same. We recommend this [standard tutorial](https://youtu.be/uETXae8jlvo) for technical and documentation writers to get started with HackMD.

## Continuous Improvement Plan

Consistent with the Agile development approach, moja global aims to operate in a framework for continuous improvement.

This means that improvement of moja global processes, specifically about the development of software and documentation of that software, should be incremental, rather than relying upon large resource intensive reviews to make big leaps of improvement.

### Kaizen

The Kaizen approach to continuous improvement involves improvement through many incremental improvements. The responsibility for the process sits with all people involved and is therefore not one that is specifically led by managers (maintainers, senior contributors, steering committees and more), but should be supported by managers.

In this spirit, continuous improvement is the responsibility of all involved. This should include:

1. Reflecting on processes to see if improvements could be made for efficiency or quality
2. Proposing identified improvements, by raising them with others in the project including peers, maintainers or other senior people working on the project.
3. Continually reflecting on your work practices to see if there are ways that you can improve.

Where improvements result in the refinements to processes, these should be documented. Documentation should occur as improvements to existing guidance eg. [How-to guides](https://github.com/moja-global/About-moja-global/tree/master/Contributing), or if no guidance exists, new guidance documentation should be developed.

### Periodic Review

While moja global operates under a framework of continuous improvement, it is expected that the high-level strategy for moja global will also benefit from targeted periodic reviews. It is proposed that the periodic reviews will take place as part of the annual strategic plan development for moja global.

The aim will not be to conduct a complete review of moja global activities, but rather to focus on selected high-level issues. The strategy board and technical steering committee will be jointly responsible for identifying issues to review.

## Coding guidelines

moja global follows the C++ Style guide developed by Google for their open-source projects. The Google Style guide is aimed at enabling coders to utilise the power of C++ while at the same time managing the potential complexity that can arise when coding in C++.

The general rules of the Style guide are:

- Indents are two spaces. No tabs should be used anywhere.
- Each line must be at most 80 characters long.
- Comments can be `//` or `/*` but `//` is most commonly used.
- File names should be `lower_case.c` or `lower-case.c`.
- For macros, use `ALL_CAPS` separated by underscore.
- Type names should be **PascalCase**.
- Function names are **PascalCase**. Opening braces come at the end of the last line for the function declaration rather than on the next line.
- For statements that span multiple lines, break after the logical operator and align each line with the start of the first line.

The Style guide can be found at: **https://google.github.io/styleguide/cppguide.html**

Exceptions to the Google Style guide may be specified, in which case they will be listed here. Currently, there are no exceptions.

### Coding enforcement

We know that the Style guides are long and detailed and not always easy to adhere to. As such, the intention is to use [Clang-Tidy](http://clang.llvm.org/extra/clang-tidy/) as a tool to check and correct code formatting as determined by the Google C++ Style guide. This will be implemented as an automated check through the Continuous Integration system.
