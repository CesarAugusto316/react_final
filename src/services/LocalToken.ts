/**
 *
 * @description {Singleton} Since we could have many classes that inherit from
 * RestAPI, we will be reading many times from localStorage the same value.
 * So we have only one instance that holds that value which is a synchronous
 * operation.
 */
export class LocalToken {
  private static instance: LocalToken;
  private value: string|null = localStorage.getItem('react-auth-token');

  private constructor() {}

  public static getInstance(): LocalToken {
    if (!LocalToken.instance) {
      console.log('I am a singleton Token from localStorage');
      LocalToken.instance = new LocalToken();
    }
    return LocalToken.instance;
  }

  setValue(newToken: string): void {
    this.value = newToken;
    localStorage.setItem('react-auth-token', newToken);
  }

  deleteValue(): void {
    this.value = null;
    localStorage.removeItem('react-auth-token');
  }

  getValue(): string|null {
    return this.value;
  }
}
