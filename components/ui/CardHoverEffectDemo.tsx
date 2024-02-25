"use client";

import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <section className="max-w-5xl mx-auto px-8">
      <h2 className="text-5xl font-bold text-center">Solution !</h2>
      <HoverEffect items={projects} />
    </section>
  );
}
export const projects = [
  {
    title: "SIGGIS",
    description:
      "Ce Système d'Information Géographique (SIG) est principalement conçu pour vous assister dans la transplantation d'arbres adultes. L'objectif est de faciliter la visualisation des arbres transplantables et des groupes potentiellement problématique dans vos projets.",
    link: "",
  },
  {
    title: "Treeder",
    description:
      "une market place pour essayer de sauvegarder les abres destiné à l'abatage suite a des projets urbain quels que soient leur nature. Les arbres disponible sur cette market place sont issue des autres feature de matuzalem",
    link: "",
  },
  {
    title: "ASC",
    description:
      "Consulting et aide a la formation pour les professionnels de l'amenagement et les collectivités.",
    link: "",
  },
  {
    title: "CRM",
    description:
      "Un systeme de gestion de relation client, qui permet de suivre les clients, les contacts, les commandes et les devis, ainsi que les statistiques.",
    link: "",
  },
  {
    title: "DashBoard",
    description:
      "Un Darshboard pour suivre les statistiques de votre projet, entreprise, ville et pays, afin de pouvoir suivre l'avancement et l'implication de chacun dans cette bataille contre le rechauffement climatique grace a des indicateur concret.",
    link: "",
  },
  // {
  //   title: "New feature",
  //   description:
  //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //   link: "",
  // },
];
