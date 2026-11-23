This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 랜딩 추적 SDK

`.env.example`을 개발 환경에서는 `.env.local`, 스테이징에서는 `.env.stage.local`, 운영에서는 `.env.production.local`로 복사하세요. 추적 관리자에서 발급한 **SDK 사이트 ID**를 `NEXT_PUBLIC_TRACKING_SITE_ID`에 넣으면 CDN의 `LandingTracking` SDK가 로드됩니다. 추적 API 주소는 기존 `NEXT_PUBLIC_API_URL=/macs/api`를 기준으로 `/maus/api`를 자동 사용하므로 별도 환경 변수가 필요하지 않습니다. 사이트 ID나 API URL이 비어 있으면 SDK를 로드하지 않습니다.

추적 환경 변수를 설정하면 스테이징과 운영 모두 문의 저장 성공 시 새 토큰을 SDK에 등록하고 `/complete` 페이지에서 전환 처리를 기다린 뒤 홈으로 돌아갑니다. 운영 빌드에서는 `NEXT_PUBLIC_ENV=prod`로 설정하세요. SDK는 관리자에서 게시한 매체 설정에 따라 스크립트를 로드하므로, 개별 광고 매체 코드는 이 프로젝트에 추가하지 않습니다. 환경 변수는 Next.js 빌드 시 반영되므로 값을 변경한 뒤 다시 빌드해야 합니다.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
