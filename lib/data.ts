export const eur = (n: number) => `${n.toLocaleString("fr-FR")} €`;

export const SPEND_SERIES = [62, 88, 76, 70, 95, 121, 104, 118, 111, 143];

export const RENEWALS = [
  { name: "Monday.com", amount: "2 450 €", date: "15 mai 2024", days: 15 },
  { name: "HubSpot", amount: "7 200 €", date: "22 mai 2024", days: 22 },
  { name: "DocuSign", amount: "1 220 €", date: "5 juin 2024", days: 36 },
  { name: "Zoom", amount: "2 150 €", date: "18 juin 2024", days: 49 },
  { name: "Atlassian", amount: "3 890 €", date: "30 juin 2024", days: 61 },
];

export const CATS = [
  { label: "Collaboration", value: 28450, pct: "20%", color: "#6C5CE7" },
  { label: "Marketing", value: 24180, pct: "17%", color: "#4F7DF9" },
  { label: "Développement", value: 22300, pct: "16%", color: "#34C77B" },
  { label: "Sales", value: 18250, pct: "13%", color: "#F0564A" },
  { label: "Design", value: 11450, pct: "8%", color: "#F79A3E" },
  { label: "Autres", value: 37040, pct: "26%", color: "#F5C542" },
];

export const TEAMS_SPEND = [
  { label: "Marketing", amount: "36 450 €", pct: 25, share: "25%" },
  { label: "Product", amount: "28 600 €", pct: 20, share: "20%" },
  { label: "Sales", amount: "27 190 €", pct: 19, share: "19%" },
  { label: "IT", amount: "18 850 €", pct: 13, share: "13%" },
  { label: "Finance", amount: "12 320 €", pct: 8, share: "8%" },
  { label: "RH", amount: "7 180 €", pct: 5, share: "5%" },
];

export const TOOLS = [
  {
    name: "Slack",
    cat: "Collaboration",
    monthly: "4 600 €",
    users: "78 / 85",
    owner: "Marketing",
  },
  {
    name: "Microsoft 365",
    cat: "Productivité",
    monthly: "3 900 €",
    users: "57 / 60",
    owner: "IT",
  },
  {
    name: "HubSpot",
    cat: "CRM",
    monthly: "7 200 €",
    users: "45 / 50",
    owner: "Sales",
  },
  {
    name: "Figma",
    cat: "Design",
    monthly: "2 850 €",
    users: "22 / 25",
    owner: "Product",
  },
  {
    name: "Notion",
    cat: "Productivité",
    monthly: "1 200 €",
    users: "18 / 20",
    owner: "Product",
  },
  {
    name: "Zoom",
    cat: "Communication",
    monthly: "2 100 €",
    users: "31 / 35",
    owner: "IT",
  },
  {
    name: "Miro",
    cat: "Collaboration",
    monthly: "1 620 €",
    users: "15 / 20",
    owner: "Product",
  },
  {
    name: "Zendesk",
    cat: "Support",
    monthly: "2 940 €",
    users: "12 / 15",
    owner: "Customer Success",
  },
];

export const SUBS = [
  {
    plan: "HubSpot Professional",
    tool: "HubSpot",
    amount: "7 200 € / an",
    period: "Annuel",
    next: "22 mai 2024",
    status: "À venir",
  },
  {
    plan: "Slack Business+",
    tool: "Slack",
    amount: "4 600 € / an",
    period: "Annuel",
    next: "15 mai 2024",
    status: "À venir",
  },
  {
    plan: "Microsoft 365 E3",
    tool: "Microsoft 365",
    amount: "3 900 € / an",
    period: "Annuel",
    next: "12 juin 2024",
    status: "Actif",
  },
  {
    plan: "Figma Professional",
    tool: "Figma",
    amount: "2 850 € / an",
    period: "Annuel",
    next: "5 juin 2024",
    status: "À venir",
  },
  {
    plan: "Zoom Business",
    tool: "Zoom",
    amount: "2 100 € / an",
    period: "Annuel",
    next: "18 juin 2024",
    status: "Actif",
  },
  {
    plan: "Notion Team",
    tool: "Notion",
    amount: "1 200 € / an",
    period: "Annuel",
    next: "30 avril 2024",
    status: "Actif",
  },
];

