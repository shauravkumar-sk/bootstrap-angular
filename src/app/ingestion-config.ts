export class IngestionConfig{
    
    constructor(
    public connectionName: string,
    public cms: string,
    public filestoreLocation: string,
    public templateId: string,
    public objectType: string,
    public attrOldId: string,
    public contentLess: boolean,
    public newIdCheckEnabled: boolean,
    public csvIngestionEnabled:boolean,
    public csvFileLocation:String
    

    
  ) {  }

}
