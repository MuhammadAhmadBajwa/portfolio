<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { Code, Brain, Layers, Wrench, Cpu } from 'lucide-svelte';
  import { skillCategories } from '$lib/data/portfolio';

  const iconMap = {
    Code,
    Brain,
    Layers,
    Wrench,
    Cpu,
  };

  let selectedSkills: string[] = [];

  function toggleSkill(skill: string) {
    if (selectedSkills.includes(skill)) {
      selectedSkills = selectedSkills.filter(s => s !== skill);
    } else {
      selectedSkills = [...selectedSkills, skill];
    }
  }
</script>

<section id="skills" class="py-24 bg-background">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Motion
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">Skills & Technologies</h2>
      <div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
      <p class="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
        Full-stack capabilities from hardware to cloud, networking to AI.
      </p>
    </Motion>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each skillCategories as category, index}
        {@const IconComponent = iconMap[category.icon as keyof typeof iconMap]}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div class="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all">
            <!-- Icon and Title -->
            <div class="flex items-center gap-3 mb-4">
              <div class="p-3 bg-primary/10 rounded-lg">
                <svelte:component this={IconComponent} size={24} class="text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">{category.title}</h3>
            </div>

            <!-- Skills -->
            <div class="flex flex-wrap gap-2">
              {#each category.skills as skill}
                <button
                  on:click={() => toggleSkill(skill)}
                  class="px-3 py-2 rounded-lg text-sm font-medium transition-all {selectedSkills.includes(skill)
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'}"
                >
                  {skill}
                </button>
              {/each}
            </div>
          </div>
        </Motion>
      {/each}
    </div>

    <!-- Selected Skills Note -->
    {#if selectedSkills.length > 0}
      <Motion
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div class="mt-12 p-6 bg-card border border-primary/30 rounded-xl">
          <h4 class="text-lg font-semibold mb-3">Selected Skills ({selectedSkills.length})</h4>
          <div class="flex flex-wrap gap-2">
            {#each selectedSkills as skill}
              <span class="px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                {skill}
              </span>
            {/each}
          </div>
          <p class="text-sm text-muted-foreground mt-4">
            💡 Click on skills to filter or highlight them for your reference.
          </p>
        </div>
      </Motion>
    {/if}
  </div>
</section>

