# Physical AI Humanoid Robotics Textbook

A 13-Week Curriculum for Industry Engineers.

## Project Initialization

This project was initialized using Docusaurus v3.

### Local Development

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

Push to `main` branch. The GitHub Action defined in `.github/workflows/deploy.yml` will automatically build and deploy to the `gh-pages` branch.