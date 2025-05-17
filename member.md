# 团队成员

<script setup>
import TeamMember from './components/TeamMember.vue'

const team = [
  {
    name: "Refs",
    title: "创始人",
    bio: "UI/UX Designer",
    avatar: "/images/team/refs.jpg", // 确保图片路径正确
    links: {
      GitHub: "https://github.com/msrefs",
    }
  },
    {
    name: "Locky",
    title: "管理层",
    bio: "Minecraft业务主管",
    avatar: "/images/team/locky.jpg", // 确保图片路径正确
  },
    {
    name: "MainStage",
    title: "管理层",
    bio: "创意师",
    avatar: "/images/team/mainstage.jpg", // 确保图片路径正确
  },
    {
    name: "Judge_Damnst",
    title: "管理层",
    bio: "创意师",
    avatar: "/images/team/judge_damnst.jpg", // 确保图片路径正确
  },
    {
    name: "Aaalu_ee",
    title: "管理层",
    bio: "创意师",
    avatar: "/images/team/aaalu_ee.jpg", // 确保图片路径正确
  },
    {
    name: "Morshuo",
    title: "成员",
    bio: "Neotec生态",
    avatar: "/images/team/morshuo.jpg", // 确保图片路径正确
    links: {
      GitHub: "https://github.com/mershuo",
    }
  },
    {
    name: "Samuel_Rodrigues",
    title: "成员",
    bio: "Neotec生态",
    avatar: "/images/team/samuel_rodrigues.jpg", // 确保图片路径正确
  },
    {
    name: "Khrecas",
    title: "成员",
    bio: "Neotec生态",
    avatar: "/images/team/khrecas.jpg", // 确保图片路径正确
  },
    {
    name: "Chicken_Brother",
    title: "嘉宾",
    bio: "Neotec支持者",
    avatar: "/images/team/cb.jpg", // 确保图片路径正确
  },
  
]
</script>

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