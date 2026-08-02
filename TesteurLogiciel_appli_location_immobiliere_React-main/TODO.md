# TODO — Suppression de `react-icons` et `prop-types`

## Étapes approuvées (plan validé)

- [x] Étape 1 : Analyse des fichiers importants `react-icons` / `prop-types`
- [x] Étape 2 : Créer `src/components/icons/ChevronIcon.jsx` (SVG inline React, remplacement de `FiChevronDown`)
- [x] Étape 3 : Modifier `src/components/Collapse/Collapse.jsx` (supprimer imports/propTypes, utiliser ChevronIcon)
- [x] Étape 4 : Nettoyer `frontend/kasa/package.json` (retirer `prop-types` et `react-icons` des dependencies)
- [x] Étape 5 : Validation — `npm test` (30/30 OK), `npm run build` (OK) — `npm uninstall` laissé à l'utilisateur

