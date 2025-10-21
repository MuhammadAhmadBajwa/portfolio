<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { Github, ExternalLink, TrendingUp } from 'lucide-svelte';
  import { createEventDispatcher } from 'svelte';

  export let project: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    category: string;
    technologies: string[];
    metrics: Array<{ label: string; value: string }>;
    github: string;
    demo: string;
    featured: boolean;
  };
  export let index: number;

  const dispatch = createEventDispatcher();

  let isHovered = false;
  let mouseX = 0;
  let mouseY = 0;

  function handleMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
  }

  function handleClick() {
    dispatch('click');
  }
</script>

<Motion
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
>
  <button
    on:click={handleClick}
    on:mouseenter={() => (isHovered = true)}
    on:mouseleave={() => (isHovered = false)}
    on:mousemove={handleMouseMove}
    class="group relative w-full bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 text-left"
    style="transform: perspective(1000px) rotateX({isHovered ? mouseY * 0.1 : 0}deg) rotateY({isHovered ? mouseX * 0.1 : 0}deg);"
  >
    <!-- Gradient overlay on hover -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div class="relative p-6">
      <!-- Category Badge -->
      <div class="flex items-center justify-between mb-4">
        <span class="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
          {project.category}
        </span>
        {#if project.featured}
          <span class="flex items-center gap-1 text-xs text-muted-foreground">
            <TrendingUp size={14} />
            Featured
          </span>
        {/if}
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <!-- Tagline -->
      <p class="text-sm text-muted-foreground mb-4">
        {project.tagline}
      </p>

      <!-- Metrics -->
      {#if project.metrics.length > 0}
        <div class="grid grid-cols-2 gap-2 mb-4">
          {#each project.metrics.slice(0, 2) as metric}
            <div class="p-2 bg-secondary rounded">
              <div class="text-xs text-muted-foreground">{metric.label}</div>
              <div class="text-sm font-semibold text-foreground">{metric.value}</div>
            </div>
          {/each}
        </div>
      {/if}

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-4 transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        {#each project.technologies.slice(0, 4) as tech}
          <span class="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded">
            {tech}
          </span>
        {/each}
        {#if project.technologies.length > 4}
          <span class="px-2 py-1 text-xs text-muted-foreground">
            +{project.technologies.length - 4} more
          </span>
        {/if}
      </div>

      <!-- Links -->
      <div class="flex items-center gap-3 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>View Details</span>
        <ExternalLink size={16} />
      </div>
    </div>

    <!-- Glow effect on hover -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
    </div>
  </button>
</Motion>

