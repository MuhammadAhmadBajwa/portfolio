<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { experience } from '$lib/data/portfolio';
  import ExperienceCard from './ExperienceCard.svelte';
</script>

<section id="experience" class="py-24 bg-card">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Motion
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">Experience</h2>
      <div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
      <p class="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
        From research to production — building systems that work.
      </p>
    </Motion>

    <div class="relative">
      <!-- Vertical timeline line -->
      <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

      <div class="space-y-12">
        {#each experience as exp, index}
          <ExperienceCard {exp} {index} />
        {/each}
      </div>
    </div>
  </div>
</section>

