export class Jobs {
    
    constructor(
    public id: number,
	public jobType: string,
    public templateId: string,
    public speed: string,
    public totalTime: string,
    public successCount: number,
    
    public failCount: number,
    public skipedCount: number,
    public totalCount: number,
    public mismatchCount: number,
    public extrasCount: number,
   
    
    
    
   
  ) {  }

}