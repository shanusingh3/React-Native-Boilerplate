module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'test',
    'feat',
    'fix',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf',
    'conflict',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [],
  types: {
    chore: {
      description:
        'Changes related to build processes, tooling, or auxiliary scripts.',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'Changes to CI/CD configurations, pipeline, or scripts.',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description:
        'Documentation updates or additions, including README, comments, or guides.',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: 'Addition of a new feature, enhancement, or functionality.',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'Fixing a bug or resolving an issue.',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'Optimizing code performance, speed, or efficiency.',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description:
        'Restructuring code without adding new features or fixing bugs.',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: 'Improvements in code style, formatting, or whitespace.',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description:
        'Adding or updating tests, test suites, or test-related code.',
      emoji: '💍',
      value: 'test',
    },
    conflict: {
      description: 'Resolution of code conflicts or merging changes.',
      emoji: '⛑️',
      value: 'conflict',
    },
    messages: {
      type: 'What type of change is this?\n',
      customScope:
        'Specify the component or scope this change affects (optional):\n',
      subject: 'Write a brief and imperative description of the change:\n',
      body: 'Provide detailed information about the change (optional):\n',
      breaking: 'List any breaking changes caused by this commit (optional):\n',
      footer:
        'Reference related issues, tasks, or external resources (optional):\n',
      confirmCommit:
        'Review the packages or modules impacted by this commit (optional):\n',
    },
  },
};
