# OpenWeb + Prebid.js test

This is a diagnostic page to check whether OpenWeb returns a bid through Prebid.js. It does not connect to Google Ad Manager and does not render a paid ad.

## Parameters
- bidder: `openweb`
- `org`: `259`
- `placementId`: `netpeak.net_hb_display`
- test size: `300x250`

`zoneId` is not included because the standard Prebid OpenWeb adapter documents `org` and `placementId` as its required parameters. Confirm with OpenWeb whether `zoneId` is required for a separate integration.

## 1. Add the custom Prebid build
1. Open https://docs.prebid.org/download/
2. Select a current supported Prebid.js version.
3. Select **OpenWeb** under **Bidder Adapters**.
4. Download the generated JavaScript file.
5. Rename it to `prebid.js` and upload it to the repository root next to `index.html`.

Alternatively, build from https://github.com/prebid/Prebid.js and include `openwebBidAdapter`.

## 2. Enable GitHub Pages
1. Open repository **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`, then save.
4. Wait for deployment.

Expected URL: https://adx-frc.github.io/openweb-prebid-test/

## 3. Run the test
Open the Pages URL and click **Run OpenWeb auction**. Review the status, results, browser Console, and Network tab.

If no bid returns, possible causes include missing adapter in `prebid.js`, incomplete placement configuration, timeout, or OpenWeb needing to approve/allowlist the GitHub Pages domain.

A returned bid confirms the adapter received a bid response. It does not confirm a rendered impression, GAM integration, revenue, or production approval.

Do not put passwords, private API keys, or other secrets in this public repository.
