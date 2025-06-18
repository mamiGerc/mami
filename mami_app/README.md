# mami_app

This is a skeleton React Native application for managing various financial records.

## Modules
- **University Expenses**
- **Club Budgets**
- **Project Allowances**
- **Staff Salaries**

Role-based authentication is implemented via a simple context provider. Only users signed in as `accountant` can add or modify financial data.

The app is configured to use Firebase as the cloud backend (see dependencies in `package.json`). You will need to add your Firebase configuration and install dependencies with `npm install` before building.

## Building and Running

1. Install dependencies (requires internet access):
   ```bash
   npm install
   ```
2. Start Metro bundler:
   ```bash
   npm start
   ```
3. In a separate terminal run:
   ```bash
   npm run android   # or npm run ios
   ```

Due to environment limitations in this repository, the full React Native CLI was not initialized via `npx react-native init`. Instead, a minimal project structure has been created manually.
