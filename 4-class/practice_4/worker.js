// TODO 17: 在这里写实现代码
import Person from './person';

class Worker extends Person {
  constructor(name, age) {
    super(name, age);
  }
  introduce() {
    return `${super.introduce()} I am a Worker. I have a job.`;
  }
}

module.exports = Worker;
