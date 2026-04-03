# AGENTS.md - Shura Development Guide

## Build, Lint, and Test Commands

```bash
# Development
npm run dev                 # Start Next.js dev server

# Build
npm run build               # Production build
npm run start              # Start production server

# Linting
npm run lint               # Run ESLint on entire project
npm run lint -- --fix      # Auto-fix lint issues

# Type checking
npx tsc --noEmit           # TypeScript type checking only
```

### Running a Single Test
This project does not currently have a test framework configured. Do not add tests unless explicitly requested.

## Technical Stack

- **Frontend:** Next.js 16 (App Router, Server Components)
- **Styling:** Tailwind CSS v4 (no inline styles)
- **Icons:** Lucide React
- **Backend/DB:** Convex (with BetterAuth, Stripe integration)
- **AI Routing:** OpenRouter API
- **Analytics:** PostHog
- **Language:** TypeScript (strict mode enabled)

## Code Style Guidelines

### File Organization
- Use App Router conventions (`app/` directory)
- Server Components by default; use `"use client"` only when needed
- Place reusable UI components in a `core` folder (per PRD requirement)
- Keep components small and focused

### TypeScript
- Enable strict mode - do not use `any` unless absolutely necessary
- Use explicit return types for functions
- Prefer interfaces over types for object shapes
- Use generic types when appropriate

### Imports
```typescript
// Order: imports from same package, then relative
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useChat } from "@/hooks/useChat";
import { ChevronDown, Send } from "lucide-react";
import "./styles.css";
```

### Naming Conventions
- **Components:** PascalCase (e.g., `ChatMessage`, `ModelSelector`)
- **Functions/variables:** camelCase (e.g., `handleSend`, `isLoading`)
- **Files:** kebab-case for components (e.g., `chat-message.tsx`)
- **Constants:** UPPER_SNAKE_CASE for config values
- **Types/Interfaces:** PascalCase with descriptive names (e.g., `ChatMessage`, `ModelConfig`)

### Component Patterns
```typescript
// Functional component with explicit props
interface Props {
  message: string;
  onSend?: () => void;
}

export function ChatInput({ message, onSend }: Props) {
  // Use "use client" only when needed for interactivity
  return <div>...</div>;
}
```

### Error Handling
- Use try/catch with specific error types
- Implement proper error boundaries
- Log errors appropriately (avoid exposing sensitive data)
- Show user-friendly error messages in UI

### Tailwind CSS
- Use utility classes, never use inline `style` tags
- Follow consistent class ordering (layout → spacing → visual)
- Extract repeated patterns into components
- Use Tailwind's built-in dark mode support
- Keep design minimalistic and distraction-free (per PRD)

### Security
- Never expose API keys to client (use `.env` with Convex functions)
- Validate all user inputs
- Use proper authentication checks on protected routes
- Sanitize data before rendering

## Project Structure

```
shura/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # UI components
│   └── core/             # Reusable core components (per PRD)
├── lib/                   # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
├── docs/                 # Documentation (PRD.md, etc.)
├── .env*                 # Environment variables (never commit secrets)
└── package.json
```

## Important Notes

### Next.js 16 Specific
- Read the Next.js guides in `node_modules/next/dist/docs/` before writing code
- This version may have breaking changes from earlier versions
- Use Server Components by default for better performance

### Authentication
- Uses BetterAuth with Convex integration
- OAuth providers: Google, GitHub
- Protected routes require middleware

### Payments
- Stripe integration via Convex plugin
- Credit-based system for AI model usage
- Different models consume different credit amounts

### AI Integration
- OpenRouter as primary AI gateway
- Fan-out pattern: single prompt → multiple models
- Streaming responses required
- Summarization has 90s timeout with generous token limits

<!-- convex-ai-start -->
This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read `convex/_generated/ai/guidelines.md` first** for important guidelines on how to correctly use Convex APIs and patterns. The file contains rules that override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running `npx convex ai-files install`.
<!-- convex-ai-end -->
