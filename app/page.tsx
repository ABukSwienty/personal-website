import { Page } from "@/components/layouts/page";
import { ExternalLink } from "@/components/ui/external-link";
import { H1 } from "@/components/ui/typography/h";

import { Highlight } from "@/components/ui/typography/highlight";
import { P } from "@/components/ui/typography/p";
import { Separator } from "@base-ui/react";
import {
  AtIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/ssr";

export default function Home() {
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

      <footer className="mt-auto flex flex-col gap-8">
        <Separator className="bg-muted h-px" />
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
