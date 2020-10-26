import React, { useState } from "react";

const Navbar = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <nav>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          {counter}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
