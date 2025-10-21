<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-svelte';
  
  export let exp: {
    id: string;
    title: string;
    company: string;
    location: string;
    period: string;
    duration: string;
    type: string;
    description: string;
    achievements: string[];
    technologies: string[];
    links: Array<{ label: string; url: string }>;
  };
  export let index: number;

  let isExpanded = false;

  function toggleExpanded() {
    isExpanded = !isExpanded;
  }
</script>

<Motion
  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
>
  <div class="relative md:grid md:grid-cols-2 md:gap-8">
    <!-- Timeline dot -->
    <div class="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background z-10"></div>

    <!-- Content -->
    <div class="{index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}">
      <div class="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
        <!-- Header -->
        <div class="mb-4">
          <div class="flex items-start justify-between {index % 2 === 0 ? 'md:flex-row-reverse' : ''}">
            <span class="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
              {exp.type}
            </span>
          </div>
          <h3 class="text-xl font-bold text-foreground mt-3 mb-1">{exp.title}</h3>
          <p class="text-lg text-primary font-semibold mb-2">{exp.company}</p>
          
          <div class="flex flex-col gap-1 text-sm text-muted-foreground {index % 2 === 0 ? 'md:items-end' : ''}">
            <div class="flex items-center gap-2 {index % 2 === 0 ? 'md:flex-row-reverse' : ''}">
              <Calendar size={16} />
              <span>{exp.period} • {exp.duration}</span>
            </div>
            <div class="flex items-center gap-2 {index % 2 === 0 ? 'md:flex-row-reverse' : ''}">
              <MapPin size={16} />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        <!-- Description -->
        <p class="text-muted-foreground mb-4 {index % 2 === 0 ? 'md:text-right' : ''}">
          {exp.description}
        </p>

        <!-- Achievements (preview) -->
        <div class="space-y-2 mb-4">
          {#each exp.achievements.slice(0, isExpanded ? undefined : 2) as achievement}
            <div class="flex items-start gap-2 {index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}">
              <span class="text-primary mt-1 flex-shrink-0">{index % 2 === 0 ? '◂' : '▸'}</span>
              <span class="text-sm text-muted-foreground">{achievement}</span>
            </div>
          {/each}
        </div>

        <!-- Technologies (always visible) -->
        <div class="flex flex-wrap gap-2 mb-4 {index % 2 === 0 ? 'md:justify-end' : ''}">
          {#each exp.technologies.slice(0, 5) as tech}
            <span class="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded">
              {tech}
            </span>
          {/each}
          {#if exp.technologies.length > 5}
            <span class="px-2 py-1 text-xs text-muted-foreground">
              +{exp.technologies.length - 5}
            </span>
          {/if}
        </div>

        <!-- Expand/Collapse button -->
        {#if exp.achievements.length > 2}
          <button
            on:click={toggleExpanded}
            class="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors {index % 2 === 0 ? 'md:ml-auto' : ''}"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
            <svelte:component this={isExpanded ? ChevronUp : ChevronDown} size={16} />
          </button>
        {/if}
      </div>
    </div>
  </div>
</Motion>

