// 主页内容来源：用户提供的简历。更新经历和项目时优先修改此文件。
window.PROFILE = {
 name: '韩明浩', englishName: 'Minghao Han', role: 'AI Agent · 全栈工程师', organization: '华为 · 高级软件工程师',
 email: 'mhow.alexhan@gmail.com', github: 'https://github.com/MinghaoHan',
 interests: ['Agent Infrastructure', 'Multi-Agent Systems', 'Full-stack Engineering'],
 bio: [
  '你好，我是韩明浩，目前在华为担任高级软件工程师，专注于 AI Agent 基础设施与全栈开发。我关注如何让智能体从「能回答」走向「能可靠地完成任务」，把推理编排、工具调用、记忆与领域知识连接成完整的工程系统。',
  '我拥有新加坡国立大学计算机科学硕士学位、本科毕业于南京大学软件工程专业，曾在腾讯微信事业群参与高性能图计算引擎开发。我的实践横跨多智能体协作、生成式 UI、分布式系统与终端性能优化。'
 ],
 projects: [
  {id:'home-agent',title:'智慧家居 AI Agent',english:'An agent that understands home.',category:'Agent 应用',period:'2025.06 — 至今',context:'华为 toC 业务',art:'home',summary:'把复杂的家庭场景意图转化为可执行任务。基于主从 Agent 架构，贯通规划、工具调用、跨会话记忆与生成式界面。',tags:['ReAct','MCP','RAG','OpenUI'],metrics:[['94%','黑盒用例准确率'],['96%','工具调用准确率'],['< 200ms','平均首字时延']],details:[['推理与任务编排','采用 Plan-Execute-Replan 机制分解复杂意图；子 Agent 通过 NL2Code 编排任务，结合 ReAct 动态调用工具。'],['标准化工具接入','实现 MCP 工具注册、Schema 校验与动态发现，改善大模型工具调用失败问题。'],['记忆与领域知识','设计长短时记忆分层，注入用户画像与偏好；结合向量数据库、专家 Skill 动态上云与在线更新。'],['生成式交互','集成 OpenUI，根据 Agent 返回的结构化数据动态渲染前端界面，优化流式交互体验。']]},
  {id:'a2a',title:'A2A 多智能体协作系统',english:'Independent agents. Shared progress.',category:'Agent 基础设施',period:'2026.01 — 2026.04',context:'华为内源创新项目',art:'agents',summary:'让 3 个独立异构 Agent 协作、互审并共同迭代，围绕任务发现、交付与记忆治理建立持续协作机制。',tags:['A2A','MCP Server','HTTP Callback','SQLite'],metrics:[['3','独立异构 Agent'],['异步','主动触达与任务分发']],details:[['异步协作通信','设计 MCP server 通信模块，通过 HTTP callback 和消息队列实现 Agent 间主动触达与异步分发。'],['从发现到交付','以 Discovery Loop 收敛问题和决策，以 Delivery Loop 与测试 Skill 推进实现和验证。'],['持续记忆治理','增量摘要决策、结构化沉淀经验，使用 SQLite 建立索引，并结合双路召回检索，让经验可复用。']]},
  {id:'retrieval',title:'分布式高性能广告检索引擎',english:'Built for throughput.',category:'高性能系统',period:'2023.06 — 2023.07',context:'阿里挑战赛',art:'engine',summary:'从零搭建覆盖召回、排序和计价的广告大数据引擎，在数据结构、索引压缩与网络通信之间持续优化性能。',tags:['C++','倒排索引','UDP','perf'],metrics:[['10,000+','系统 QPS']],details:[['紧凑数据结构','通过值域映射、比特压缩与倒排索引压缩数据，优化内存占用与长尾表现。'],['低开销通信','使用 perf 定位瓶颈，采用自定义 UDP、异步处理和线程池优化通信。']]}
 ],
 work:[
  {period:'2024.02 — 至今',title:'华为技术有限公司',role:'高级软件工程师',detail:'Agent Infra 研发 · 特性与性能优化',bullets:['参与 ReAct Multi-Agent 框架开发，主导意图识别框架、Harness 工程、推理编排引擎与 AI 安全防护网。','落地事件订阅机制与 skill-hub 服务，通过框架 SDK 化和责任链设计支持领域智能体自构建。','构建 QCC 圈、可进化排障工具链并开展经验分享，特性交付周期缩短 40%。','担任 Mate 80 特性负责人、Mate XTs 性能负责人，推进运行时隔离、内存管理、shader 端云优化、动态 Vsync 与场景化调频。']},
  {period:'2021.07 — 2021.10',title:'腾讯 · 微信事业群',role:'后端工程师实习',detail:'视频号高性能图计算引擎',bullets:['参与 10 亿级关系网络计算引擎开发，引入 ClickHouse 精细化聚合与模板编程。','自定义列式存储结构，通过 AST 解析优化图查询语法，并构建团队测试体系。']}
 ],
 education:[
  {period:'2022.11 — 2024.01',title:'新加坡国立大学',role:'计算机科学 · 硕士',detail:'Computer Science · A Level'},
  {period:'2018.09 — 2022.07',title:'南京大学',role:'软件工程 · 本科',detail:'GPA 前 20%'},
  {period:'2021.01 — 2021.03',title:'英国帝国理工学院',role:'Data Science & Machine Learning · 交换',detail:'优秀交换生'}
 ],
 skills:[
  {number:'01',title:'Agent 系统',subtitle:'从推理到行动',items:['LangChain','ReAct','RAG','Harness Engineering','MCP','A2A','Skill / Prompt 优化'],description:'智能体框架、推理编排、工具协议、知识接入与记忆治理。'},
  {number:'02',title:'全栈开发',subtitle:'从系统到交互',items:['TypeScript','Python','Java','Go','SQL','OpenUI'],description:'后端服务、生成式 UI、流式交互与工程化交付。'},
  {number:'03',title:'性能与基础设施',subtitle:'从分析到优化',items:['C / C++','Linux','Kubernetes','Docker','Socket','Elasticsearch','PyTorch','perf'],description:'高性能计算、分布式通信、数据索引与终端性能分析。'}
 ]
};
