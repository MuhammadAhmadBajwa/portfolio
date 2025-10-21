import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, role, budget, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Mailjet integration (https://api.mailjet.com/v3.1/send)
    const MAILJET_API_KEY = import.meta.env.VITE_MAILJET_API_KEY;
    const MAILJET_API_SECRET = import.meta.env.VITE_MAILJET_API_SECRET;

    if (!MAILJET_API_KEY || !MAILJET_API_SECRET) {
      // If not configured, log payload and return success to avoid UI error
      console.log('Contact form submission (Mailjet not configured):', { name, email, role, budget, message });
      return json({ success: true, message: 'Message received!' });
    }

    const auth = Buffer.from(`${MAILJET_API_KEY}:${MAILJET_API_SECRET}`).toString('base64');
    const body = {
      Messages: [
        {
          From: {
            Email: 'noreply@muhammadahmad.dev',
            Name: 'Portfolio Contact'
          },
          To: [
            {
              Email: 'ahmadbajwa9898@gmail.com',
              Name: 'Muhammad Ahmad'
            }
          ],
          Subject: `Portfolio Contact: ${name}`,
          TextPart: `Name: ${name}\nEmail: ${email}\nRole: ${role || 'Not specified'}\nBudget: ${budget || 'Not specified'}\n\nMessage:\n${message}`
        }
      ]
    };

    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Mailjet error:', errText);
      throw new Error('Failed to send email via Mailjet');
    }

    return json({ success: true, message: 'Message sent!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return json({ error: 'Failed to send message' }, { status: 500 });
  }
};

