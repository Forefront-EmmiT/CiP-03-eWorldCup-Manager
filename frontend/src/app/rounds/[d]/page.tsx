"use client";

import { useParams } from "next/navigation";
import { validateD } from "shared/validation/formValidation";

export default function RoundPage() {
  const params = useParams();
  const d = Number(params.d);

  const validation = validateD(d, 19);

  if (!validation.isValid) {
    return <div>Error: {validation.errorMsg}</div>;
  }

  return <div>Round #{d}</div>;
}
