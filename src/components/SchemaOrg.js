import React from "react"
import Helmet from "react-helmet"

export default React.memo(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    logo,
    isBlogPost,
    organization,
    title,
    url,
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://www.christinavaillancourt.com/",
        name: "Christina Vaillancourt Registered Psychologist",
        alternateName: "Christina Vaillancourt Registered Psychologist",
        logo: logo,
        telephone: "(403) 999-9903",
        email: "info@christinavaillancourt.com",
        sameAs: [],
        url: "https://www.christinavaillancourt.com/",
        image: image,
        priceRange: "$$",
        description: description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Suite 240, 52 Gateway Dr NE",
          addressLocality: "Airdrie",
          addressRegion: "Alberta",
          postalCode: "T4B 0J6",
          addressCountry: "CA",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday"],
            opens: "",
            closes: "",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday"],
            opens: "",
            closes: "",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Wednesday"],
            opens: "",
            closes: "",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Thursday"],
            opens: "",
            closes: "",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday"],
            opens: "",
            closes: "",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "",
            closes: "",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "",
            closes: "",
          },
        ],
      },
    ]

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image,
            },
            description,
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              url: organization.url,
              logo: organization.logo,
              name: organization.name,
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": canonicalUrl,
            },
            datePublished,
          },
        ]
      : baseSchema

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)
