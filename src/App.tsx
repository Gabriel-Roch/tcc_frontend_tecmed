import { Outlet, useMatches } from "react-router"
import AppLayout from "./app/layout/Layout"; "./app/layout/Layout"
import { useLayout } from "./context/layoutContext";
import { useEffect } from "react";

type MatchHandle = {
  title?: string
};

export default function App() {
  const matches = useMatches() as Array<{ handle?: MatchHandle }>
  const currentTitle = matches.find((match) => match.handle)?.handle?.title || "Página";
  const { title, setTitle } = useLayout()
  useEffect(() => {
    setTitle(currentTitle);
  }, [currentTitle, setTitle]);
  return (
    <AppLayout title={title}> <Outlet /></AppLayout>
  )
};

