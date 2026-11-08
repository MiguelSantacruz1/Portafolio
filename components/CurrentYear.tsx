"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return new Date().getFullYear();
}

function getServerSnapshot() {
  return 2025;
}

export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <>{year}</>;
}

