# Dice Master 🎲

A clean architecture implementation of a dice rolling application built with React.

## Overview

Dice Master is a tutorial project demonstrating how to apply clean architecture principles to a React application. It separates concerns into distinct layers, making the codebase maintainable, testable, and scalable.

## Project Structure

The project follows a clean architecture approach with the following layers:

```
src/
├── domain/         # Business logic and rules
│   ├── entities/       # Core business objects
│   ├── repositories/   # Interfaces for data access
│   └── usecases/       # Application-specific business rules
├── data/           # Data layer implementation
│   ├── datasources/    # Data providers (API, local storage, etc.)
│   └── repositories/   # Concrete implementations of domain repositories
├── infrastructure/ # External services and frameworks
│   └── services/       # Services for external interactions
└── presentation/   # UI layer
    ├── components/     # Reusable UI components
    └── pages/          # Screen components
```

## Clean Architecture Principles

This project demonstrates several key clean architecture principles:

1. **Dependency Rule**: Dependencies point inward. Inner layers don't know about outer layers.
2. **Entities**: Contains enterprise-wide business rules (e.g., Dice class).
3. **Use Cases**: Contains application-specific business rules.
4. **Interface Adapters**: Converts data between use cases and external formats.
5. **Frameworks and Drivers**: Contains frameworks and tools like databases, web frameworks, etc.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/dice-master.git
cd dice-master
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Start the development server:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Learning Objectives

Following this tutorial, you will learn:

- How to structure a React application using clean architecture
- How to separate concerns between different layers
- How to implement dependency injection in React
- How to create abstraction boundaries with interfaces
- How to make your application more testable

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Clean Architecture by Robert C. Martin
- React Team for the amazing framework
