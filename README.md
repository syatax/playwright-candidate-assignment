# QA Automation Engineer Assessment

## Overview

**Focus:** Problem-solving approach and technical thinking  

This assessment evaluates your debugging skills, testing approach, and technical decision-making using **Playwright** with **TypeScript**.


## Assessment Tasks

### Task 1: Debug and Fix
**File:** `tests/broken/intentional-errors.spec.ts`

A test suite with multiple issues preventing execution. Your goal is to identify and resolve all problems.

- **Focus:** Demonstrate systematic debugging approach and Playwright knowledge.

### Task 2: Implement Core Test
**File:** `tests/e2e/documentation-test.spec.ts`

Implement **one comprehensive test** that verifies the Playwright documentation homepage functionality.

- **Focus:** Show your testing strategy, selector choices, and assertion design.

### Task 3: API Testing Strategy
**File:** `tests/api/posts-api-test.spec.ts`

Implement **one comprehensive API test** for the JSONPlaceholder posts endpoint.

- **Focus:** Demonstrate REST API testing knowledge and validation approach.

## Framework Components

- `DemoPage` - Page object for playwright.dev
- `ApiHelpers` - API testing utilities

## Commands

```bash
npm test                    # Run all tests
npm test tests/broken/      # Run Task 1
npm test tests/e2e/         # Run Task 2
npm test tests/api          # Run Task 3
```

## Evaluation Focus

We care more about **HOW you think** than how much you code:

- **Problem-solving approach** - How do you debug issues?
- **Testing strategy** - What do you choose to test and why?
- **Technical decisions** - How do you select selectors and assertions?
- **Communication** - Can you explain your reasoning?


**Remember:** Quality over quantity. We prefer one well-thought-out test over multiple rushed implementations.
