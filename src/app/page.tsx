import Button from "@/components/common/Button";
import { ArrowRightIcon } from "@/icons/Icons.component";

export default function Home() {
  return (
    <main className="w-full h-screen grid place-items-center">
      <div className="flex items-center gap-4">
        <Button variant="default">Button</Button>

        <Button variant="label" size="label">Label</Button>

        <Button variant="plain" size="plain">
          Arrow Right <ArrowRightIcon />
        </Button>
      </div>
    </main>
  );
}
