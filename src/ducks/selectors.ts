import { TSupportedFaction } from 'meta/factions'
import { IStore } from 'types/store'
import { ICurrentArmy } from 'types/army'
import { TRealms } from 'types/realmscapes'

// Army
export const getArmy = (state: IStore) => state.army.army
export const getAllyArmies = (state: IStore) => state.army.allyArmies

// Faction Name
export const getFactionName = (state: IStore) => state.factionNames.factionName

// Realmscape
export const getRealmscape = (state: IStore) => state.realmscape.realmscape as TRealms | null
export const getRealmscapeFeature = (state: IStore) => state.realmscape.realmscape_feature

// Selections
export const getAllyFactionNames = (state: IStore) =>
  Object.keys(getAllySelections(state)) as TSupportedFaction[]
export const getAllySelections = (state: IStore) => state.selections.allySelections
export const getSelections = (state: IStore) => state.selections.selections

// Visibility
export const getAllies = (state: IStore) => state.visibility.allies
export const getReminders = (state: IStore) => state.visibility.reminders
export const getSelectors = (state: IStore) => state.visibility.selectors
export const getVisibility = (state: IStore) => state.visibility
export const getWhen = (state: IStore) => state.visibility.when

// Utils
export const getCurrentArmy = (state: IStore): ICurrentArmy => {
  return {
    allyFactionNames: getAllyFactionNames(state),
    allySelections: getAllySelections(state),
    factionName: getFactionName(state),
    realmscape_feature: getRealmscapeFeature(state),
    realmscape: getRealmscape(state),
    selections: getSelections(state),
  }
}
export const hasSelections = (state: IStore): boolean => {
  const selections = getSelections(state)
  return Object.values(selections).some(x => x.length > 0)
}
