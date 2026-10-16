// 内容依据：个人简历、本人确认的任职信息及近期工程记录。
window.PROFILE = {
  "name": "韩明浩",
  "englishName": "Minghao Han",
  "role": "高级算法工程师",
  "organization": "Momenta",
  "email": "mhow.alexhan@gmail.com",
  "github": "https://github.com/MinghaoHan",
  "interests": [
    "Agent Infrastructure",
    "Developer Tools",
    "Evaluation & Memory"
  ],
  "bio": [
    "目前在 Momenta 担任高级算法工程师，主要建设面向研发场景的 AI Agent 与工具系统，工作涵盖多智能体调度、运行可靠性、工具使用分析，以及反馈驱动的持续改进。",
    "硕士毕业于新加坡国立大学计算机科学专业，本科就读于南京大学软件工程专业。此前在华为从事 Agent 基础设施与终端性能优化，曾在腾讯微信事业群参与高性能图计算引擎开发。"
  ],
  "projects": [
    {
      "id": "engineering-agents",
      "title": "研发多智能体系统",
      "category": "Agent 基础设施",
      "period": "2026.06 — 至今",
      "context": "Momenta · 研发工具",
      "summary": "建设面向泊车研发的统一智能助手，连接问题分析、版本构建、测试仿真与数据查询等领域能力，完善从任务派发到结果交付的运行链路。",
      "tags": [
        "TypeScript",
        "Python",
        "Multi-Agent",
        "MCP"
      ],
      "metrics": [],
      "details": [
        [
          "任务路由与会话管理",
          "预加载路由信息，将路由与子 Agent 启动合并为受校验的工具入口；完善话题续接、上下文传递和会话隔离。"
        ],
        [
          "可靠执行与交付",
          "建设统一结果出口、回执确认与重复消息抑制机制，处理异步任务完成后结果丢失或重复回复的问题。"
        ],
        [
          "工具与业务流程接入",
          "接入研发数据、构建与测试工具，通过参数选择、操作确认和异步状态回传衔接对话与实际任务。"
        ],
        [
          "发布与故障治理",
          "结合运行轨迹和回放测试定位故障，增加发布及启动版本校验，降低旧版本覆盖已上线修复的风险。"
        ]
      ]
    },
    {
      "id": "agent-analytics",
      "title": "工具与 Agent 使用看板",
      "category": "研发工具",
      "period": "2026.08 — 至今",
      "context": "Momenta · 可观测性与使用分析",
      "summary": "聚合多服务器、不同 Agent 运行时的使用数据，按用户、Agent 与 Skill 分析调用、活跃趋势和 Token 用量，为能力维护与迭代提供依据。",
      "tags": [
        "Node.js",
        "WebSocket",
        "Incremental Cache",
        "SVG"
      ],
      "metrics": [
        [
          "17s → 0.2s",
          "原有数据集的统计热重建"
        ]
      ],
      "details": [
        [
          "统计归属与数据质量",
          "关联父子任务和派发结果，排除失败派发、重复归档及无效占位；统一跨节点身份、日期窗口与活跃用户去重口径。"
        ],
        [
          "增量计算与响应性能",
          "通过后台刷新、文件级增量缓存与并发构建去重减少全量解析，保持刷新期间的查询可用性。指标对应记录中的原有日志数据集与热缓存测试场景。"
        ],
        [
          "多来源分析",
          "支持按来源、用户、Agent 与 Skill 查看使用明细；明确区分未采集、来源不可用与实际零调用，避免缺失数据被误读。"
        ]
      ]
    },
    {
      "id": "agent-improvement",
      "title": "反馈驱动的 Agent 自进化",
      "category": "Agent 记忆",
      "period": "2026.06 — 至今",
      "context": "Momenta · 经验沉淀与复用",
      "summary": "建设基于反馈与记忆的持续改进机制，将用户纠正、执行错误和处理经验沉淀为结构化记录，供后续任务按 Agent 复用。",
      "tags": [
        "SQLite",
        "Bootstrap Hook",
        "Memory",
        "Feedback"
      ],
      "metrics": [],
      "details": [
        [
          "结构化经验管理",
          "按纠正、错误和最佳实践记录经验，保留目标 Agent、来源会话与时间，并同步到协作平台。"
        ],
        [
          "跨会话复用",
          "在子 Agent 启动时读取面向该 Agent 的近期经验并注入上下文，使后续任务能够参考历史问题和处理方式。"
        ],
        [
          "实现边界",
          "当前机制作用于经验记录与上下文复用，不涉及模型参数训练；改进效果仍需结合具体任务与评测验证。"
        ]
      ]
    },
    {
      "id": "agent-evaluation",
      "title": "Agent 评测与执行效率优化",
      "category": "Agent 评测",
      "period": "2026.09 — 至今",
      "context": "Momenta · 质量与性能",
      "summary": "整理业务问题、参考答案和判分规则，接入端到端评测；结合执行轨迹拆解模型、工具和检索开销，持续优化任务执行策略。",
      "tags": [
        "Evaluation",
        "Trace Analysis",
        "Skill Engineering",
        "Python"
      ],
      "metrics": [],
      "details": [
        [
          "评测集与结果对账",
          "维护业务评测集，收集逐题答案和执行结果，区分任务失败、环境错误与缺失结果；在相同运行条件下比较变化。"
        ],
        [
          "执行策略优化",
          "针对重复检索和多轮调用，采用文档优先、限定检索范围与检索预算等策略，降低无效工具访问。"
        ],
        [
          "验收口径",
          "分别检查响应耗时、证据质量与答案完整性，避免把单次速度达标等同于整体正确性或线上性能保证。"
        ]
      ]
    },
    {
      "id": "home-agent",
      "title": "智慧家居 AI Agent",
      "english": "An agent that understands home.",
      "category": "Agent 应用",
      "period": "2025.06 起 · 华为期间",
      "context": "华为 toC 业务",
      "art": "home",
      "summary": "把复杂的家庭场景意图转化为可执行任务。基于主从 Agent 架构，贯通规划、工具调用、跨会话记忆与生成式界面。",
      "tags": [
        "ReAct",
        "MCP",
        "RAG",
        "OpenUI"
      ],
      "metrics": [
        [
          "94%",
          "黑盒用例准确率"
        ],
        [
          "96%",
          "工具调用准确率"
        ],
        [
          "< 200ms",
          "平均首字时延"
        ]
      ],
      "details": [
        [
          "推理与任务编排",
          "采用 Plan-Execute-Replan 机制分解复杂意图；子 Agent 通过 NL2Code 编排任务，结合 ReAct 动态调用工具。"
        ],
        [
          "标准化工具接入",
          "实现 MCP 工具注册、Schema 校验与动态发现，改善大模型工具调用失败问题。"
        ],
        [
          "记忆与领域知识",
          "设计长短时记忆分层，注入用户画像与偏好；结合向量数据库、专家 Skill 动态上云与在线更新。"
        ],
        [
          "生成式交互",
          "集成 OpenUI，根据 Agent 返回的结构化数据动态渲染前端界面，优化流式交互体验。"
        ]
      ]
    },
    {
      "id": "a2a",
      "title": "A2A 多智能体协作系统",
      "english": "Independent agents. Shared progress.",
      "category": "Agent 基础设施",
      "period": "2026.01 — 2026.04",
      "context": "华为内源创新项目",
      "art": "agents",
      "summary": "让 3 个独立异构 Agent 协作、互审并共同迭代，围绕任务发现、交付与记忆治理建立持续协作机制。",
      "tags": [
        "A2A",
        "MCP Server",
        "HTTP Callback",
        "SQLite"
      ],
      "metrics": [
        [
          "3",
          "独立异构 Agent"
        ],
        [
          "异步",
          "主动触达与任务分发"
        ]
      ],
      "details": [
        [
          "异步协作通信",
          "设计 MCP server 通信模块，通过 HTTP callback 和消息队列实现 Agent 间主动触达与异步分发。"
        ],
        [
          "从发现到交付",
          "以 Discovery Loop 收敛问题和决策，以 Delivery Loop 与测试 Skill 推进实现和验证。"
        ],
        [
          "持续记忆治理",
          "增量摘要决策、结构化沉淀经验，使用 SQLite 建立索引，并结合双路召回检索，让经验可复用。"
        ]
      ]
    },
    {
      "id": "retrieval",
      "title": "分布式高性能广告检索引擎",
      "english": "Built for throughput.",
      "category": "高性能系统",
      "period": "2023.06 — 2023.07",
      "context": "阿里挑战赛",
      "art": "engine",
      "summary": "从零搭建覆盖召回、排序和计价的广告大数据引擎，在数据结构、索引压缩与网络通信之间持续优化性能。",
      "tags": [
        "C++",
        "倒排索引",
        "UDP",
        "perf"
      ],
      "metrics": [
        [
          "10,000+",
          "系统 QPS"
        ]
      ],
      "details": [
        [
          "紧凑数据结构",
          "通过值域映射、比特压缩与倒排索引压缩数据，优化内存占用与长尾表现。"
        ],
        [
          "低开销通信",
          "使用 perf 定位瓶颈，采用自定义 UDP、异步处理和线程池优化通信。"
        ]
      ]
    }
  ],
  "work": [
    {
      "period": "2026.06.10 — 至今",
      "title": "Momenta",
      "role": "高级算法工程师",
      "detail": "AI Agent · 研发工具与工程效率",
      "bullets": [
        "建设泊车研发多智能体系统，连接领域工具，完善任务路由、会话管理、异步执行和结果交付。",
        "建设多来源工具使用看板，统一用户、Agent 与 Skill 的统计归属，优化数据聚合与查询性能。",
        "建设反馈驱动的经验沉淀与跨会话复用机制，并通过业务评测和执行轨迹分析推进质量改进。"
      ]
    },
    {
      "period": "2024.02 入职",
      "title": "华为技术有限公司",
      "role": "高级软件工程师",
      "detail": "此前经历 · Agent Infra 研发与终端性能优化",
      "bullets": [
        "参与 ReAct Multi-Agent 框架开发，主导意图识别框架、Harness 工程、推理编排引擎与 AI 安全防护网。",
        "落地事件订阅机制与 skill-hub 服务，通过框架 SDK 化和责任链设计支持领域智能体自构建。",
        "构建 QCC 圈、可进化排障工具链并开展经验分享，特性交付周期缩短 40%。",
        "担任 Mate 80 特性负责人、Mate XTs 性能负责人，推进运行时隔离、内存管理、shader 端云优化、动态 Vsync 与场景化调频。"
      ]
    },
    {
      "period": "2021.07 — 2021.10",
      "title": "腾讯 · 微信事业群",
      "role": "后端工程师实习",
      "detail": "视频号高性能图计算引擎",
      "bullets": [
        "参与 10 亿级关系网络计算引擎开发，引入 ClickHouse 精细化聚合与模板编程。",
        "自定义列式存储结构，通过 AST 解析优化图查询语法，并构建团队测试体系。"
      ]
    }
  ],
  "education": [
    {
      "period": "2022.11 — 2024.01",
      "title": "新加坡国立大学",
      "role": "计算机科学 · 硕士",
      "detail": "Computer Science · A Level"
    },
    {
      "period": "2018.09 — 2022.07",
      "title": "南京大学",
      "role": "软件工程 · 本科",
      "detail": "GPA 前 20%"
    },
    {
      "period": "2021.01 — 2021.03",
      "title": "英国帝国理工学院",
      "role": "Data Science & Machine Learning · 交换",
      "detail": "优秀交换生"
    }
  ],
  "skills": [
    {
      "number": "01",
      "title": "Agent 系统",
      "subtitle": "从推理到行动",
      "items": [
        "LangChain",
        "ReAct",
        "RAG",
        "Harness Engineering",
        "MCP",
        "A2A",
        "Skill / Prompt 优化",
        "Agent Evaluation"
      ],
      "description": "多智能体调度、工具协议、知识接入、记忆治理与任务评测。"
    },
    {
      "number": "02",
      "title": "全栈开发",
      "subtitle": "从系统到交互",
      "items": [
        "TypeScript",
        "Python",
        "Node.js",
        "Java",
        "Go",
        "SQL",
        "PostgreSQL",
        "SQLite"
      ],
      "description": "后端服务、工具集成、交互界面、使用分析与工程化交付。"
    },
    {
      "number": "03",
      "title": "性能与基础设施",
      "subtitle": "从分析到优化",
      "items": [
        "C / C++",
        "Linux",
        "Kubernetes",
        "Docker",
        "Socket",
        "Elasticsearch",
        "PyTorch",
        "perf"
      ],
      "description": "高性能计算、分布式通信、数据索引与终端性能分析。"
    }
  ]
};
