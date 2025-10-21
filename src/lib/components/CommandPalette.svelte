<script lang="ts">
  import { Search, FileText, Briefcase, Code, Mail, Home } from 'lucide-svelte';
  
  export let show = false;

  const commands = [
    { icon: Home, label: 'Go to Hero', action: () => scrollTo('#hero') },
    { icon: FileText, label: 'About', action: () => scrollTo('#about') },
    { icon: Code, label: 'Projects', action: () => scrollTo('#projects') },
    { icon: Briefcase, label: 'Experience', action: () => scrollTo('#experience') },
    { icon: Code, label: 'Skills', action: () => scrollTo('#skills') },
    { icon: Mail, label: 'Contact', action: () => scrollTo('#contact') },
    { icon: FileText, label: 'Download Resume', action: () => window.open('/resume.pdf', '_blank') },
  ];

  let searchQuery = '';
  let selectedIndex = 0;

  $: filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function scrollTo(selector: string) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    show = false;
    searchQuery = '';
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      show = false;
      searchQuery = '';
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % filteredCommands.length;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = selectedIndex === 0 ? filteredCommands.length - 1 : selectedIndex - 1;
    } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  }

  function handleBackdropClick() {
    show = false;
    searchQuery = '';
  }
</script>

{#if show}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4 animate-fade-in"
    on:click={handleBackdropClick}
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="bg-card border border-border rounded-lg shadow-2xl w-full max-w-lg animate-scale-in"
      on:click|stopPropagation
    >
      <div class="flex items-center px-4 py-3 border-b border-border">
        <Search size={20} class="text-muted-foreground mr-3" />
        <input
          type="text"
          bind:value={searchQuery}
          on:keydown={handleKeydown}
          placeholder="Type a command or search..."
          class="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
        />
        <kbd class="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded">ESC</kbd>
      </div>

      <div class="max-h-96 overflow-y-auto py-2">
        {#if filteredCommands.length === 0}
          <div class="px-4 py-8 text-center text-muted-foreground text-sm">
            No commands found
          </div>
        {:else}
          {#each filteredCommands as cmd, index}
            <button
              on:click={cmd.action}
              class="w-full flex items-center px-4 py-3 hover:bg-secondary transition-colors {index ===
              selectedIndex
                ? 'bg-secondary'
                : ''}"
            >
              <svelte:component this={cmd.icon} size={18} class="text-muted-foreground mr-3" />
              <span class="text-sm text-foreground">{cmd.label}</span>
            </button>
          {/each}
        {/if}
      </div>

      <div class="px-4 py-2 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
        <span>Navigate with ↑↓, select with Enter</span>
        <span class="text-xs">⌘K or Ctrl+K to toggle</span>
      </div>
    </div>
  </div>
{/if}

