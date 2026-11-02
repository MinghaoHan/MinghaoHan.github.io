// English editorial version of the verified Chinese profile. Keep dates and metrics aligned.
window.PROFILE = {
  name: 'Minghao Han',
  role: 'Senior Algorithm Engineer',
  organization: 'Momenta',
  ui: { projectDetails: 'Technical details', workDetails: 'Key contributions' },
  projects: [
    {
      id: 'engineering-agents',
      title: 'Multi-Agent Platform for Engineering',
      period: 'Jun 2026 — Present',
      context: 'Momenta · Developer Tools',
      summary: 'Building a unified assistant for parking-system development, integrating issue analysis, software builds, simulation testing, and data queries into a reliable workflow from task dispatch to result delivery.',
      tags: ['TypeScript', 'Python', 'Multi-Agent', 'MCP'],
      metrics: [],
      details: [
        ['Task routing and session management', 'Preloaded routing metadata and consolidated routing and agent startup into a validated tool entry point. Improved conversation continuity, context propagation, and session isolation.'],
        ['Reliable execution and delivery', 'Implemented a unified result-delivery path with acknowledgements and duplicate-message suppression to address missing results and repeated responses from asynchronous tasks.'],
        ['Workflow integration', 'Connected engineering data, build systems, and testing tools to conversational workflows through parameter selection, action confirmation, and asynchronous status updates.'],
        ['Release reliability', 'Diagnosed failures using execution traces and replay tests. Added version checks at release and startup to prevent older deployments from overwriting production fixes.']
      ]
    },
    {
      id: 'agent-analytics',
      title: 'Agent and Tool Usage Analytics',
      period: 'Aug 2026 — Present',
      context: 'Momenta · Observability and Analytics',
      summary: 'Built a usage analytics dashboard across servers and agent runtimes, tracking tool invocations, active users, and token consumption by user, agent, and skill to guide maintenance and development priorities.',
      tags: ['Node.js', 'WebSocket', 'Incremental Cache', 'SVG'],
      metrics: [['17s → 0.2s', 'warm-cache aggregation rebuild']],
      details: [
        ['Attribution and data quality', 'Correlated parent and child tasks with dispatch outcomes, excluding failed dispatches, duplicate archives, and invalid placeholder records. Standardized identity mapping, date windows, and active-user deduplication across nodes.'],
        ['Incremental computation', 'Introduced background refresh, file-level incremental caching, and deduplication of concurrent rebuilds while keeping queries available during refresh. Reduced aggregation rebuild time from 17 seconds to 0.2 seconds on the existing log dataset with a warm cache.'],
        ['Multi-source reporting', 'Enabled drill-down by source, user, agent, and skill. Distinguished uncollected data and unavailable sources from confirmed zero usage.']
      ]
    },
    {
      id: 'agent-improvement',
      title: 'Feedback-Driven Agent Memory',
      period: 'Jun 2026 — Present',
      context: 'Momenta · Persistent Memory and Knowledge Reuse',
      summary: 'Developed a feedback and memory mechanism that captures user corrections, execution errors, and successful approaches as structured records for reuse in subsequent agent tasks.',
      tags: ['SQLite', 'Bootstrap Hooks', 'Memory', 'Feedback'],
      metrics: [],
      details: [
        ['Structured experience records', 'Organized corrections, errors, and best practices by target agent, source session, and timestamp, with synchronization to the collaboration platform.'],
        ['Cross-session reuse', 'Loaded recent, agent-specific records during child-agent startup and injected them into the execution context to inform subsequent tasks.'],
        ['Scope and evaluation', 'Implemented improvement through persistent records and context reuse. The mechanism does not train model parameters; its impact is assessed through task-specific evaluation.']
      ]
    },
    {
      id: 'agent-evaluation',
      title: 'Agent Evaluation and Execution Optimization',
      period: 'Sep 2026 — Present',
      context: 'Momenta · Quality and Performance',
      summary: 'Developed end-to-end evaluations using domain questions, reference answers, and scoring criteria. Analyzed execution traces to separate model, tool, and retrieval overhead and refine task execution strategies.',
      tags: ['Evaluation', 'Trace Analysis', 'Skill Engineering', 'Python'],
      metrics: [],
      details: [
        ['Evaluation datasets and result validation', 'Maintained domain-specific test cases and collected per-question answers and execution outcomes. Distinguished task failures, environment errors, and missing results, comparing changes under consistent conditions.'],
        ['Execution strategy', 'Reduced redundant retrieval and tool calls through documentation-first workflows, scoped searches, and explicit retrieval budgets.'],
        ['Quality criteria', 'Assessed response latency, evidence quality, and answer completeness separately, using repeatable evaluation to judge improvements.']
      ]
    },
    {
      id: 'home-agent',
      title: 'Smart Home AI Agent',
      period: 'Jun 2025 — Jan 2026',
      context: 'Huawei · Consumer Products',
      summary: 'Developed a hierarchical agent system that translates complex smart-home requests into executable tasks, integrating planning, tool use, persistent memory, and dynamically generated interfaces.',
      tags: ['ReAct', 'MCP', 'RAG', 'OpenUI'],
      metrics: [['94%', 'black-box test accuracy'], ['96%', 'tool-call accuracy'], ['< 200ms', 'mean time to first token']],
      details: [
        ['Reasoning and orchestration', 'Decomposed complex requests through a Plan–Execute–Replan workflow. Combined natural-language-to-code task orchestration in specialized agents with ReAct-based tool selection.'],
        ['Tool integration', 'Implemented MCP tool registration, schema validation, and dynamic discovery to improve the reliability of model-generated tool calls.'],
        ['Memory and domain knowledge', 'Designed separate short-term and long-term memory layers incorporating user profiles and preferences. Integrated vector retrieval and cloud deployment and online updates for domain-specific skills.'],
        ['Generative interfaces', 'Integrated OpenUI to render interfaces dynamically from structured agent responses and improve streaming interactions.']
      ]
    },
    {
      id: 'a2a',
      title: 'A2A Multi-Agent Collaboration',
      period: 'Jan 2026 — Apr 2026',
      context: 'Huawei · InnerSource Innovation',
      summary: 'Built a collaboration system for three independent, heterogeneous agents, supporting task discovery, peer review, iterative delivery, and shared memory management.',
      tags: ['A2A', 'MCP Server', 'HTTP Callbacks', 'SQLite'],
      metrics: [['3', 'heterogeneous agents'], ['Async', 'messaging and task dispatch']],
      details: [
        ['Asynchronous communication', 'Designed an MCP server communication module using HTTP callbacks and message queues for proactive messaging and asynchronous task dispatch between agents.'],
        ['Discovery and delivery', 'Used a Discovery Loop to refine problems and decisions, and a Delivery Loop with testing skills to drive implementation and verification.'],
        ['Persistent memory', 'Incrementally summarized decisions and captured reusable experience as structured records. Built SQLite indexes with dual-path retrieval to support subsequent tasks.']
      ]
    },
    {
      id: 'outdoor-exploration',
      title: 'Mate 80 Outdoor Exploration Mode',
      period: 'During Huawei tenure',
      context: 'Huawei · Mate 80 Series · Feature Lead',
      summary: 'Led a six-person engineering team delivering a mode for extended outdoor use and emergency scenarios. Directed memory and system-load optimization, aligned technical plans across projects, and coordinated resources across software, hardware, and chipset teams.',
      tags: ['Memory Management', 'Power Optimization', 'System Integration', 'IPD'],
      metrics: [['65%', 'lower memory footprint'], ['6', 'engineers led'], ['Up to 14 days', 'product battery life*']],
      details: [
        ['Memory and system performance', 'Optimized memory partitioning and dynamic process termination, combining runtime isolation, foreground workload reduction, and fine-grained memory management. Reduced the mode’s memory footprint by 65% according to project records.'],
        ['Cross-project technical coordination', 'Led technical alignment across software, hardware, and chipset teams. Coordinated shared resources and dependencies to integrate system optimizations into the device feature.'],
        ['Team leadership and delivery', 'Led a six-person team through feature development. Tracked progress and delivery milestones through the Integrated Product Development (IPD) process, coordinating work allocation and resources to deliver the agreed technical plan.'],
        ['Product capabilities and battery life', 'The product combines outdoor navigation, route recording, and emergency communications. *Huawei advertises up to 14 days of battery life for the Mate 80 Pro Max with extreme battery-saving mode enabled under specified usage conditions. This is a device-level product specification.']
      ]
    },
    {
      id: 'retrieval',
      title: 'Distributed Advertising Retrieval Engine',
      period: 'Jun 2023 — Jul 2023',
      context: 'Alibaba Programming Competition',
      summary: 'Built an advertising data engine from scratch, covering candidate retrieval, ranking, and pricing. Optimized throughput through compact data structures, compressed indexes, and low-overhead networking.',
      tags: ['C++', 'Inverted Indexes', 'UDP', 'perf'],
      metrics: [['10,000+', 'queries per second']],
      details: [
        ['Compact data structures', 'Used value-domain mapping, bit packing, and compressed inverted indexes to reduce memory usage and improve tail performance.'],
        ['Low-overhead communication', 'Profiled bottlenecks with perf and optimized communication using a custom UDP protocol, asynchronous processing, and thread pools.']
      ]
    }
  ],
  work: [
    {
      period: 'Jun 2026 — Present', title: 'Momenta', role: 'Senior Algorithm Engineer',
      detail: 'AI Agents · Developer Tools and Engineering Productivity',
      bullets: [
        'Build a multi-agent platform for parking-system development, integrating domain tools with task routing, session management, asynchronous execution, and reliable result delivery.',
        'Develop usage analytics across tools and agent runtimes, standardizing attribution by user, agent, and skill while improving aggregation and query performance.',
        'Implement feedback-driven memory and cross-session knowledge reuse; improve agent quality through domain-specific evaluations and execution-trace analysis.'
      ]
    },
    {
      period: 'Feb 2024 — Jun 2026', title: 'Huawei Technologies', role: 'Senior Software Engineer',
      detail: 'Agent Infrastructure · Device Performance',
      bullets: [
        'Contributed to a ReAct-based multi-agent framework and led development of intent recognition, agent harnesses, reasoning orchestration, and AI safety guardrails.',
        'Implemented event subscriptions and a skill-hub service. Packaged framework capabilities as an SDK and used a chain-of-responsibility design to enable domain teams to build specialized agents.',
        'Established a quality improvement group and an extensible troubleshooting toolchain, supported by technical knowledge sharing, reducing feature delivery time by 40%.',
        'Served as feature lead for Mate 80 Outdoor Exploration Mode, leading six engineers on memory and system-load optimization. Coordinated technical plans across software, hardware, and chipset teams, managed cross-team resources, and tracked delivery through IPD.',
        'Served as performance lead for Mate XTs, driving device–cloud shader optimization, dynamic VSync, and workload-aware frequency scaling.'
      ]
    },
    {
      period: 'Jul 2021 — Oct 2021', title: 'Tencent · Weixin Group (WeChat)', role: 'Backend Engineering Intern',
      detail: 'WeGraph Graph Database · Query Processing and Aggregation',
      bullets: [
        'Contributed to WeGraph, a graph database for large-scale relationship queries, using a decoupled storage and compute architecture with column-oriented and streaming computation.',
        'Implemented Cypher query-language features and abstract syntax tree (AST) parsing to extend graph-query capabilities.',
        'Developed aggregation functions using ClickHouse aggregation implementations and template programming, with custom columnar data structures for graph-query aggregation.',
        'Added unit tests, resolved functional defects, and authored project documentation and three technical articles for Tencent’s internal engineering forum.'
      ]
    }
  ],
  education: [
    { period: 'Nov 2022 — Jan 2024', title: 'National University of Singapore', role: 'Master’s Degree in Computer Science', detail: '' },
    { period: 'Sep 2018 — Jul 2022', title: 'Nanjing University', role: 'Bachelor’s Degree in Software Engineering', detail: 'GPA: Top 20%' },
    { period: 'Jan 2021 — Mar 2021', title: 'Imperial College London', role: 'Exchange Programme · Data Science and Machine Learning', detail: 'Recognized as an outstanding exchange student' }
  ],
  skills: [
    {
      title: 'AI Agent Systems',
      description: 'Multi-agent orchestration, tool protocols, retrieval, persistent memory, and task evaluation.',
      items: ['LangChain', 'ReAct', 'RAG', 'Harness Engineering', 'MCP', 'A2A', 'Skill & Prompt Optimization', 'Agent Evaluation']
    },
    {
      title: 'Full-Stack Engineering',
      description: 'Backend services, tool integrations, interfaces, usage analytics, and production delivery.',
      items: ['TypeScript', 'Python', 'Node.js', 'Java', 'Go', 'SQL', 'PostgreSQL', 'SQLite']
    },
    {
      title: 'Performance and Infrastructure',
      description: 'High-performance computing, distributed communication, indexing, and device performance analysis.',
      items: ['C / C++', 'Linux', 'Kubernetes', 'Docker', 'Sockets', 'Elasticsearch', 'PyTorch', 'perf']
    }
  ]
};