export const USERS = [
  {
    name: "Léa Dubois",
    team: "Marketing",
    tools: 12,
    last: "Aujourd'hui",
    status: "Actif",
  },
  {
    name: "Thomas Martin",
    team: "Product",
    tools: 8,
    last: "Aujourd'hui",
    status: "Actif",
  },
  {
    name: "Sophie Bernard",
    team: "Sales",
    tools: 6,
    last: "Hier",
    status: "Actif",
  },
  {
    name: "Julien Moreau",
    team: "Design",
    tools: 7,
    last: "2 jours",
    status: "Actif",
  },
  {
    name: "Camille Rousseau",
    team: "IT",
    tools: 15,
    last: "Aujourd'hui",
    status: "Actif",
  },
  {
    name: "Marc Petit",
    team: "Finance",
    tools: 4,
    last: "5 jours",
    status: "Inactif",
  },
];

export const ALERTS = [
  {
    tone: "red",
    title: "Renouvellement dans 15 jours : Monday.com",
    sub: "7 200 € seront débités",
    prio: "Élevée",
    date: "10 avr. 2024",
  },
  {
    tone: "red",
    title: "Échec de paiement : Dropbox Business",
    sub: "Mettez à jour le moyen de paiement",
    prio: "Élevée",
    date: "29 avr. 2024",
  },
  {
    tone: "purple",
    title: "8 abonnements renouvelés automatiquement",
    sub: "Au cours des 30 derniers jours",
    prio: "Moyenne",
    date: "29 avr. 2024",
  },
  {
    tone: "orange",
    title: "16 utilisateurs n'ont utilisé aucun outil",
    sub: "Depuis plus de 30 jours",
    prio: "Moyenne",
    date: "28 avr. 2024",
  },
  {
    tone: "green",
    title: "Nouvel outil détecté : Notion",
    sub: "Dépense mensuelle : 78 €",
    prio: "Faible",
    date: "27 avr. 2024",
  },
];

export const INTEGRATIONS = [
  { name: "Compte bancaire", date: "Connecté le 15 avr. 2024", icon: "🏦" },
  {
    name: "Cartes bancaires pro",
    date: "Connecté le 12 avr. 2024",
    icon: "💳",
  },
  { name: "Stripe", date: "Connecté le 15 avr. 2024", icon: "S" },
  { name: "Google Workspace", date: "Connecté le 10 avr. 2024", icon: "G" },
  { name: "Okta", date: "Connecté le 10 avr. 2024", icon: "O" },
];

export const REPORTS = [
  {
    name: "Rapport mensuel",
    sub: "Vue d'ensemble des dépenses et abonnements",
    tag: "Actif",
  },
  {
    name: "Outils par équipe",
    sub: "Répartition des coûts par équipe",
    tag: "CSV",
  },
  {
    name: "Abonnements à venir",
    sub: "Renouvellements des 30 prochains jours",
    tag: "CSV",
  },
  {
    name: "Utilisateurs inactifs",
    sub: "Utilisateurs n'ayant pas utilisé d'outil",
    tag: "CSV",
  },
];

export const TEAMS = [
  { name: "Marketing", members: 12, owner: "Léa Dubois" },
  { name: "Product", members: 18, owner: "Thomas Martin" },
  { name: "Sales", members: 15, owner: "Sophie Bernard" },
  { name: "IT", members: 8, owner: "Julien Moreau" },
  { name: "Finance", members: 6, owner: "Marc Petit" },
  { name: "RH", members: 5, owner: "Camille Rousseau" },
];

export const INVOICES = [
  { month: "Avril 2024", amount: "199,00 €" },
  { month: "Mars 2024", amount: "199,00 €" },
  { month: "Février 2024", amount: "199,00 €" },
];
