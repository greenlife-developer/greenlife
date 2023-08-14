import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, name, type }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />}
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="keywords"
        content="software-development-company, akure, learn-to-code, GNLIFE, GNLIFE-Tech-Network, code-camp-for-children, akure-tech-companies, website-development, data-analysis"
      />
      <meta name="author" content="Afolabi Opeyemi" />
      {/* End Twitter tags */}
    </Helmet>
  );
}
