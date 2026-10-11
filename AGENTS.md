# Project Rules for gilc.site

## Prompt Logging Rule (Mandatory)
Every time the user provides a prompt or instruction in this workspace, the assistant MUST record/append the user's prompt into `gilc.site.docs/user_prompts.md` (or update it if it's not yet recorded for the current turn).

### Log Format in `gilc.site.docs/user_prompts.md`
- **Timestamp**: YYYY-MM-DD HH:MM:SS
- **Turn / Index**: Sequential number
- **Prompt Content**: The exact user prompt text
- **Summary / Intent**: Brief description of the user's intent or expected deliverable
