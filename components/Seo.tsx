"use client";

import { NextSeo, LocalBusinessJsonLd, FAQPageJsonLd } from "next-seo";
import {
  BUSINESS_PHONE_LINK,
  BUSINESS_PHONE_DISPLAY,
  PRIMARY_LOCATION,
  SITE_NAME,
  SITE_URL
} from "@/lib/seoConfig";

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  faqItems?: { question: string; answer: string }[];
};

export function Seo({ title, description, canonical, faqItems }: SeoProps) {
  const url = canonical ?? SITE_URL;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          siteName: SITE_NAME,
          type: "website"
        }}
        additionalMetaTags={[
          {
            name: "geo.region",
            content: "US-NC"
          },
          {
            name: "geo.placename",
            content: PRIMARY_LOCATION
          },
          {
            name: "ICBM",
            content: "35.955, -80.005" // approximate for High Point
          }
        ]}
      />
      <LocalBusinessJsonLd
        type="TreeService"
        id={`${SITE_URL}/#localbusiness`}
        name={SITE_NAME}
        description={description}
        url={SITE_URL}
        telephone={BUSINESS_PHONE_LINK}
        address={{
          streetAddress: "",
          addressLocality: "High Point",
          addressRegion: "NC",
          postalCode: "27260",
          addressCountry: "US"
        }}
        openingHours={[
          {
            opens: "00:00",
            closes: "23:59",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ]
          }
        ]}
      />
      {faqItems && faqItems.length > 0 && (
        <FAQPageJsonLd
          mainEntity={faqItems.map((item) => ({
            questionName: item.question,
            acceptedAnswerText: item.answer
          }))}
        />
      )}
    </>
  );
}

