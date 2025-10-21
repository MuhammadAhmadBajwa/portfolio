<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { Motion } from 'svelte-motion';
  import { X, Github, ExternalLink, Calendar } from 'lucide-svelte';

  export let project: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    longDescription: string;
    category: string;
    technologies: string[];
    metrics: Array<{ label: string; value: string }>;
    github: string;
    demo: string;
    featured: boolean;
  };

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch('close');
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      handleClose();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
  on:click={handleClose}
>
  <Motion
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl"
      on:click|stopPropagation
    >
      <!-- Close button -->
      <button
        on:click={handleClose}
        class="sticky top-4 float-right mr-4 p-2 bg-secondary hover:bg-secondary/80 rounded-full transition-colors z-10"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>

      <div class="p-8">
        <!-- Header -->
        <div class="mb-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <span class="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                {project.category}
              </span>
            </div>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-3">{project.title}</h2>
          <p class="text-lg text-muted-foreground">{project.tagline}</p>
        </div>

        <!-- Metrics -->
        {#if project.metrics.length > 0}
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {#each project.metrics as metric}
              <div class="p-4 bg-secondary rounded-lg text-center">
                <div class="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                <div class="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            {/each}
          </div>
        {/if}

        <!-- Description -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-3">Overview</h3>
          <p class="text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>
          <p class="text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <!-- Technologies -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-3">Technologies Used</h3>
          <div class="flex flex-wrap gap-2">
            {#each project.technologies as tech}
              <span class="px-3 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium">
                {tech}
              </span>
            {/each}
          </div>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap gap-4 pt-6 border-t border-border">
          {#if project.github}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg font-medium transition-colors"
            >
              <Github size={20} />
              View Source
            </a>
          {/if}
          {#if project.demo}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          {/if}
        </div>

        <!-- Note about links -->
        {#if !project.github && !project.demo}
          <div class="mt-6 p-4 bg-secondary/50 rounded-lg">
            <p class="text-sm text-muted-foreground">
              📝 Repository and demo links are available upon request. Contact me for access.
            </p>
          </div>
        {/if}
      </div>
    </div>
  </Motion>
</div>

