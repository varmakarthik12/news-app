# News App

This project is a full-stack JavaScript application for fetching and displaying news articles. It leverages Next.js for the frontend, Node.js with Express for the backend, and integrates with external APIs for news data. The project is containerized using Docker and uses Terraform for infrastructure management.

## Features

- Server-Side Rendering (SSR) with Next.js
- API integration for fetching news articles
- Docker for containerization
- Terraform for infrastructure as code
- Jest for testing
- GitHub Actions for CI/CD

## Setup Development Environment

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/news-app.git
   cd news-app
   ```

2. **Install dependencies**:

   ```sh
   yarn
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   NEWS_API_KEY=your_api_key_here
   ```

4. **Run the development server**:

   ```sh
   yarn dev
   ```

5. **Run tests**:

   ```sh
   yarn test
   ```

6. **Run Lints**:

   ```sh
   yarn lint
   ```

7. **Build the project**:
   ```sh
   yarn build
   ```

## Folder Structure

- **components/**: Contains React components used in the application.
  - **article/**: Components related to displaying articles.
  - **layout/**: Layout components like Header and Footer.
- **pages/**: Next.js pages.
- **services/**: Service modules for handling API calls and their business logic.
  - **news/**: Modules related to fetching and processing news data.
- **.vscode/**: Visual Studio Code settings.
- **.husky/**: Husky configuration for Git hooks.
- **public/**: Static assets.
- **.env.local**: Environment variables.
- **package.json**: Project metadata and scripts.
- **tsconfig.json**: TypeScript configuration.

## Usage

1. **Fetch news articles**:
   The application fetches news articles from an external API and displays them on the homepage.

2. **Navigate through articles**:
   Users can click on articles to read more details.

## Contributing

1. **Fork the repository**.
2. **Create a new branch**:
   ```sh
   git checkout -b feature-branch
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```sh
   git commit -m "Add new feature"
   ```
5. **Push to the branch**:
   ```sh
   git push origin feature-branch
   ```
6. **Create a pull request**.
