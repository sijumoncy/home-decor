export interface AppContextInterface {
    currentMenu:string,
    mobNavOpen:boolean,
    setCurrentMenu: React.Dispatch<React.SetStateAction<string>>
    setMobNavOpen: React.Dispatch<React.SetStateAction<boolean>>
    
}
  
export interface AppProviderProps {
    children: React.ReactNode
}