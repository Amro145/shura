# Shura - Project Tasks

## Milestone 1: Project Setup & Infrastructure
- [x] Initialize Next.js 16 project with TypeScript
- [ ] Configure Tailwind CSS v4 with PostCSS
- [ ] Set up project folder structure (app/, components/core/, lib/, hooks/)
- [ ] Configure ESLint and TypeScript strict mode
- [ ] Create .env.example with required environment variables

## Milestone 2: Convex Backend Setup
- [ ] Initialize Convex project
- [ ] Define schema for users, chats, messages, credits
- [ ] Set up Convex functions for CRUD operations
- [ ] Configure real-time subscriptions
- [ ] Install and configure BetterAuth as Convex plugin

## Milestone 3: Authentication System
- [ ] Implement OAuth with Google provider
- [ ] Implement OAuth with GitHub provider
- [ ] Create authentication middleware for protected routes
- [ ] Build login/signup UI pages
- [ ] Implement session management

## Milestone 4: Core UI Components
- [ ] Create Button component in components/core/
- [ ] Create Input component in components/core/
- [ ] Create Card component in components/core/
- [ ] Create Sidebar component
- [ ] Create Header/Navigation component
- [ ] Set up Lucide icons integration

## Milestone 5: Multi-Model Chat Interface
- [ ] Build model selector component (multi-select)
- [ ] Create chat input component with streaming support
- [ ] Build message display component (user & AI)
- [ ] Create response panel (side-by-side view for multiple models)
- [ ] Implement message state management (loading, streaming, complete)
- [ ] Build main chat page layout (sidebar + chat area)

## Milestone 6: OpenRouter AI Integration
- [ ] Create OpenRouter API client wrapper in lib/
- [ ] Implement fan-out logic (single prompt → multiple models)
- [ ] Add streaming response handling
- [ ] Configure model pricing/credit mapping
- [ ] Implement error handling for API failures
- [ ] Add 90-second timeout for summarization requests

## Milestone 7: Comprehensive Summary Feature
- [ ] Create background summarization trigger logic
- [ ] Build summary prompt (analyze agreements/disagreements)
- [ ] Implement summary display component
- [ ] Add loading state for summary generation
- [ ] Handle summary errors gracefully

## Milestone 8: Credit & Subscription System
- [ ] Create credit balance schema and management
- [ ] Implement credit deduction on prompt send
- [ ] Build credit balance display component
- [ ] Integrate Stripe via Convex plugin
- [ ] Create subscription plan selection UI
- [ ] Build credit top-up purchase flow
- [ ] Implement real-time credit balance updates

## Milestone 9: Chat History & Management
- [ ] Create chat list sidebar component
- [ ] Implement chat session storage in Convex
- [ ] Build "resume conversation" functionality
- [ ] Add chat title generation
- [ ] Implement chat deletion capability
- [ ] Add pagination for chat history

## Milestone 10: Analytics & Monitoring
- [ ] Integrate PostHog for session recording
- [ ] Track key events (prompt sent, summary generated, credits used)
- [ ] Set up error tracking and logging
- [ ] Create analytics dashboard (optional)

## Milestone 11: Performance & Security
- [ ] Optimize streaming response performance
- [ ] Implement API key protection (verify .env usage)
- [ ] Add rate limiting for API calls
- [ ] Set up error boundaries
- [ ] Implement proper CORS configuration
- [ ] Add input sanitization

## Milestone 12: UI/UX Refinement
- [ ] Apply minimalistic design principles
- [ ] Implement dark mode support
- [ ] Add loading skeletons
- [ ] Improve mobile responsiveness
- [ ] Add keyboard shortcuts
- [ ] Polish error states and empty states

