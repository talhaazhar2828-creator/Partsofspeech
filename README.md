# Parts of Speech — Talha's Notes

A static, installable web app built from the supplied handwritten Parts of Speech notes and supplied paragraph screenshots.

## GitHub Pages
1. Upload the contents of this folder to a GitHub repository.
2. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`.
3. Open the generated GitHub Pages URL.
4. On a compatible phone/browser, use **Add to Home Screen / Install App** to make it behave like an app.

## Design
The UI uses an Apple-inspired black/white system aesthetic: system/SF Pro font stack, large typography, glassmorphism, `backdrop-filter: blur()`, spring-like transitions, and minimal controls. Apple fonts are not bundled; the system stack uses SF Pro when the device provides it and falls back cleanly elsewhere.

## Source handling
The two supplied PDFs are image-based. The original page images are included so no handwritten detail is lost to OCR. The organised notes intentionally preserve unusual/incomplete wording from the source rather than silently replacing it with textbook wording.
