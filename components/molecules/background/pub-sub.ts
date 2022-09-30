export const pubSubSquares = {
  subscriptions: new Map(),
  subscribe(name: string, callback: Function) {
    pubSubSquares.subscriptions.set(name, callback);
  },
  publish(name: string) {
    if (pubSubSquares.subscriptions.has(name)) {
      pubSubSquares.subscriptions.get(name)();
    }
  },
};
