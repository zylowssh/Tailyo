# Tallyo — Gouvernance des abonnements SaaS

> **Centralisez, optimisez et maîtrisez vos dépenses SaaS**  
> La solution simple et abordable pour les PME de 50 à 500 employés qui veulent enfin savoir où part leur budget logiciel.

---

## 📋 Table des matières

- [Le problème](#le-problème)
- [Client cible](#client-cible-icp)
- [Concurrence](#concurrence-existante)
- [Fonctionnalités MVP](#fonctionnalités-mvp)
- [Modèle de prix](#modèle-de-prix)
- [Stack technique](#stack-technique)
- [Validation](#validation-avant-de-coder)
- [Go-to-Market](#aller-marché-go-to-market)
- [Démarrage](#démarrage)

---

## Le problème

Les entreprises de 20 à 500 employés accumulent des dizaines d'outils SaaS souscrits par différentes équipes, souvent sans visibilité centralisée.

**Résultat :**
- 🪑 Sièges payés mais inutilisés
- 🔄 Doublons d'outils (deux équipes paient pour la même fonction)
- ⏰ Renouvellements automatiques oubliés
- ❓ Personne ne sait exactement combien l'entreprise dépense en logiciels ni pourquoi

---

## Client cible (ICP)

| Critère | Description |
|---------|-------------|
| **Qui** | Responsables IT, Finance/FP&A, ou Ops dans des entreprises de 50-500 employés |
| **Pourquoi eux** | Assez grandes pour avoir un vrai problème (15-100+ outils SaaS), trop petites pour avoir un outil dédié comme Zylo ou Productiv |
| **Déclencheur d'achat** | Audit budgétaire, changement de CFO, ou *"on vient de découvrir qu'on payait pour un outil que personne n'utilise depuis 6 mois"* |

---

## Concurrence existante

### Solutions établies (Entreprises 500+)
- **Zylo, Productiv, Torii, Zluri** — chères, cycles de vente longs, taillées pour les grands comptes

### Notre créneau 🎯
> Version plus simple, moins chère, self-serve, pour les **PME que ces outils ignorent**

---

## Fonctionnalités MVP

### ✅ Au programme (le strict nécessaire)

1. 🔌 **Connexion aux comptes de facturation** — Stripe, cartes bancaires pro, ou import CSV des dépenses
2. 🤖 **Détection automatique** des abonnements SaaS récurrents
3. 🔔 **Alertes avant renouvellement** automatique
4. 👥 **Vue des sièges/licences** par outil (via intégration SSO : Okta/Google Workspace)
5. 📊 **Dashboard simple** — dépense totale, par équipe, par outil

### 🚫 Pas au MVP (viendra après)
- Rapprochement comptable complexe
- Négociation de contrats automatisée
- Workflow d'approbation d'achat

---

## Modèle de prix

| Option | Description |
|--------|-------------|
| **Abonnement mensuel** | Basé sur le nombre d'outils suivis ou le nombre d'employés (ex: 99-299€/mois pour PME) |
| **Alternative** | % des économies réalisées (plus dur à vendre au début, mais argument fort) |

---

## Stack technique

```
┌─────────────────────────────────────────────────────┐
│                    Frontend                         │
│         Next.js + React + Tailwind CSS              │
├─────────────────────────────────────────────────────┤
│                     Backend                         │
│              Node.js / Python                       │
├─────────────────────────────────────────────────────┤
│                  Base de données                    │
│            Relationnelle (PostgreSQL)               │
├─────────────────────────────────────────────────────┤
│               Intégrations                          │
│  💳 Bancaires : Plaid, GoCardless, Tink             │
│  🔐 SSO : Okta, Google Workspace, Microsoft Entra   │
└─────────────────────────────────────────────────────┘
```

---

## Validation avant de coder

### 📞 Parler à 15-20 responsables IT/Finance de PME
- LinkedIn, réseau, communautés Slack de CFO/RevOps

### ❓ Question clé
> *"Comment gérez-vous vos abonnements SaaS aujourd'hui, et qu'est-ce qui vous frustre le plus ?"*

### 🧪 Proposer une version "manuelle"
Toi qui fais l'audit à la main pour 3-5 entreprises payantes **avant** de tout automatiser → ça valide la volonté de payer avant d'investir dans le produit

---

## Aller-marché (Go-to-Market)

### 📝 Contenu LinkedIn/X ciblé
RevOps, FinOps, IT managers — pas du B2C viral, mais des posts type :
> *"Voici comment on a trouvé 40k€ de licences inutilisées"*

### 💬 Communautés
Slack/Discord de RevOps et FinOps

### 🎯 Cold outreach
PME en forte croissance (celles qui viennent de lever des fonds ont souvent explosé leur stack SaaS sans contrôle)

---

## Démarrage

### Installation

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

> **Note :** Les assets `public/og.png` et `public/textures/paper.png` sont requis pour un build complet.

---

<p align="center">
  <strong>Tallyo</strong> — Reprenez le contrôle de votre stack SaaS
</p>
