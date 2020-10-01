class Car {
  startEngine() {}
  accelerate() {}
}

class Seat extends Car {
  startEngine() {
    // start engine...
  }
  accelerate() {
    // accelerate...
  }
}

class TimeMachine {
  backToThePast() {}
  backToTheFuture() {}
}

// No in JS, use TS
class DeloRean implements ***<TimeMachine, Car> {
  startEngine() {
    // start engine...
  }
  accelerate() {
    // accelerate...
  }
  backToThePast() {
    // back to the past...
  }
  backToTheFuture() {
    // back to the future...
  }
}