const contentSections = [
  {
    id: "game-intro",
    title: "游戏介绍",
    tags: ["爱游戏", "新手入门", "玩法说明"],
    content: "欢迎来到爱游戏世界，这里汇聚了各类精彩游戏玩法。"
  },
  {
    id: "strategy-guide",
    title: "攻略指南",
    tags: ["爱游戏", "攻略", "技巧"],
    content: "掌握核心技巧，快速提升游戏体验。"
  },
  {
    id: "community",
    title: "社区动态",
    tags: ["爱游戏", "社区", "活动"],
    content: "与爱游戏玩家一起分享你的游戏心得。"
  },
  {
    id: "news-updates",
    title: "新闻更新",
    tags: ["爱游戏", "公告", "版本"],
    content: "第一时间了解爱游戏的最新消息和版本更新。"
  }
];

const keywordTags = [
  "策略",
  "角色扮演",
  "休闲",
  "竞技",
  "多人合作",
  "冒险",
  "模拟",
  "射击",
  "益智",
  "动作"
];

const siteUrl = "https://zhweb-aiyouxi.com.cn";
const siteName = "爱游戏";

function filterSectionsByTag(tag) {
  const results = [];
  for (let i = 0; i < contentSections.length; i++) {
    const section = contentSections[i];
    const lowerTag = tag.toLowerCase();
    for (let j = 0; j < section.tags.length; j++) {
      if (section.tags[j].toLowerCase() === lowerTag) {
        results.push(section);
        break;
      }
    }
  }
  return results;
}

function searchContent(query) {
  const lowerQuery = query.toLowerCase();
  const matchedSections = [];
  for (let i = 0; i < contentSections.length; i++) {
    const section = contentSections[i];
    if (
      section.title.toLowerCase().includes(lowerQuery) ||
      section.content.toLowerCase().includes(lowerQuery)
    ) {
      matchedSections.push(section);
    } else {
      for (let j = 0; j < section.tags.length; j++) {
        if (section.tags[j].toLowerCase().includes(lowerQuery)) {
          matchedSections.push(section);
          break;
        }
      }
    }
  }
  return matchedSections;
}

function getRelatedTags(sectionId, maxTags) {
  maxTags = maxTags || 3;
  for (let i = 0; i < contentSections.length; i++) {
    if (contentSections[i].id === sectionId) {
      const existingTags = contentSections[i].tags;
      const tagPool = keywordTags.filter(t => !existingTags.includes(t));
      const shuffled = tagPool.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, maxTags);
    }
  }
  return [];
}

function displaySectionSummary(section) {
  return {
    name: section.title,
    snippet: section.content.substring(0, 50) + "...",
    tags: section.tags,
    url: siteUrl + "/#" + section.id
  };
}

function getSiteInfo() {
  return {
    name: siteName,
    url: siteUrl,
    sectionsCount: contentSections.length,
    tagsCount: keywordTags.length
  };
}