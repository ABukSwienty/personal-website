import { DEV_LOG_DIR } from "@/app/dev-log/constants";
import { Page } from "@/components/layouts/page";
import { ExternalLink } from "@/components/ui/external-link";
import { Link } from "@/components/ui/link";
import { ROUTES } from "@/utils/routes";
import { H1, H4 } from "@/components/ui/typography/h";

import { Highlight } from "@/components/ui/typography/highlight";
import { P } from "@/components/ui/typography/p";
import { getMdFiles } from "@/utils/md";

import {
  ArrowRightIcon,
  AtIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/ssr";
import { Separator } from "@/components/ui/separator";
import { BlogPreviewCard } from "@/components/ui/blog/blog-preview-card";

export default async function Home() {
  const [latestPost] = await getMdFiles(DEV_LOG_DIR);

  return (
    <Page className="flex flex-1 flex-col gap-8">
      <div className="space-y-4">
        <H1>
          Alexander
          <br />
          Buk-Swienty
        </H1>
        <P className="text-xl">
          Currently exploring agentic systems for{" "}
          <ExternalLink href="https://www.ten4.ink/" label="TEN-4" /> and{" "}
          <ExternalLink
            href="https://www.cphla.dk"
            label="Copenhagen Literary Agency"
          />
          , and event kiosk design for{" "}
          <ExternalLink href="https://www.sony.com" label="Sony" />.
        </P>
        <P className="text-xl">
          Previously, lead backend on a pharma AI platform for{" "}
          <Highlight>Novo Nordisk</Highlight>, and lead mobile on a medication
          and interaction tracking app for{" "}
          <Highlight>Sygeforsikring “danmark”</Highlight> at{" "}
          <ExternalLink href="https://odagroup.dk" label="ODA Group" />.
        </P>
        <P className="text-xl">
          Former literary agent turned programmer. Started coding in 2019 to fix
          a data problem at the agency. Built a rights management system in PHP
          and MySQL from scratch, kept going, and eventually left for tech
          full-time.
        </P>
        <P className="italic">Berlin, Germany, 2026.</P>
      </div>

      {latestPost && (
        <>
          <Separator />

          <section className="flex flex-col gap-4 grow justify-between">
            <div className="space-y-2">
              <div>
                <H4>Dev log</H4>
                <P className="text-sm text-muted-foreground">
                  Notes on what I&apos;m building and how I&apos;m solving
                  problems, and occasionally essays on the intersection of
                  culture and technology.
                </P>
              </div>

              <div className="space-y-2">
                <P className="text-muted-foreground font-bold">Latest: </P>
                <BlogPreviewCard {...latestPost} />
              </div>
            </div>

            <Link
              href={ROUTES.devLog.index}
              variant="buttonLike"
              className="inline-flex items-center gap-2 w-fit"
            >
              All posts <ArrowRightIcon weight="bold" />
            </Link>
          </section>
        </>
      )}

      <footer className="mt-auto flex flex-col gap-8">
        <Separator />
        <div className="flex flex-row items-center justify-start gap-8">
          <ExternalLink
            hasIcon={false}
            href="https://github.com/ABukSwienty"
            label="GitHub"
            className="text-muted-foreground hover:text-foreground font-normal hover:no-underline flex flex-row items-center"
            icon={<GithubLogoIcon weight="bold" className="mr-2" />}
          />

          <ExternalLink
            hasIcon={false}
            href="https://www.linkedin.com/in/alexander-buk-swienty"
            label="LinkedIn"
            className="text-muted-foreground hover:text-foreground font-normal hover:no-underline flex flex-row items-center"
            icon={<LinkedinLogoIcon weight="bold" className="mr-2" />}
          />
          <ExternalLink
            hasIcon={false}
            href="mailto:alexanderbukswienty@gmail.com"
            label="Contact"
            className="text-muted-foreground hover:text-foreground font-normal hover:no-underline flex flex-row items-center"
            icon={<AtIcon weight="bold" className="mr-2" />}
          />
        </div>
      </footer>
    </Page>
  );
}
