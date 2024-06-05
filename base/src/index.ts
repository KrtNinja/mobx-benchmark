class Parent {
  prop1 = 0
  prop2 = ''
  propSubClass: Child[] = []

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.propSubClass.push(new Child())
    }
  }
}

class Child {
  prop1 = 0
  prop2 = ''
  prop3 = true

  setProp1(value: number = 1) {
    this.prop1 = value
    this.#updateSmth()
  }

  #updateSmth() {
    return true
  }
}

export function createLotClasses(count: number = 100) {
  const parents: Parent[] = [];
  for (let i = 0; i < count; i++) {
    parents.push(new Parent());
  }
  return parents;
}