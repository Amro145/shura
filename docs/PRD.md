# Product Requirements Document (PRD) - Shura

## 1. Product Overview
**Name:** Shura
**Description:** A specialized AI chat application designed to solve the friction of consulting multiple Large Language Models (LLMs) for complex decision-making. Shura allows users to send a single prompt to multiple selected AI models simultaneously, view their responses side-by-side, and automatically generates a comprehensive summary highlighting points of agreement and disagreement among the models.

## 2. Target Audience
Advanced/Power AI users, developers, entrepreneurs, and decision-makers who rely on multiple AI models (e.g., ChatGPT, Claude, Gemini) to gain diverse perspectives on critical queries.

## 3. Core Features & Functionality
### 3.1. Multi-Model Chat Interface
* Users can start a new chat and select multiple AI models (e.g., Claude 3 Opus, GPT-4, Gemini 1.5 Pro) for the session.
* A single user prompt is dispatched to all selected models concurrently.
* Responses stream into the UI seamlessly.

### 3.2. The Comprehensive Summary (الملخص الشافي)
* After all selected models finish generating their responses, the system automatically triggers a background summarization task.
* The summary analyzes all responses, explicitly stating:
    * What each model concluded.
    * Points of consensus (agreements).
    * Points of divergence (disagreements).

### 3.3. Authentication System
* Secure user registration and login.
* OAuth providers: Google and GitHub.

### 3.4. Credit & Subscription System
* A credit-based usage system. Different models consume different amounts of credits based on their computational weight (e.g., Claude Opus costs more credits than Gemini Flash).
* Integration with a payment gateway to allow users to subscribe or purchase credit top-ups.
* Real-time credit balance deduction and UI updates upon sending prompts.

### 3.5. Chat History & Management
* Sidebar displaying recent chats.
* Ability to resume previous multi-model conversations.
* Chat sessions are securely stored and retrieved from the database.

## 4. Technical Stack & Architecture
* **Frontend:** Next.js (App Router, strictly using Server Components where applicable).
* **Styling:** Tailwind CSS (no inline styles), Lucide Icons for iconography.
* **Backend & Database:** Convex (serving simultaneously as the backend logic and the real-time database).
* **Authentication:** BetterAuth (integrated directly as a Convex plugin).
* **Payments:** Stripe (using the specific Convex-Stripe integration plugin for seamless customer syncing and subscription handling).
* **AI Routing & Provider:** OpenRouter (used as the primary AI API gateway to access multiple LLMs).
* **Analytics & Session Recording:** PostHog.
* **Deployment:** GitHub repository deployed to a standard hosting platform (e.g., Vercel).

## 5. System Workflow (Agentic Context)
* **Next.js** acts as the frontend and a proxy to the backend.
* **Convex** handles all data persistence (chats, messages, user profiles, credit balances).
* **OpenRouter API** handles the "fan-out" logic where one request is mapped to multiple model API calls.
* **UI Component Architecture:** A `core` folder must be established for reusable UI components (Buttons, Cards, Inputs) to maintain consistency and avoid code duplication.

## 6. Non-Functional Requirements
* **Performance:** Responses must stream efficiently. The summarization prompt must have a sufficient timeout configuration (e.g., 90 seconds) and generous max token limits to avoid truncation.
* **Security:** API keys (especially OpenRouter and Stripe secret keys) must be strictly kept in `.env` files and never exposed to the client. Route protection must be enforced via middleware.
* **UI/UX:** The interface should be minimalistic, distraction-free, and follow standard chat-assistant layouts (Sidebar on the left, main chat area in the center).