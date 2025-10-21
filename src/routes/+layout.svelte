<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CommandPalette from '$lib/components/CommandPalette.svelte';

  let theme = writable<'light' | 'dark'>('dark');
  let showCommandPalette = writable(false);

  onMount(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    theme.set(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    // Command palette shortcut
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        showCommandPalette.update(v => !v);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  function toggleTheme() {
    theme.update(t => {
      const newTheme = t === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return newTheme;
    });
  }
</script>

<div class="min-h-screen bg-background text-foreground transition-colors duration-300">
  <Navbar {theme} {toggleTheme} />
  
  <main>
    <slot />
  </main>

  <Footer />
  
  <CommandPalette bind:show={$showCommandPalette} />
</div>
