# Neotec 团队介绍

## 团队概览

创立于2022，基于好奇和热爱

平面设计，UI，UX及制造联合。
产品思维，创意，计划，创新，探索。
Minecraft整合包制作，修改和分发。
Minecraft服务器运营及其管理。

## 权力结构

### 技术
refs.

### 创意
Aaalu、Locky、DANstttt.

### 摄像
refs、Mainstage.

### 最高执行
refs.

### 团队管理
Aaalu、Locky、DANstttt、Mainstage.

### 团队成员
Morshuo、ink、Far apart、Samuel_Rodrigues、Khreacas.

<script setup>
import TeamMember from './components/TeamMember.vue'

const team = [
  {
    name: "Refs",
    title: "创始人",
    bio: "UI/UX Designer",
    avatar: "/images/team/refs.jpg",
    links: {
      GitHub: "https://github.com/msrefs",
    }
  },
  {
    name: "Locky",
    title: "管理层",
    bio: "Minecraft业务主管",
    avatar: "/images/team/locky.jpg"
  },
  {
    name: "MainStage",
    title: "管理层",
    bio: "创意师",
    avatar: "/images/team/mainstage.jpg"
  },
  {
    name: "Judge_Damnst",
    title: "管理层",
    bio: "创意师",
    avatar: "/images/team/judge_damnst.jpg"
  },
  {
    name: "Aaalu_ee",
    title: "管理层",
    bio: "创意师",
    avatar: "/images/team/aaalu_ee.jpg"
  },
  {
    name: "Morshuo",
    title: "成员",
    bio: "Neotec生态",
    avatar: "/images/team/morshuo.jpg",
    links: {
      GitHub: "https://github.com/mershuo",
    }
  },
  {
    name: "Samuel_Rodrigues",
    title: "成员",
    bio: "Neotec生态",
    avatar: "/images/team/samuel_rodrigues.jpg"
  },
  {
    name: "Khrecas",
    title: "成员",
    bio: "Neotec生态",
    avatar: "/images/team/khrecas.jpg"
  },
  {
    name: "Chicken_Brother",
    title: "嘉宾",
    bio: "Neotec支持者",
    avatar: "/images/team/cb.jpg"
  }
]
</script>

## 完整团队成员

<div class="team-grid">
  <TeamMember v-for="member in team" v-bind="member" :key="member.name" />
</div>

<style>
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}
</style>

## 团队愿景

面对未知的挑战，要始终保持好奇心，不断进步，不忘初心。

2024/08/09                                Written by msrefs