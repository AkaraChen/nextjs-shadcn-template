# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Tasks

- **Install Dependencies**: `pnpm install` (using pnpm as per pnpm-lock.yaml)
- **Run Development Server**: `pnpm run dev`
- **Build Project**: `pnpm run build`
- **Start Production Server**: `pnpm run start`
- **Lint Project**: `pnpm run lint`

## Code Conventions

- File and folder names should use kebab-case (e.g., `my-component.tsx`, `my-folder`).
- When using a `[feature_name].[type].ts` naming pattern for related files (e.g., for components, utilities, or data fetching), ensure `[feature_name]` is kebab-cased.
    -   Examples: `user-profile.hooks.ts`, `data-parser.utils.ts`, `auth.keys.ts`.

## Component and Hook Placement

-   **Global Reusability**:
    -   Place globally reusable UI components (e.g., buttons, cards, layout components) in `src/components/`.
    -   Place globally reusable custom hooks (e.g., `useLocalStorage`, `useDebounce`) in `src/hooks/`.
-   **Page-Specific**: Components and hooks that are exclusively used by a specific page or route should be co-located within the `src/app/[route-segment]/` directory, next to the `page.tsx` or `layout.tsx` they serve.

## Data Fetching Conventions (Tanstack Query)

-   **Structure within `src/request`**: For each logical set of related APIs (e.g., user management, product catalog), create a dedicated subdirectory or set of files within `src/request` following a `[feature_name].` prefix:
    -   `[feature_name].keys.ts`: For defining and centralizing query keys specific to that API set.
    -   `[feature_name].api.ts`: Containing the actual data fetching logic (e.g., `fetchUsers`, `createProduct`).
    -   `[feature_name].hooks.ts`: For custom `useQuery` and `useMutation` hooks that abstract the data fetching for components.
-   **Access Scope**:
    -   Files outside `src/request` should **only** import from `[feature_name].hooks.ts`.
    -   `[feature_name].api.ts` and `[feature_name].keys.ts` should only be imported within the `src/request` scope (primarily by `[feature_name].hooks.ts`).
-   **Caching**: Implement appropriate caching strategies and stale-while-revalidate patterns for optimal performance.

## Styling and Class Name Management

-   **Primary Styling Method**: Prefer using Tailwind CSS utility classes for all styling. Avoid using direct CSS (or variants like SCSS) unless absolutely necessary for very specific global styles or highly complex, non-reusable components.
-   **Consistent Utility**: Always merge and manage Tailwind CSS classes using the `cn` function imported from `@/lib/utils`. This function leverages `clsx` and `tailwind-merge` for robust class concatenation and conflict resolution.
-   **Avoid Manual Concatenation**: Do not manually concatenate class strings, especially when dealing with conditional classes or multiple sources of classes.

## Functional Programming Best Practices

-   **`radash` for Utilities**: Utilize `radash` for common utility functions (e.g., array manipulation, object transformations, functional helpers) to promote a functional programming style and reduce boilerplate. Prioritize immutable operations and aim for clear, concise code.
-   **`ts-pattern` for Pattern Matching**: Employ `ts-pattern` for expressive and type-safe pattern matching. Use it for handling complex conditional logic, state transitions, and destructuring, especially in scenarios where `if/else` or `switch` statements become cumbersome.
-   **Immutability**: Strive for immutable data patterns across the codebase, using `radash` functions that return new data structures and `ts-pattern` to safely destructure and transform data without direct mutation.

## Others

### Centralized Providers

-   All global client-side providers (e.g., for state management, data fetching, or authentication) should be consolidated in `src/app/providers.tsx`.

### Error Handling with `tiny-invariant`

-   **Precondition Checks**: Use `tiny-invariant` for asserting preconditions and validating assumptions in your code. This helps in catching invalid states early during development and provides clear, concise error messages.
-   **Development-Only Assertions**: `tiny-invariant` is designed to strip out assertions in production builds, ensuring no performance overhead in deployed applications.
-   **Informative Messages**: Provide descriptive error messages that clearly explain what went wrong and what the expected condition was.

## State Management with Zustand

-   **Store Location**: Place Zustand stores in the `src/store/` directory. Each logical store should have its own file (e.g., `src/store/user-store.ts`, `src/store/settings-store.ts`).
-   **Atomic Stores**: Design stores to be small and focused on a single domain of state. Avoid creating large, monolithic stores.
-   **Immutability**: Always update state immutably within Zustand actions. Use functional updates (`set(state => ({ ... }))`) to ensure correct state transitions.
-   **Selectors**: Utilize selectors to derive computed state and optimize re-renders. Only consume the parts of the store state that are needed by a component.

## High-Level Code Architecture

This project is a Next.js application utilizing the App Router.

- **`src/app/`**: Contains the main application routes and components. `layout.tsx` defines the shared UI for a route segment and its children, and `page.tsx` renders the UI for a route segment.
- **`public/`**: Stores static assets like images.
- **Styling**: The project uses Tailwind CSS for styling, configured via `postcss.config.mjs` and `tailwind.config.ts` (implied by `tailwindcss` in `devDependencies`).
