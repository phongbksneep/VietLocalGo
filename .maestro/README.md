Maestro flows for VietLocalGo

To run flows locally:

1. Install Maestro CLI: https://maestro.mobile.dev
2. Start your app on the device/emulator and set env var MAESTRO_APP_ID to your app id (example: com.vietlocalgo)
3. Run: MAESTRO_APP_ID=com.vietlocalgo npm run test:maestro

Notes:
- Accessibility IDs used by flows: `search-bar`, `search-input`, `place-directions-button`, etc.
- Flows are simple smoke checks and may require tuning for timing/device differences.
- If a flow needs to open external Maps, the test will only tap and assert app didn't crash.
