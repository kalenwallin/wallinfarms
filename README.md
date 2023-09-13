<p align="center">
  <a href="https://wallinfarms.us">
    <img src="https://i.kalenwallin.com/file/portfoliov2/sharex/corn.png" height="96">
    <h3 align="center">Wallin Farms</h3>
  </a>
</p>

<p align="center">A website to generate scale ticket reports and manage crop storage</p>

<br/>

## Introduction

This is a hybrid Next.js + Python app that uses Next.js as the front end and FastAPI as the API backend allowing the use of Python libraries on the backend.

## How It Works

The Python/FastAPI server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/digitros/nextjs-fastapi/blob/main/next.config.js) to map any request to `/api/:path*` to the FastAPI API, which is hosted in the `/api` folder.

On localhost, the rewrite will be made to the `127.0.0.1:8000` port, which is where the FastAPI server is running.

In production, the FastAPI server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

## Developing Locally

You can clone & create this repo with the following command

```bash
git clone https://github.com/kalenwallin/wallinfarms
```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The FastApi server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Learn More

To learn more about Next.js + FastAPI, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [FastAPI Documentation](https://fastapi.tiangolo.com/) - learn about FastAPI features and API.
