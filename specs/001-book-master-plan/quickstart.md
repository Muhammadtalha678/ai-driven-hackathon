# Quickstart: Book Master Plan

**Prerequisites**:
- Node.js >= 18.0
- Git

## Local Development

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Local Server**
    ```bash
    npm start
    ```
    The site will open at `http://localhost:3000`.

3.  **Build for Production**
    ```bash
    npm run build
    ```
    Output is generated in the `build/` directory.

4.  **Serve Production Build**
    ```bash
    npm run serve
    ```

## Deployment

1.  **Trigger via Git**
    Push to `main` branch. The GitHub Action will automatically build and deploy to `gh-pages`.
