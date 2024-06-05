# Benchmark mobx with different ways of using

## How to run
```
npm run build
npm run bench
```

### Result
For me: Macbook Air M1
```
base x 16,671 ops/sec ±1.52% (85 runs sampled)
makeObservable x 35.58 ops/sec ±3.32% (50 runs sampled)
legacy-decorators x 30.85 ops/sec ±4.35% (57 runs sampled)
decorators x 53.88 ops/sec ±2.98% (71 runs sampled)
Fastest except base: decorators
```