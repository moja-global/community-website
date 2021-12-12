# Content style guide for moja global

Welcome to the content style guide for [mojaglobal](https://community.moja.global/).

Content on [community.moja.global/](https://community.moja.global/) is primarily written by our incredible contributors. This style guide aims to standardize certain aspects of writing content to make the contribution process smoother.

You should read this style guide before you [contribute](CONTRIBUTING.md) to community.moja.global/.

## Who can submit content to community.moja.global/ 

Anyone! `community.moja.global/` is entirely open source, and many of its best pages are submitted by curious learners who expanded their notes into documentation pages now living on the site.

## Approach to style

- Our style guide aims for simplicity. Guidelines should be easy to apply to a range of scenarios.
- Decisions aren’t about what’s right or wrong according to the rules of grammar or the style guide, but about what’s best for our users. We're flexible and open to change while maintaining consistency.
- To scale the style guide as our team and documentation sets grow, and to create high-quality, meaningful content that serves users, we focus our attention on high-impact, high-value scenarios rather than attempting to comprehensively cover every style question.
- Consistency and grammatical correctness are important, but not as important as clarity and meaning.
- When making a style or structure decision, we consider the flow of information within the unit of content and the context of the information.
- When a question specific to help documentation isn’t covered by the style guide, we think it through using these principles, then make a decision. If a reviewer asks about it, we're prepared to discuss the decision.

## Scheduled workflows

Workflow runs are delayed when too many workflows run at once. Since many users copy code from the GitHub docs, we should use examples that guide users away from congested times.

- Do not use examples that run on the hour. (The Actions team reports that times at the start of the hour, especially UTC midnight, are disproportionately overloaded.)
- Do not use examples that run more frequently than necessary. For example, instead of running every 5 minutes, consider if the example makes sense to run every 30 minutes instead.
- Use a different time for each example.

## Voice and tone

Use clear, simple language that’s approachable and accessible for a wide range of readers. For more information, see “[Voice](https://brand.github.com/content/voice)” in GitHub’s Brand Guide. To learn more about writing approachable content, see “[Microsoft's brand voice: Above all, simple and human](https://docs.microsoft.com/style-guide/brand-voice-above-all-simple-human) and “[Top 10 tips for Microsoft style and voice](https://docs.microsoft.com/style-guide/top-10-tips-style-voice).”

## Punctuation

Follow standard American English punctuation rules. For more guidance, see “[Punctuation](https://brand.github.com/content/grammar#punctuation)” in GitHub’s Brand Guide and “[Punctuation](https://docs.microsoft.com/style-guide/punctuation)” in the Microsoft Style Guide.

## Best practices

For words that have multiple spellings, use American English over British English.

**For example:**

- "decentralized" over "decentralised"
- "color" over "colour"
- "analyze" over "analyse"

### Acronyms

When introducing an unfamiliar acronym, spell out the full term, and put the acronym in parentheses. Put both the full term and acronym in bold.

<!-- **For example:**

"Ethereum, like Bitcoin, currently uses a consensus protocol called **proof-of-work (PoW)**." -->

### Consistency

Many of the topics covered on [community.moja.global/](https://community.moja.global/) are technically complex. To reduce confusion to the reader, terms should be used consistently. 
<!-- For example, don't cycle back-and-forth between proof-of-work and PoW at random. -->

### Use active 

Sentences using active voice are more concise and efficient, making your writing more engaging and easier to comprehend.

**Active voice sentence:** 

> _"Figure shows the results of the three experiments."_

**Passive voice sentence:** 

> _"Results of the three experiments are shown in figure."_

[Read more on active voice](https://www.grammarly.com/blog/active-vs-passive-voice/)

_This isn't an easy one, especially for non-native English speakers. If you aren't sure, don't worry. We'll help with any of these._

### Linking to internal pages

When linking to another page on [community.moja.global/](https://community.moja.global/), use the relative path over the absolute path. Do not hard-code the language path (i.e. `/es/`) in any links. This maintains consistent functionality across different language versions of the site.

```md
<!-- Good -->

Read more about [mentorship](/docusaurus-plugin-content-docs-community/current/Mentorship.md)

<!-- Bad -->

Read more about [mentorship](/es/docusaurus-plugin-content-docs-community/current/Mentorship.md)
Read more about [mentorship](community-website/website/i18n/es/docusaurus-plugin-content-docs-community/current/Mentorship.md)
```

Please also add a trailing slash to all links. This keeps links consistent and avoids redirects, which hurts site performance.

```md
<!-- Good -->

Read more about [mentorship](docusaurus-plugin-content-docs-community/current/)

<!-- Bad -->

Read more about [mentorship](docusaurus-plugin-content-docs-community/current)
```
