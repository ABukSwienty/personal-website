import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const PORTAL = {
  // document overlay
  OVERLAY: "overlay",
};

export interface PortalProps {
  children: React.ReactNode;
  portalTo?: keyof typeof PORTAL;
}

const Portal = ({ children, portalTo = "OVERLAY" }: PortalProps) => {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );
  useEffect(() => {
    setPortalContainer(document.getElementById(PORTAL[portalTo]));

    return () => setPortalContainer(null);
  }, [portalTo]);

  return portalContainer !== null
    ? createPortal(children, portalContainer)
    : null;
};

export default Portal;
