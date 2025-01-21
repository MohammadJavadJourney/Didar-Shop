"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
      <div className="text-destructive mb-4">
        <AlertTriangle className="w-12 h-12" />
      </div>
      <h2 className="text-2xl font-bold mb-2">مشکلی پیش آمد</h2>
      <p className="text-muted-foreground mb-4 text-center">
        متأسفانه در نمایش این بخش مشکلی پیش آمده است
      </p>
      <Button onClick={reset}>تلاش مجدد</Button>
    </div>
  );
}
