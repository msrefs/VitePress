<script setup>
defineProps({
  name: String,
  title: String,
  bio: String,
  avatar: String,
  links: Object
})
</script>

<template>
  <div class="team-member">
    <img :src="avatar" :alt="name" class="avatar">
    <h3>{{ name }}</h3>
    <p class="title">{{ title }}</p>
    <p class="bio">{{ bio }}</p>
    <div class="links" v-if="links">
      <a v-for="(url, name) in links" :href="url" target="_blank" :key="name">
        {{ name }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.team-member {
  text-align: center;
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  border: 3px solid var(--vp-c-brand);
}

h3 {
  margin: 0.5rem 0 0;
  color: var(--vp-c-text-1);
}

.title {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  margin: 0.25rem 0 1rem;
}

.bio {
  font-size: 0.9em;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.links {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.links a {
  font-size: 0.8em;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}
</style>