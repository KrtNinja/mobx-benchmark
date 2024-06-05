import Benchmark from "benchmark";

import * as benchBase from '@mobx-benchmark/base'
import * as benchMakeObservable from '@mobx-benchmark/make-observable'
import * as benchLegacyDecorators from '@mobx-benchmark/legacy-decorators'
import * as benchDecorators from '@mobx-benchmark/decorators'

const ITERATIONS_COUNT = 500
const suite = new Benchmark.Suite();
suite.add('base', () => {
  benchBase.createLotClasses(ITERATIONS_COUNT);
})
  .add('makeObservable', () => {
    benchMakeObservable.createLotClasses(ITERATIONS_COUNT);
  })
  .add('legacy-decorators', () => {
    benchLegacyDecorators.createLotClasses(ITERATIONS_COUNT);
  })
  .add('decorators', () => {
    benchDecorators.createLotClasses(ITERATIONS_COUNT)
  })
  .on('cycle', function (event: Benchmark.Event) {
    console.log(String(event.target))
  })
  .on('complete', function (this: Benchmark.Suite) {
    const fastestExceptBase = this.filter((b: Benchmark) => b.name !== 'base').filter('fastest').map('name')
    console.log(`Fastest except base: ${ fastestExceptBase }`);
  })
  .run({'async': true});
