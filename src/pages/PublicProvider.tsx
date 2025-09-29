import { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";

function PublicProvider({ children }: PropsWithChildren) {
  const [show, setShow] = useState<boolean>(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      window.location.href = "/";
    } else {
      setShow(true);
    }
  }, [token]);

  if (show) {
    return children;
  }

  return <></>;
}

export default PublicProvider;
