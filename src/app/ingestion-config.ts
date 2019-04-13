export class IngestionConfig{
    
    constructor(
	public connectionName: string,
    public filestoreLocation: string,
    public templateId: string,
    public objectType: string,
    public contentLess: boolean,
    public csvIngestionEnabled:boolean,
    public csvFileLocation:String

    
  ) {  }

}
