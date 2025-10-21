<script lang="ts">
  import { onMount } from 'svelte';
  import { Moon, Sun, Menu, X } from 'lucide-svelte';
  import type { Writable } from 'svelte/store';

  export let theme: Writable<'light' | 'dark'>;
  export let toggleTheme: () => void;

  let scrolled = false;
  let mobileMenuOpen = false;

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function scrollToSection(href: string) {
    mobileMenuOpen = false;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
    ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
    : 'bg-transparent'}"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <a href="/" class="text-xl font-bold text-foreground hover:text-primary transition-colors">
        MA
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <button
            on:click={() => scrollToSection(item.href)}
            class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.label}
          </button>
        {/each}
        
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Resume
        </a>

        <button
          on:click={toggleTheme}
          class="p-2 rounded-md hover:bg-secondary transition-colors"
          aria-label="Toggle theme"
        >
          {#if $theme === 'light'}
            <Moon size={20} />
          {:else}
            <Sun size={20} />
          {/if}
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center space-x-2">
        <button
          on:click={toggleTheme}
          class="p-2 rounded-md hover:bg-secondary transition-colors"
          aria-label="Toggle theme"
        >
          {#if $theme === 'light'}
            <Moon size={20} />
          {:else}
            <Sun size={20} />
          {/if}
        </button>

        <button
          on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
          class="p-2 rounded-md hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {#if mobileMenuOpen}
            <X size={24} />
          {:else}
            <Menu size={24} />
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden py-4 border-t border-border animate-slide-down">
        {#each navItems as item}
          <button
            on:click={() => scrollToSection(item.href)}
            class="block w-full text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            {item.label}
          </button>
        {/each}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="block mx-4 mt-4 px-4 py-2 text-center text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Resume
        </a>
      </div>
    {/if}
  </div>
</nav>

