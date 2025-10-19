// based on this article: https://medium.com/@lcgarcia/mastering-javascript-promises-building-a-promise-queue-from-scratch-d04902cbd6aa

export class PromiseQueue<T> {
  queue: Array<{
    promiseGenerator: () => Promise<T>;
    resolve: (value: T) => void;
    reject: (reason?: unknown) => void;
  }>;
  pendingPromises: number;
  maxConcurrent: number;
  resolvedCallback: () => void;

  constructor(maxConcurrent = Infinity, resolvedCallback = () => {}) {
    this.queue = [];
    this.pendingPromises = 0;
    this.maxConcurrent = maxConcurrent;
    this.resolvedCallback = resolvedCallback;
  }

  enqueue(promiseGenerator: () => Promise<T>) {
    return new Promise((resolve, reject) => {
      this.queue.push({ promiseGenerator, resolve, reject });
      this._dequeue();
    });
  }

  async _dequeue() {
    if (this.pendingPromises >= this.maxConcurrent) {
      return;
    }

    if (this.queue.length === 0) {
      if (this.pendingPromises === 0) {
        this.resolvedCallback();
      }
      return;
    }

    this.pendingPromises++;

    const { promiseGenerator, resolve, reject } = this.queue.shift()!;

    try {
      const result = await promiseGenerator();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.pendingPromises--;
      this._dequeue();
    }
  }

  static async all<T>(
    factories: (() => Promise<T>)[],
    maxConcurrent: number = 8
  ) {
    return new Promise((resolve) => {
      const queue = new PromiseQueue(maxConcurrent, () => resolve(null));

      for (const factory of factories) {
        queue.enqueue(factory);
      }
    });
  }
}
