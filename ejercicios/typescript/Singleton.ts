class Singleton {

  private static instance: Singleton;

  private constructor() {
    // init
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return this.instance;
  }
}

export default Singleton;