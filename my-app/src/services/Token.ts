const TokenName = "@AcessTokenDailyRoutine";

class Token {
  static set(token: string) {
    localStorage.setItem(TokenName, token);
  }

  static get() {
    return localStorage.getItem(TokenName);
  }

  static remove() {
    return localStorage.removeItem(TokenName);
  }
}

export default Token;
