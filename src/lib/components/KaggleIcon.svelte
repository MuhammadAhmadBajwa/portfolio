<script lang="ts">
  export let size = 24;
  export let className = '';
  export let strokeWidth: number = 2.2;
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class={className}
>
  <!-- Lowercase 'k' constructed with three strokes -->
  <!-- Vertical stem -->
  <path d="M7 3 L7 21" />
  <!-- Upper diagonal (shorter) from mid to up-right -->
  <path d="M9.5 12 L17 5.5" />
  <!-- Lower diagonal (longer) from slightly below mid to down-right -->
  <path d="M9.5 13.2 L18 21" />
</svg>

