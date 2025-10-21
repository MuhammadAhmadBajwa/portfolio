<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { projects } from '$lib/data/portfolio';
  import ProjectCard from './ProjectCard.svelte';
  import ProjectModal from './ProjectModal.svelte';

  let selectedProject: typeof projects[0] | null = null;
  let selectedCategory = 'All';

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  $: filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  $: featuredProjects = filteredProjects.filter(p => p.featured);
  $: otherProjects = filteredProjects.filter(p => !p.featured);

  function openProject(project: typeof projects[0]) {
    selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  function closeProject() {
    selectedProject = null;
    document.body.style.overflow = '';
  }
</script>

<section id="projects" class="py-24 bg-background">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Motion
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">Featured Projects</h2>
      <div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
      <p class="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        From satellite networking to generative AI — building systems that solve hard problems.
      </p>
    </Motion>

    <!-- Category Filter -->
    <Motion
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        {#each categories as category}
          <button
            on:click={() => (selectedCategory = category)}
            class="px-4 py-2 rounded-full text-sm font-medium transition-all {selectedCategory === category
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'bg-secondary text-muted-foreground hover:bg-secondary/80'}"
          >
            {category}
          </button>
        {/each}
      </div>
    </Motion>

    <!-- Featured Projects Grid -->
    {#if featuredProjects.length > 0}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {#each featuredProjects as project, index}
          <ProjectCard {project} {index} on:click={() => openProject(project)} />
        {/each}
      </div>
    {/if}

    <!-- Other Projects -->
    {#if otherProjects.length > 0}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 class="text-2xl font-semibold mb-8">More Projects</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each otherProjects as project, index}
            <ProjectCard {project} index={index + featuredProjects.length} on:click={() => openProject(project)} />
          {/each}
        </div>
      </Motion>
    {/if}
  </div>
</section>

{#if selectedProject}
  <ProjectModal project={selectedProject} on:close={closeProject} />
{/if}

