import { PerformanceObserver, performance } from "perf_hooks";

const performanceObserver = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(`${item.name}: ${item.duration}`);
  });
});

performanceObserver.observe({ entryTypes: ["measure"] });

export function measure(fn, name) {
  const start = `start:${name}`;
  const end = `end:${name}`;
  performance.mark(start);
  fn();
  performance.mark(end);
  performance.measure(name, start, end);
}
