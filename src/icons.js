import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt, faSearch, faBars, faBookReader } from '@fortawesome/free-solid-svg-icons'

// Utiliser uniquement les icônes
library.add(faSignOutAlt, faSearch, faBars, faBookReader)

// Remplacer toutes les balises <i class="fa..."> par un <svg> et utiliser un MutationObserver pour
// continuer à le faire quand le DOM change.
dom.watch()
