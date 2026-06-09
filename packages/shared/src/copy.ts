export type Locale = "en" | "zh"

export const headerCopy = {
  en: {
    method: "How it works",
    vision: "Product",
    open: "Open msky",
    light: "Use light theme",
    dark: "Use dark theme",
    language: "切换为中文",
  },
  zh: {
    method: "使用方式",
    vision: "产品",
    open: "打开 msky",
    light: "切换浅色主题",
    dark: "切换深色主题",
    language: "Switch to English",
  },
} as const

export const homeCopy = {
  en: {
    heroLabel: "A short list for the present tense",
    heroTitle: "Do one thing. Then another.",
    heroBody:
      "A quiet place to hold what matters now, and let finished things leave.",
    open: "Open msky",
    imageAlt:
      "A handwritten task note, mechanical pencil, and lime acrylic block on a brushed metal desk",
    imageCaption: "A list should reduce pressure, not become another source of it.",
    methodTitle: "Not a system to maintain.",
    methodBody:
      "msky keeps the interaction deliberately small. There is less to configure, so there is more room to begin.",
    steps: [
      { title: "Write it down", body: "Move the unfinished thought out of your head." },
      { title: "See what remains", body: "One honest list, without categories competing for attention." },
      { title: "Close the loop", body: "Mark it done. Let the interface get quieter." },
    ],
    specimenTitle: "This is most of it.",
    specimenBody:
      "The product does not need a dashboard to explain itself. Add a task, finish it, remove it.",
    input: "What needs to be done?",
    add: "Add",
    sampleTasks: [
      "Review the product flow",
      "Send the final notes",
      "Book one quiet hour",
    ],
    active: "3 active",
    done: "1 closed",
    notesAlt:
      "A stack of deckled paper notes with a black clip and lime acrylic tab on a dark metal shelf",
    quote: "Finished work should leave the room.",
    quoteBody:
      "History remains available, but it does not need to occupy the same visual weight as today.",
    finalTitle: "Start with the next thing.",
    footer: "msky / a quieter list",
  },
  zh: {
    heroLabel: "只为当下保留的一张短清单",
    heroTitle: "先做一件，再做下一件。",
    heroBody: "安静地放下此刻重要的事，也让已经完成的事离开。",
    open: "打开 msky",
    imageAlt: "金属桌面上的手写任务纸、自动铅笔和荧光绿色亚克力块",
    imageCaption: "清单应该减少压力，而不是成为新的压力来源。",
    methodTitle: "它不是一套需要维护的系统。",
    methodBody:
      "msky 有意把交互保持得很小。少一点配置，才有更多空间真正开始。",
    steps: [
      { title: "先写下来", body: "把还没完成的念头从脑海里拿出来。" },
      { title: "看见剩下的事", body: "只保留一张诚实的清单，不让分类争夺注意力。" },
      { title: "完成闭环", body: "标记完成，让界面跟着安静下来。" },
    ],
    specimenTitle: "产品大部分就是这些。",
    specimenBody:
      "它不需要一张仪表盘来解释自己。添加一件事，完成它，然后移除它。",
    input: "现在需要做什么？",
    add: "添加",
    sampleTasks: ["检查产品流程", "发出最后说明", "留出一小时安静时间"],
    active: "3 件待处理",
    done: "1 件已完成",
    notesAlt: "深色金属架上的毛边纸张、黑色夹子和荧光绿色亚克力标签",
    quote: "完成的工作，应该离开房间。",
    quoteBody:
      "历史仍然可以找到，但它不需要和今天的事情占据相同的视觉重量。",
    finalTitle: "从下一件事开始。",
    footer: "msky / 一张更安静的清单",
  },
} as const

export const todosCopy = {
  en: {
    eyebrow: "Personal workspace",
    title: "The open loops.",
    subtitle: "Keep the field small enough to see clearly.",
    placeholder: "Add a thought, task, or loose end...",
    add: "Add",
    active: "active",
    done: "closed",
    focus: "Current field",
    focusBody: "Choose one useful move. The rest can wait outside the center.",
    emptyTitle: "The field is clear.",
    emptyBody: "Add the first thing that deserves your attention.",
    loading: "Reading the field...",
    error: "The workspace could not be reached.",
    retry: "Try again",
    note: "Nothing here needs to become a streak.",
    backend: "Backend",
  },
  zh: {
    eyebrow: "个人工作空间",
    title: "还没有闭合的事。",
    subtitle: "让视野保持足够小，才能真正看清。",
    placeholder: "写下一条想法、任务或还没处理的事...",
    add: "添加",
    active: "待处理",
    done: "已闭合",
    focus: "当前专注场",
    focusBody: "只选择一个有用的动作，其他事情暂时留在中心之外。",
    emptyTitle: "此刻没有杂音。",
    emptyBody: "添加第一件真正值得你注意的事。",
    loading: "正在读取...",
    error: "暂时无法连接工作空间。",
    retry: "重新尝试",
    note: "这里的任何事情，都不需要变成连续打卡。",
    backend: "后端",
  },
} as const
