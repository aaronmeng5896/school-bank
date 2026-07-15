import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the School Bank advisor dashboard", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>School Bank｜美国私立寄宿学校官方数据库<\/title>/i);
  assert.match(html, /学校数据库/);
  assert.match(html, /ADVISOR INTELLIGENCE/);
  assert.match(html, /整体数据健康度/);
  assert.match(html, /Phillips Exeter Academy/);
  assert.match(html, /官方来源已核验/);
  assert.match(html, /查看学校官网/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("keeps search, filtering, school selection, and tabs interactive", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /useMemo, useState/);
  assert.match(page, /setQuery/);
  assert.match(page, /setVerifiedOnly/);
  assert.match(page, /setSelectedId/);
  assert.match(page, /setActiveTab/);
  assert.match(page, /toggleSave/);
  assert.match(layout, /School Bank｜美国私立寄宿学校官方数据库/);
  assert.match(css, /\.overview-strip/);
  assert.match(css, /\.content-grid/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview/);
});
