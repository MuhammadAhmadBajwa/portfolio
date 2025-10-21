<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { Mail, MapPin, Send, Loader, CheckCircle, AlertCircle, Clock } from 'lucide-svelte';
  import { personalInfo } from '$lib/data/portfolio';

  let formData = {
    name: '',
    email: '',
    role: '',
    budget: '',
    message: '',
  };

  let formStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  let errorMessage = '';

  const budgetOptions = [
    'Not applicable',
    'Under $5k',
    '$5k - $15k',
    '$15k - $30k',
    '$30k+',
    'Full-time role',
  ];

  async function handleSubmit(e: Event) {
    e.preventDefault();
    formStatus = 'sending';

    try {
      // In production, replace with your actual API endpoint
      // For now, use a mailto fallback or configure a serverless function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        formStatus = 'success';
        formData = { name: '', email: '', role: '', budget: '', message: '' };
        setTimeout(() => {
          formStatus = 'idle';
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      formStatus = 'error';
      errorMessage = 'Failed to send message. Please try emailing directly.';
      setTimeout(() => {
        formStatus = 'idle';
      }, 5000);
    }
  }

  // Get current time in Lahore
  function getLahoreTime() {
    const now = new Date();
    const lahoreTime = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Karachi',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(now);
    return lahoreTime;
  }
</script>

<section id="contact" class="py-24 bg-card">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Motion
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
      <div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
      <p class="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
        Open to opportunities in research, ML engineering, and systems development.
      </p>
    </Motion>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Contact Info -->
      <Motion
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div class="space-y-6">
          <div>
            <h3 class="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p class="text-muted-foreground mb-8">
              Whether you're looking for a research collaborator, ML engineer, or systems developer,
              I'd love to hear from you. Drop me a message and I'll get back to you soon.
            </p>
          </div>

          <!-- Contact Methods -->
          <div class="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              class="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
            >
              <div class="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail size={24} class="text-primary" />
              </div>
              <div>
                <div class="text-sm text-muted-foreground">Email</div>
                <div class="font-medium text-foreground">{personalInfo.email}</div>
              </div>
            </a>

            

            <div class="flex items-center gap-4 p-4 bg-secondary rounded-lg">
              <div class="p-3 bg-primary/10 rounded-lg">
                <MapPin size={24} class="text-primary" />
              </div>
              <div>
                <div class="text-sm text-muted-foreground">Location</div>
                <div class="font-medium text-foreground">{personalInfo.location}</div>
              </div>
            </div>
          </div>

          <!-- Availability -->
          <div class="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div class="flex items-start gap-3">
              <Clock size={20} class="text-primary mt-1 flex-shrink-0" />
              <div>
                <div class="font-semibold text-foreground mb-1">Availability</div>
                <p class="text-sm text-muted-foreground">
                  Located in Lahore, Pakistan (GMT+5). Currently {getLahoreTime()} local time.
                  Open to remote opportunities worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Motion>

      <!-- Contact Form -->
      <Motion
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <form on:submit={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-foreground mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              required
              class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-foreground mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              required
              class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label for="role" class="block text-sm font-medium text-foreground mb-2">
              Your Role
            </label>
            <input
              type="text"
              id="role"
              bind:value={formData.role}
              class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="e.g., Hiring Manager, Recruiter, Founder"
            />
          </div>

          <div>
            <label for="budget" class="block text-sm font-medium text-foreground mb-2">
              Project Budget / Opportunity Type
            </label>
            <select
              id="budget"
              bind:value={formData.budget}
              class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="">Select an option</option>
              {#each budgetOptions as option}
                <option value={option}>{option}</option>
              {/each}
            </select>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-foreground mb-2">
              Message *
            </label>
            <textarea
              id="message"
              bind:value={formData.message}
              required
              rows="5"
              class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              placeholder="Tell me about your project or opportunity..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={formStatus === 'sending'}
            class="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {#if formStatus === 'sending'}
              <Loader size={20} class="animate-spin" />
              Sending...
            {:else if formStatus === 'success'}
              <CheckCircle size={20} />
              Message Sent!
            {:else if formStatus === 'error'}
              <AlertCircle size={20} />
              Failed to Send
            {:else}
              <Send size={20} />
              Send Message
            {/if}
          </button>

          {#if formStatus === 'success'}
            <div class="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400 text-sm">
              ✓ Thanks for reaching out! I'll get back to you soon.
            </div>
          {/if}

          {#if formStatus === 'error'}
            <div class="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400 text-sm">
              {errorMessage}
            </div>
          {/if}

          <p class="text-xs text-muted-foreground text-center">
            Or email me directly at{' '}
            <a href={`mailto:${personalInfo.email}`} class="text-primary hover:underline">
              {personalInfo.email}
            </a>
          </p>
        </form>
      </Motion>
    </div>
  </div>
</section>

