import { SITE_DESCRIPTION, SITE_URL } from "../lib/seo";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Zikorra",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/icons/zikorra-wordmark.png`,
        email: "support@zikorra.com",
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Zikorra",
        url: `${SITE_URL}/`,
        inLanguage: "en-NG",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
