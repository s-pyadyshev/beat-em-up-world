import * as React from "react";

const AuthPage: React.SFC = () => {
  return (
    <form>
      <label>
        login
        <input type="text" />
      </label>
      <label>
        password
        <input type="password" />
      </label>

      <button type="submit">Login</button>
    </form>
  );
};

export default AuthPage;
