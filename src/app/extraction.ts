export class Extraction {

    constructor(
    
    public objectType: string,
    public filter: string,
	public connectionName: string,
	public cleanPredicate: string,
    public targetCSVLocation: string,
    public extractLocation: string,
    public replicateFileStoreLocation: string,
    public batchName: string,
    public inputRelCSVPath: string,
    public rtable: string,
    public batchSize: string,
    
    public startDate: string,
    public endDate: string,
    public templateId: string,

	public contentLess :boolean,
	public exportAllVesion :boolean,
	public includeMantdatoryAttributes : boolean,
    public relationExtraction : boolean,
	public tableExtraction : boolean,
	public enableRename : boolean,
	public cleanContent : boolean,
    public includeRendition : boolean,
    public csvRequired : boolean,
	public selectedAttribute:String[]
    
  ) {  }

}
