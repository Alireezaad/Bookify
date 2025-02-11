---
layout: home
title: Our Team
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/76526141?v=4',
    name: 'Alireza Abasi',
    title: 'Creator',
    links: [
        { icon: 'github', link: 'https://github.com/AlirezaAbasi' },
      { icon: 'telegram', link: 'https://t.me/vortex22' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/alireza-abasi-7000000000000000000/' },
      { icon: 'whatsapp', link: 'https://wa.me/989023007950' },
    ]
  },
  // Add more team members here
]
</script>

<div class="team-container" align="center">
  <h1>Say hello to our awesome team (Only me)</h1>
  <VPTeamMembers size="small" :members="members" />
</div>
