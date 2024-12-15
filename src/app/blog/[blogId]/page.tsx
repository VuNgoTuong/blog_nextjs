"use client"
import { useParams } from "next/navigation";

export default function Index() {
  const params = useParams()
  console.log(params)
  return (
    <h1 className="font-bold">
        blog detail
    </h1>
  );
}
