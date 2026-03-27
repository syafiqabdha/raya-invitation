# AGENTS.md - Project Intelligence

## 🎯 Context & Mission
- **Tech Stack:** [e.g., Next.js 15, Tailwind, Supabase, TypeScript]
- **Goal:** Build a high-performance, accessible SaaS dashboard.
- **Style:** Modular, functional programming, DRY principle.

## 🛠️ Execution Rules (Logic)
- **Zero Hallucination:** If a library isn't in `package.json`, do not suggest it.
- **Safety First:** Always use `git checkout -b` for new features.
- **Testing:** Every new function requires a Vitest unit test.
- **Refactoring:** If a file exceeds 200 lines, propose a split before editing.

## 🧠 Memory & Workflows
- **State Management:** Use Zustand; avoid Prop Drilling at all costs.
- **API Strategy:** All backend calls must go through the `/services` directory.
- **Formatting:** Standard Prettier config applies. Do not ask for confirmation on lint fixes.

## 🚀 Build, Lint, and Test Commands

### Package Manager Detection
- If `yarn.lock` exists, use `yarn`. Otherwise, use `npm`.

### Build Commands
- **Build Project:** `npm run build` or `yarn build`

### Linting Commands
- **Lint Code:** `npm run lint` or `yarn lint`

### Testing Commands
- **Run All Tests:** `npm test` or `yarn test`
- **Run Single Test:** `npm run test -- path/to/testfile.spec.ts` or `yarn test path/to/testfile.spec.ts`
- **Run Tests with Watch Mode:** `npm run test -- --watch` or `yarn test --watch`

## 🎨 Code Style Guidelines

### Imports
- **Order:** 1. Node.js built-ins, 2. Third-party, 3. Project-relative
- **Unused Imports:** Remove any unused imports

### Formatting
- **Formatter:** Prettier with 2-space indentation
- **Line Length:** Aim for under 100 characters

### Types
- **TypeScript:** Use for all new code
- **Type Definitions:** Clear types for props, state, params, returns
- **Interfaces vs Types:** Prefer `interface` for objects, `type` for unions

### Naming Conventions
- **Variables/Functions:** `camelCase` (e.g., `getUserData`)
- **Components:** `PascalCase` (e.g., `UserProfile`)
- **Constants:** `UPPER_SNAKE_CASE`
- **Enums:** `PascalCase` for types, `UPPER_SNAKE_CASE` for members

### Error Handling
- **Strategy:** Consistent error handling
- **Try-Catch:** Use for operations that might fail
- **Error Types:** Throw specific errors, not generic `Error`
- **User Feedback:** Communicate errors via UI messages or logs

### File Structure
```
/src
  /assets
  /components
    /ui
    /layout
    /features
  /hooks
  /services
  /store
  /utils
  /types
  /styles
  /pages or /app
/tests
  /unit
  /integration
  /e2e
  /fixtures
  /mocks
```

### Commit Guidelines
- **Messages:** Type + subject line (e.g., `feat: Add feature`)
- **Body:** Explain "why", not just "what"
- **PRs:** Descriptive title, summary, passing tests

## 🔧 Development Workflows

### Feature Development
1. `git checkout -b feature/name`
2. Implement with TDD (tests first)
3. Ensure tests pass
4. Run linting, fix issues
5. Commit descriptively
6. Push and create PR

### Bug Fixes
1. `git checkout -b fix/description`
2. Write failing test
3. Implement fix
4. Verify test passes
5. Run all tests
6. Commit descriptively
7. Push and create PR

## 🛡️ Quality Gates

### Pre-commit
- Tests pass
- Linting passes
- No TypeScript errors
- Conventional commits

### Pre-merge
- Quality gates pass
- Code review approval
- Successful CI build
- No security vulnerabilities

## 📱 Responsiveness & Accessibility

### Responsive Design
- Mobile-first
- Media queries or utility classes
- Test multiple viewports
- Follow design system breakpoints

### Accessibility (a11y)
- WCAG 2.1 AA
- Keyboard navigable
- ARIA labels where needed
- Sufficient color contrast
- Screen tester friendly
- Semantic HTML

## ⚡ Performance Optimization

### Bundle
- Code splitting
- Dynamic imports
- Optimized images/assets
- Minimized third-party libs

### Runtime
- Memoized computations
- React.memo optimization
- Virtual scrolling for lists
- Debounced operations
- Optimized re-renders

## 🔒 Security Practices

### Data
- Sanitized inputs
- Env vars for secrets
- Proper auth/z
- Validated API responses
- HTTPS in production

### Dependencies
- Regular updates
- Vulnerability audits
- Consistent lockfiles
- License monitoring

## 📝 Documentation

### Code
- JSDoc for public APIs
- TS interfaces for complex props
- Inline comments for complex logic
- README per major feature

### API
- Endpoints with examples
- Auth requirements
- Error responses
- Versioned changes

## 🔄 Dependency Management

### Adding
- Native solutions first
- Check bundle impact
- Version compatibility
- package.json with ranges

### Updating
- Thorough testing
- Breaking change check
- Consistent lockfiles
- Documented reasons