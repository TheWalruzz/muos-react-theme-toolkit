// based on this article: https://medium.com/@lcgarcia/mastering-javascript-promises-building-a-promise-queue-from-scratch-d04902cbd6aa

export type PromiseGenerator<T> = () => Promise<T>;

type PromiseQueueItem<T> = {
  promiseGenerator: PromiseGenerator<T>;
  resolve: (value: T) => void;
  reject: (reason?: unknown) => void;
};

export class PromiseQueue<T> {
  private queue: PromiseQueueItem<T>[];
  private pendingPromises: number;
  private maxConcurrent: number;

  constructor(maxConcurrent = Infinity) {
    this.queue = [];
    this.pendingPromises = 0;
    this.maxConcurrent = maxConcurrent;
  }

  enqueue(promiseGenerator: PromiseGenerator<T>) {
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
    promiseGenerators: PromiseGenerator<T>[],
    maxConcurrent: number = 8
  ) {
    const queue = new PromiseQueue<T>(maxConcurrent);
    await Promise.all(
      promiseGenerators.map((generator) => queue.enqueue(generator))
    );
  }
}
