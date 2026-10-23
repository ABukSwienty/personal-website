import type { Metadata } from "next";
import { Suspense } from "react";

import { Page } from "@/components/layouts/page";
import { H1 } from "@/components/ui/typography/h";
import { P } from "@/components/ui/typography/p";
import { getMdFiles } from "@/utils/md";
import { DEV_LOG_DIR } from "./constants";
import { DevLogList, DevLogListFallback } from "./dev-log-list";
import { Link } from "@/components/ui/link";
import { ROUTES } from "@/utils/routes";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Dev log — Alexander Buk-Swienty",
};

export default async function Blogs() {
  const blogs = await getMdFiles(DEV_LOG_DIR);

  return (
    <Page className="space-y-8">
      <div className="space-y-4">
        <Link href={ROUTES.home} variant="buttonLike" className="w-fit">
          <ArrowLeftIcon weight="bold" />
          Home
        </Link>
        <div>
          <H1>Dev log</H1>
          <P className="text-xl">
            Notes on what I&apos;m building and how I&apos;m solving problems,
            and occasionally essays on the intersection of culture and
            technology.
          </P>
          <P className="text-sm text-muted-foreground">
            AI disclaimer: I do not use any AI in my writing but I do use it to
            fix grammar and spelling mistakes.
          </P>
        </div>
      </div>
      <Separator />
      <Suspense fallback={<DevLogListFallback entries={blogs} />}>
        <DevLogList entries={blogs} />
      </Suspense>
    </Page>
  );
}
