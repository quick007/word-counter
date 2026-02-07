# Agent Instructions for ripple-ts/word-counter

## Project Overview

This is a **RippleTS** application - a TypeScript-first UI framework. It uses Vite for building and supports the `.ripple` file format for components.

## Important Notes:

- Do not commit unless the user explicitly asks you to make that commit. Asking for one commit does not imply you should make future commits
- This project uses bun, do not use any other package managers
- Always use tailwindcss
- When modifying .ripple files, you must have read the ripple-ts skill at some point in the current conversation

## Build/Lint/Format Commands

```bash
# Development server (runs on port 3000)
# do not start the dev server unless explicitly asked
bun dev

# Production build
bun build

# Preview production build
bun serve

# Linting
bun lint

# Formatting
bun format         # Fix formatting issues
bun format:check   # Check formatting without fixing
```

**Note**: No test runner is currently configured in this project.

## Code Style Guidelines

### Formatting (Prettier)

- **Indentation**: Use tabs (not spaces)
- **Tab width**: 4
- **Line width**: 100 characters
- **Quotes**: Single quotes
- **Trailing commas**: ES5 style

### TypeScript Configuration

- **Module system**: ESNext with `type: "module"`
- **Target**: ESNext
- **JSX**: Preserved with `jsxImportSource: "ripple"`
- **Node version**: >=20.0.0

### Ripple Component Style

**Component Declaration:**

```ripple
export component ComponentName(props: { propName: string }) {
	// Component logic
	<div class="container">{'Content'}</div>
	<style>
		.container {
			/* styles */
		}
	</style>
}
```

## File Structure

- `src/*.ts` - TypeScript utilities and entry point
- `src/*.ripple` - Ripple components
- `src/index.ts` - Application entry point
- `vite.config.js` - Vite configuration with Ripple plugin
- `tsconfig.json` - TypeScript configuration with Ripple plugin

## Important Notes

- JSX-like syntax only allowed inside `component` bodies
- Tracked values cannot be created at module/global scope
- Use `effect()` for side effects, not direct reactive access
- Dynamic classes support object syntax: `class={{ active: true, disabled: false }}`

## References

- Ripple Documentation: https://github.com/Ripple-TS/ripple
- Vite Documentation: https://vitejs.dev/
