import type { Dictionary } from "./en";

// 舞种名称与组别沿用国际通用写法：全世界的选手都这样称呼它们，
// 翻译反而会造成混淆。
export const zh: Dictionary = {
  nav: {
    howItWorks: "如何运作",
    danceStyles: "舞种",
    foundingMembers: "创始会员",
    joinWaitlist: "加入名单",
    home: "DancePro 首页",
  },
  footer: {
    tagline: "为舞者而建的专业网络。",
  },
  home: {
    metaTitle: "DancePro — 找到你的下一位舞伴",
    metaDescription:
      "为 ballroom 与 latin 舞者打造的专业网络：舞伴、教练、比赛，以及舞鞋、舞裙与礼服的交易市场。加入创始会员。",
    heroTitle: "找到你的下一位舞伴。",
    heroSubtitle:
      "为 ballroom 与 latin 舞者打造的专业网络。舞伴、教练、比赛与交易市场，全都在一个地方。",
    heroCta: "成为创始会员",
    socialProof: "加入已在名单上的 {count} 名舞者。",

    ideaEyebrow: "它是什么样子",
    ideaTitle: "想象一个下午就找到舞伴。",
    ideaBody:
      "写下你跳什么、你的水平和你的角色，就能看到谁正在找这样的人——在你的舞蹈室，在世界的另一端，或者愿意搬到你所在的地方。不用在群里发帖，也不用等教练替你打听。一个以同样的方式训练、想要同样的胜利、同样的晚上有空的人。",

    pillarsEyebrow: "不只是找舞伴",
    pillarsTitle: "整个舞蹈世界，都在一处。",
    pillarsIntro:
      "找到舞伴是 DancePro 的起点，而不是终点。这是一个满足舞者各种需求的网络。",
    pillarPartnerTitle: "寻找舞伴",
    pillarPartnerBody:
      "按舞种、水平、角色和所在城市，寻找比赛、练习或社交舞的搭档。",
    pillarMarketTitle: "交易市场",
    pillarMarketBody:
      "其他舞者出售或出租的比赛礼服，以及你已经在穿的品牌所出的新舞鞋、舞裙和练习服。",
    pillarCoachingTitle: "教练",
    pillarCoachingBody:
      "教师写明自己教什么、在哪里教。学生按舞种、水平和城市找到他们。",
    pillarCompsTitle: "比赛",
    pillarCompsBody: "看看接下来有什么比赛、谁会参加，以及你正在为什么而训练。",

    stepsEyebrow: "它将如何运作",
    stepsTitle: "四个步骤，没有噪音。",
    step1Title: "创建你的档案",
    step1Body:
      "你的舞种、角色、水平和所在城市——舞伴真正需要知道的一切。",
    step2Title: "主动搜索，或被人发现",
    step2Body:
      "在附近或世界各地找到合适的舞者，也可以让他们来找到你。",
    step3Title: "建立连接",
    step3Body:
      "发送连接请求，对方接受。连接始终是双向的，所以每段对话都始于一个「愿意」。",
    step4Title: "在应用内交流",
    step4Body: "在一个地方安排练习、比赛与合作事宜。",
    stepsLink: "查看完整流程",

    benefitsEyebrow: "创始会员",
    benefitsTitle: "早来一步，你能得到什么。",
    benefitBadgeTitle: "创始会员徽章",
    benefitBadgeBody: "档案上的永久标记，表明你从一开始就在这里。",
    benefitAccessTitle: "抢先体验",
    benefitAccessBody: "在 DancePro 向所有人开放之前先行进入。",
    benefitPricingTitle: "特别首发价",
    benefitPricingBody: "只要你还是会员，价格就一直锁定。",
    benefitEventsTitle: "专属活动",
    benefitEventsBody: "创始会员聚会，以及由 DancePro 举办的舞会。",
    benefitVoteTitle: "对下一步的发言权",
    benefitVoteBody: "创始会员提出的需求会被优先实现。",

    formTitle: "加入创始会员",
    formSubtitle: "在我们向公众开放之前，先占好你的位置。",
  },
  signup: {
    firstName: "名字",
    email: "电子邮箱",
    danceStyles: "舞种",
    submit: "成为创始会员",
    submitting: "提交中...",
    footnote: "只需十秒。其余资料可以之后再补。",
    errName: "请填写名字。",
    errEmail: "请填写电子邮箱。",
    errEmailInvalid: "请输入有效的电子邮箱地址。",
    errStyles: "请至少选择一个舞种。",
    errGeneric: "提交表单时出了点问题，请稍后再试。",
  },
  profile: {
    inviteTitle: "想在上线当天就拿到第一批匹配结果吗？",
    inviteBody:
      "填写你在哪里跳舞、跳什么角色以及想找什么，我们会在你获得使用权限的那天，把合适的舞伴准备好。大约需要 15 秒。",
    inviteCta: "补充我的资料",
    savedTitle: "谢谢。",
    savedBody:
      "你的舞蹈资料已保存。我们会用它在上线前为你准备第一批匹配结果。",
    editCta: "修改我的资料",
    location: "城市",
    locationPlaceholder: "开始输入你所在的城市",
    locationSearching: "搜索中...",
    locationNoMatch: "没有匹配结果，我们会沿用你输入的内容。",
    role: "角色",
    level: "水平",
    levelPlaceholder: "选择你的水平",
    division: "你的组别",
    lookingFor: "我在找",
    save: "保存我的资料",
    saving: "保存中...",
    cancel: "取消",
    errLocation: "请填写城市，方便我们为你匹配附近的舞者。",
    errRole: "请选择你所跳的角色。",
    errGeneric: "暂时无法保存，请稍后再试。",
  },
  roles: {
    leader: "Leader",
    follower: "Follower",
    both: "两者皆可",
  },
  levels: {
    beginner: "初学",
    intermediate: "中级",
    advanced: "高级",
    competitive: "竞技",
    professional: "Professional",
  },
  lookingFor: {
    "Competition partner": "比赛舞伴",
    "Practice partner": "练习舞伴",
    "Social dance partner": "社交舞舞伴",
    "Performance partner": "表演舞伴",
    Coach: "教练",
    Students: "学生",
    Other: "其他",
  },
  welcome: {
    metaTitle: "欢迎",
    metaDescription: "你已在 DancePro 创始会员候补名单上。",
    youreIn: "你已加入",
    position: "你是第 {position} 位。",
    total: {
      one: "目前已有 {total} 名舞者加入创始会员名单。",
      few: "目前已有 {total} 名舞者加入创始会员名单。",
      many: "目前已有 {total} 名舞者加入创始会员名单。",
      other: "目前已有 {total} 名舞者加入创始会员名单。",
    },
    moveUp: "在名单上前进",
    copyLink: "复制链接",
    copied: "已复制！",
    tier3: "在名单上前进",
    tier10: "上线时优先使用",
    tier25: "VIP 创始身份",
    referralsLabel: "邀请 {count} 人",
    back: "返回 DancePro",
    notFoundTitle: "我们找不到这个链接",
    notFoundBody:
      "你的候补名单链接可能已过期或输入有误。请从首页加入创始会员。",
    tierMsgToFirst: "你已邀请 {referred}。再邀请 {remaining} 位就能在名单上前进。",
    tierMsgToPriority:
      "你已邀请 {referred}，并在名单上前进。再邀请 {remaining} 位即可获得上线优先使用权。",
    tierMsgToVip:
      "你已邀请 {referred}，并解锁了上线优先使用权。再邀请 {remaining} 位即可获得 VIP 创始身份。",
    tierMsgMax:
      "你已邀请 {referred}，并获得了 VIP 创始身份。感谢你和我们一起把它建起来。",
    dancers: {
      one: "名舞者",
      few: "名舞者",
      many: "名舞者",
      other: "名舞者",
    },
  },
  howItWorks: {
    metaTitle: "如何运作",
    metaDescription:
      "DancePro 如何连接 ballroom 与 latin 舞者：建立档案、主动搜索或被人发现、发送连接请求，并在应用内交流。",
    eyebrow: "如何运作",
    title: "DancePro 如何运作",
    intro:
      "DancePro 的每一部分都围绕着一件事：为你的训练与比赛目标找到合适的舞伴。",
    s1Title: "创建你的档案",
    s1Body:
      "建立一份专业的舞者档案：姓名、城市、你所跳的舞种、你的竞技水平，以及你想找什么样的搭档。",
    s2Title: "设定舞种、角色与水平",
    s2Body:
      "写得具体一些。Leader、Follower 或两者皆可。从初学到 Professional。International Latin 或 Argentine Tango。档案越准确，你找到的舞者就越合适。",
    s3Title: "搜索合适的舞者，或被人发现",
    s3Body:
      "按舞种、角色、水平和所在地筛选浏览符合你要求的舞者——或者干脆让档案保持开放，让对的人来找到你。",
    s4Title: "发送连接请求",
    s4Body:
      "直接而专业地联系对方。在回复之前，他们就能看到你跳什么、在找什么。",
    s5Title: "对方接受",
    s5Body:
      "连接始终是双向的。未经同意，没有人会进入你的人脉，也没有人能看到你的资料。",
    s6Title: "你们在应用内交流",
    s6Body:
      "建立连接之后，在一个为舞者而做的地方安排练习时间、比赛计划与各项事务。",
    cta: "成为创始会员",
  },
  danceStyles: {
    metaTitle: "舞种",
    metaDescription:
      "在 DancePro 上为 International Latin、International Ballroom、American Smooth、American Rhythm、Argentine Tango 与社交舞寻找舞伴。",
    eyebrow: "项目",
    title: "DancePro 上的舞种",
    intro:
      "把你的舞种填得准确一些，DancePro 就能帮你找到同样跳这些舞的搭档——无论你追求的是比赛名次，还是周五晚上的一场社交舞。",
    catInternational: "International Style",
    catInternationalBlurb: "全世界通行的国际竞技标准。",
    catAmerican: "American Style",
    catAmericanBlurb: "美式教程，编舞更开放，也有更多单人动作。",
    catOther: "社交舞与拉丁双人舞",
    catOtherBlurb: "社交舞池、舞会，以及教程之外的一切。",
    styleDescriptions: {
      "International Latin":
        "Cha Cha、Samba、Rumba、Paso Doble 与 Jive——按国际比赛规则跳的拉丁五项，建立在凌厉的技术与节奏的精确之上。",
      "International Ballroom":
        "Waltz、Tango、Viennese Waltz、Foxtrot 与 Quickstep，以闭握姿势起舞，那种流畅而移动的架形正是竞技摩登中最古典的一项。",
      "American Smooth":
        "Waltz、Tango、Foxtrot 与 Viennese Waltz 的美式解读，把开放编舞与单人动作织进闭握的架形之中。",
      "American Rhythm":
        "Cha Cha、Rumba、East Coast Swing、Bolero 与 Mambo，以美式教程那种扎实而富有表现力的风格起舞。",
      "Argentine Tango":
        "源自布宜诺斯艾利斯米隆加的即兴探戈，以拥抱引带，看重的是连接与音乐性，而非固定的套路。",
      "Social Dance":
        "Salsa、Bachata、Merengue 以及社交舞池上的其他舞种——为了这一夜而跳，不是为了评分表，引带与跟随都在当下完成。",
      Other:
        "West Coast Swing、Zouk、Country Two-Step，以及其他任何双人舞。注册时告诉我们你跳什么。",
    },
    closing:
      "没有找到你跳的舞种？还是先加入吧——告诉我们你跳什么，从一开始就参与塑造这个网络。",
    cta: "成为创始会员",
  },
  foundingMembers: {
    metaTitle: "创始会员",
    metaDescription:
      "DancePro 创始会员能得到什么，为什么社群优先，以及为什么在上线前加入比之后更划算。",
    eyebrow: "这个计划",
    title: "创始会员计划",
    intro:
      "创始会员是在 DancePro 向公众开放之前就加入的舞者。以下是它的含义，以及成为其中一员你能得到什么。",
    firstTitle: "「第一批」真正意味着什么",
    firstPara1:
      "创始会员塑造着 DancePro 将成为什么样子——它在哪些城市最强、哪些舞种代表性最好、接下来做什么。现在加入，你不只是身处这个网络之中，你本身就是它值得加入的理由之一。",
    firstPara2:
      "新来的舞者最先看到的档案里就有你，还带着一枚此后不会再发放的徽章。",
    perksTitle: "创始会员能得到什么",
    perkBadgeTitle: "创始会员徽章",
    perkBadgeBody:
      "档案上的永久标记，只要你还是会员就一直显示——证明你从第一天起就在这里。",
    perkAccessTitle: "抢先体验",
    perkAccessBody: "比所有人都更早用上 DancePro。",
    perkPricingTitle: "特别首发价",
    perkPricingBody: "为创始会员锁定，只要你的会员资格保持有效就一直有效。",
    perkEventsTitle: "专属活动",
    perkEventsBody:
      "创始会员聚会、舞会，以及在其他人看到之前先睹为快的新功能。",
    perkVoteTitle: "对下一步的发言权",
    perkVoteBody:
      "创始会员提出的需求会被优先实现。由你来告诉我们这个网络还缺什么。",
    laterTitle: "为什么现在胜过以后",
    laterBody:
      "创始会员身份在 DancePro 向公众开放的那天关闭——事后无法再获得。首发价、徽章，以及对开发方向的发言权，都只属于这一批人。之后加入的所有人都从零开始。",
    cta: "成为创始会员",
  },
  language: {
    label: "语言",
  },
};
