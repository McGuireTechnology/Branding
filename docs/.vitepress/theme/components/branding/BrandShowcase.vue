<script setup>
const pillars = [
  {
    title: 'Operational clarity',
    text: 'Make complex systems visible, legible, and easier to manage.'
  },
  {
    title: 'Governance and control',
    text: 'Help teams understand ownership, access, policy, risk, and change.'
  },
  {
    title: 'Automation and scale',
    text: 'Reduce repeated work and build processes that can grow without becoming fragile.'
  }
]

const swatches = [
  ['Midnight Flint', '#030303'],
  ['Basalt', '#0A0A0A'],
  ['Limestone', '#ECE7DE'],
  ['Bluff Sand', '#F4F0EA'],
  ['Current Blue', '#2563EB'],
  ['Ozark Green', '#16A34A'],
  ['Golden Hour', '#F59E0B'],
  ['Cardinal Red', '#EF4444'],
  ['Confluence Blue', '#0EA5E9'],
  ['Osage Clay', '#A16207'],
  ['Forged Copper', '#C2410C']
]
</script>

<template>
  <section class="brand-showcase" aria-labelledby="brand-showcase-title">
    <div class="brand-showcase__hero">
      <div class="brand-showcase__copy">
        <img
          class="brand-showcase__lockup"
          src="/brand-assets/logo-lockup-dark.svg"
          alt="McGuire Technology"
        >
        <h1 id="brand-showcase-title">Modern technology. Midwest roots.</h1>
        <p>
          Solutions inspired by Missouri's rivers, forests, and landscapes,
          built for operational clarity, durable systems, and responsible scale.
        </p>
        <div class="brand-showcase__actions">
          <a href="/visual-identity">Explore Visual Identity</a>
          <a href="/messaging">Read Messaging</a>
        </div>
      </div>

      <div class="brand-showcase__signal" aria-label="Brand identity preview">
        <img src="/brand-assets/brand-system-board.svg" alt="">
      </div>
    </div>

    <div class="brand-showcase__promise">
      <strong>Build systems that are easier to understand, operate, and trust.</strong>
      <span>Technology that flows. Partnerships that last.</span>
    </div>

    <div class="brand-showcase__pillars" aria-label="Brand pillars">
      <article v-for="pillar in pillars" :key="pillar.title">
        <strong>{{ pillar.title }}</strong>
        <p>{{ pillar.text }}</p>
      </article>
    </div>

    <div class="brand-showcase__system">
      <section class="brand-showcase__asset">
        <h2>Identity System</h2>
        <p>
          A routed M mark, practical wordmark, warm dark surfaces, and a
          Missouri-rooted palette create a brand that feels capable and grounded.
        </p>
        <div class="brand-showcase__asset-grid">
          <img src="/brand-assets/logo-mark.svg" alt="McGuire Technology routed M mark">
          <img src="/brand-assets/app-icon.svg" alt="McGuire Technology app icon">
          <img src="/brand-assets/logo-lockup-light.svg" alt="McGuire Technology light lockup">
        </div>
      </section>

      <section class="brand-showcase__palette">
        <h2>Palette</h2>
        <div class="brand-showcase__swatches">
          <span
            v-for="[name, color] in swatches"
            :key="name"
            :style="{ backgroundColor: color }"
            :title="name"
          />
        </div>
      </section>
    </div>

    <div class="brand-showcase__examples">
      <img src="/brand-assets/use-case-dashboard.svg" alt="Operational dashboard example">
      <img src="/brand-assets/use-case-signage.svg" alt="Architectural signage example">
    </div>
  </section>
</template>
