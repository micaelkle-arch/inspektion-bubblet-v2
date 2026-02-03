# CLAUDE.md - AI Assistant Guidelines

This document provides comprehensive guidance for AI assistants working with the **inspektion-bubblet-v2** repository.

## Project Overview

**Repository**: inspektion-bubblet-v2
**Status**: Initial scaffold / early development phase
**Last Updated**: February 2026

### Current State

This repository is in its initial bootstrap phase. It currently contains only foundational files and is ready for development to begin.

## Repository Structure

```
inspektion-bubblet-v2/
├── CLAUDE.md          # AI assistant guidelines (this file)
├── README.md          # Project documentation
└── .git/              # Git version control
```

As the project grows, update this structure diagram to reflect new directories and key files.

## Development Guidelines

### Git Workflow

1. **Branch Naming Convention**:
   - Feature branches: `feature/<description>`
   - Bug fixes: `fix/<description>`
   - Documentation: `docs/<description>`
   - Claude AI branches: `claude/<description>-<session-id>`

2. **Commit Messages**:
   - Use clear, descriptive commit messages
   - Start with a verb in imperative mood (Add, Fix, Update, Remove, Refactor)
   - Keep the first line under 72 characters
   - Add detailed description in body if needed

3. **Branch Management**:
   - Main branch: `main`
   - Always create feature branches for new work
   - Keep commits atomic and focused

### Code Style & Conventions

*To be defined as the project develops. Document language-specific conventions here.*

When code is added, establish and document:
- Naming conventions (files, variables, functions, classes)
- Code formatting rules
- Documentation standards
- Import organization

### Testing

*To be configured. Document testing approach here.*

When testing is set up, document:
- Test framework and configuration
- How to run tests
- Test file naming conventions
- Coverage requirements

## Quick Reference Commands

### Git Operations

```bash
# Check repository status
git status

# Create and switch to a new branch
git checkout -b <branch-name>

# Stage and commit changes
git add <files>
git commit -m "Description of changes"

# Push to remote
git push -u origin <branch-name>
```

### Development Commands

*Add project-specific commands as they are established:*

```bash
# Install dependencies
# <command to be added>

# Run development server
# <command to be added>

# Run tests
# <command to be added>

# Build for production
# <command to be added>
```

## AI Assistant Best Practices

### When Working on This Repository

1. **Always read before modifying**: Read existing files before making changes to understand context and conventions.

2. **Keep changes focused**: Make targeted changes that directly address the task at hand. Avoid over-engineering or adding unnecessary features.

3. **Maintain documentation**: Update this CLAUDE.md and README.md when making significant changes to project structure or workflows.

4. **Follow existing patterns**: When code exists, follow established patterns and conventions rather than introducing new ones.

5. **Test your changes**: When testing infrastructure exists, ensure changes don't break existing functionality.

6. **Commit atomically**: Make small, focused commits rather than large monolithic changes.

### Common Tasks

#### Adding New Features
1. Understand the existing codebase structure
2. Plan the implementation
3. Write the feature code
4. Add tests if testing framework exists
5. Update documentation as needed
6. Commit with clear message

#### Fixing Bugs
1. Reproduce and understand the issue
2. Identify the root cause
3. Implement the fix
4. Verify the fix resolves the issue
5. Ensure no regressions
6. Commit with clear message referencing the issue

#### Refactoring
1. Understand the current implementation
2. Plan the refactoring approach
3. Make incremental changes
4. Ensure functionality is preserved
5. Update tests if needed
6. Commit with clear explanation

## Configuration Files

*Document important configuration files as they are added:*

| File | Purpose |
|------|---------|
| `README.md` | Project overview and documentation |
| `CLAUDE.md` | AI assistant guidelines (this file) |
| *Add more as project grows* | |

## Environment Setup

### Prerequisites

*Document requirements as they are established:*
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd inspektion-bubblet-v2

# Additional setup steps to be added
```

## Architecture & Design

*Document architectural decisions and patterns as the project evolves.*

### Key Components

*To be documented when components are added.*

### Data Flow

*To be documented when application logic is implemented.*

## Troubleshooting

### Common Issues

*Document common issues and solutions as they are discovered.*

## Changelog

### 2026-02-03
- Created initial CLAUDE.md with comprehensive guidelines
- Established documentation structure for AI assistants

---

## Maintaining This Document

This CLAUDE.md should be updated when:
- New tools or technologies are added to the project
- Development workflows change
- New conventions are established
- Project structure significantly changes
- Common issues or solutions are discovered

Keep this document accurate and up-to-date to ensure AI assistants can effectively work with this repository.
