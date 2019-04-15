export class FileConfig {

    constructor(
    public sourceFileSystem: string,
     public targetFileSystem: string,
     public templateId: string,
     public rootFileSystemPath: string,
     public modeOfTransfer: string,
     public enableCheckSumVerification: boolean
   
	
    
  ) {  }

}
